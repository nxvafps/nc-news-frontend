import { Comment, Pagination } from "..";

import { CommentsSection, CommentsTitle, CommentsContainer } from "./styles";

function CommentsList({
  comments,
  currentPage,
  totalPages,
  onPageChange,
  articleId,
  onCommentUpdated,
  onCommentDeleted,
}) {
  const commentsCount = comments.length;

  return (
    <CommentsSection>
      <CommentsTitle>
        {commentsCount} {commentsCount === 1 ? "Comment" : "Comments"}
      </CommentsTitle>
      <CommentsContainer
        role="feed"
        aria-busy={false}
        aria-label="Comments section"
      >
        {comments.map((comment) => (
          <Comment
            key={comment.comment_id}
            comment={comment}
            articleId={articleId}
            onCommentUpdated={onCommentUpdated}
            onCommentDeleted={onCommentDeleted}
          />
        ))}
        {comments.length === 0 && (
          <p
            style={{
              textAlign: "center",
              color: "var(--text-secondary)",
              padding: "2rem",
            }}
          >
            No comments yet. Be the first to share your thoughts!
          </p>
        )}
      </CommentsContainer>
      {totalPages > 1 && (
        <nav aria-label="Comments pagination">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </nav>
      )}
    </CommentsSection>
  );
}
export default CommentsList;
