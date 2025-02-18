import { useState } from "react";
import { useSelector } from "react-redux";
import { postComment } from "../../api/commentService";
import {
  CommentForm,
  CommentTextarea,
  SubmitButton,
  ErrorMessage,
} from "./styles";

function PostComment({ articleId, onCommentPosted }) {
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const auth = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const newComment = await postComment(
        articleId,
        comment.trim(),
        auth.token
      );
      setComment("");
      if (onCommentPosted) {
        onCommentPosted(newComment.comment);
      }
    } catch (err) {
      setError(err.message || "Failed to post comment");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!auth.isAuth) {
    return (
      <div role="alert" style={{ textAlign: "center", padding: "1rem" }}>
        Please log in to post comments.
      </div>
    );
  }

  return (
    <CommentForm onSubmit={handleSubmit}>
      {error && (
        <ErrorMessage role="alert">
          <span aria-hidden="true">⚠️</span> {error}
        </ErrorMessage>
      )}
      <CommentTextarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment here..."
        aria-label="Write a comment"
        disabled={isSubmitting}
        required
      />
      <SubmitButton
        type="submit"
        disabled={isSubmitting || !comment.trim()}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? "Posting..." : "Post Comment"}
      </SubmitButton>
    </CommentForm>
  );
}

export default PostComment;
