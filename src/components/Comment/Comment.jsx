import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "../../store/features/authSlice";
import { useSelector } from "react-redux";
import { useUserAvatar, useCommentVoting } from "../../hooks";
import CommentAvatar from "./CommentAvatar";
import VoteSection from "./VoteSection";
import { updateComment, deleteComment } from "../../api/commentService";
import {
  CommentContainer,
  CommentContent,
  CommentHeader,
  CommentAuthor,
  CommentBody,
  CommentFooter,
  CommentTime,
  ActionButtons,
  ActionButton,
  EditForm,
  EditTextarea,
  EditButtons,
} from "./styles";

function Comment({ comment, onCommentUpdated, onCommentDeleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBody, setEditedBody] = useState(comment.body);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const { token, user, isAuth } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token) {
      dispatch(fetchCurrentUser())
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [dispatch, token]);

  const avatar = useUserAvatar(comment.author);
  const { votes, userVote, isVoting, handleVote } = useCommentVoting(
    comment.votes,
    comment.comment_id,
    { user, token }
  );

  const isCommentAuthor =
    isAuth && user && user.user.username === comment.author;

  const formattedDate = new Date(comment.created_at).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!editedBody.trim() || editedBody === comment.body) {
      setIsEditing(false);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const updatedComment = await updateComment(
        comment.comment_id,
        editedBody.trim(),
        token
      );
      onCommentUpdated(updatedComment.comment);
      setIsEditing(false);
      setEditedBody(updatedComment.comment.body);
    } catch (err) {
      setError(err.message || "Failed to update comment");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this comment?")) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await deleteComment(comment.comment_id, token);
      onCommentDeleted(comment.comment_id);
    } catch (err) {
      setError(err.message || "Failed to delete comment");
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <CommentContainer role="article">
      <CommentAvatar author={comment.author} avatarUrl={avatar} />
      <CommentContent>
        <CommentHeader>
          <CommentAuthor>{comment.author}</CommentAuthor>
          <CommentTime
            dateTime={comment.created_at}
            aria-label={`Posted on ${formattedDate}`}
            title={`Posted on ${formattedDate}`}
          >
            {formattedDate}
          </CommentTime>
        </CommentHeader>

        {isEditing ? (
          <EditForm onSubmit={handleEdit}>
            <EditTextarea
              value={editedBody}
              onChange={(e) => setEditedBody(e.target.value)}
              disabled={isSubmitting}
              required
            />
            <EditButtons>
              <ActionButton
                type="submit"
                disabled={isSubmitting || !editedBody.trim()}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save"}
              </ActionButton>
              <ActionButton
                type="button"
                onClick={() => setIsEditing(false)}
                disabled={isSubmitting}
              >
                Cancel
              </ActionButton>
            </EditButtons>
          </EditForm>
        ) : (
          <CommentBody>{comment.body}</CommentBody>
        )}

        <CommentFooter>
          <VoteSection
            votes={votes}
            userVote={userVote}
            isVoting={isVoting}
            onVote={handleVote}
          />

          {isCommentAuthor && !isEditing && (
            <ActionButtons>
              <ActionButton
                onClick={() => setIsEditing(true)}
                disabled={isSubmitting}
                aria-label="Edit comment"
              >
                ✎ Edit
              </ActionButton>
              <ActionButton
                onClick={handleDelete}
                disabled={isSubmitting}
                aria-label="Delete comment"
                style={{ color: "var(--error-color)" }}
              >
                🗑 Delete
              </ActionButton>
            </ActionButtons>
          )}

          {error && !isEditing && (
            <div role="alert" style={{ color: "var(--error-color)" }}>
              <span aria-hidden="true">⚠️</span> {error}
            </div>
          )}
        </CommentFooter>
      </CommentContent>
    </CommentContainer>
  );
}

export default Comment;
