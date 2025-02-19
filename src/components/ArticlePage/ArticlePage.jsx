import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArticleContent, CommentsList, PostComment } from "../";
import { useComments, useArticle, useArticleVoting } from "../../hooks";

import {
  ArticlePageContainer,
  LoadingMessage,
  ErrorMessage,
  BackButton,
  ArticleCommentsSection,
  NavigationContainer,
} from "./styles";

function ArticlePage() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const {
    article,
    authorAvatar,
    isLoading: articleLoading,
    error: articleError,
    updateArticleVotes,
  } = useArticle(articleId);

  const { votes, userVote, isVoting, handleVote } = useArticleVoting(
    article ? article.votes : 0,
    articleId,
    auth,
    updateArticleVotes
  );

  const {
    comments,
    currentPage,
    totalPages,
    setCurrentPage,
    isLoading: commentsLoading,
    error: commentsError,
    setComments,
    updateComment,
  } = useComments(articleId);

  const handleCommentPosted = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  const handleCommentUpdated = (updatedComment) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.comment_id === updatedComment.comment_id
          ? updatedComment
          : comment
      )
    );
  };

  const handleCommentDeleted = (deletedCommentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.comment_id !== deletedCommentId)
    );
  };

  if (articleLoading) {
    return (
      <LoadingMessage role="status" aria-live="polite">
        <span aria-hidden="true">⌛</span> Loading article...
      </LoadingMessage>
    );
  }

  if (articleError) {
    return (
      <ErrorMessage role="alert">
        <span aria-hidden="true">⚠️</span> {articleError}
      </ErrorMessage>
    );
  }

  if (!article) {
    return (
      <ErrorMessage role="alert">
        <span aria-hidden="true">🔍</span> Article not found
      </ErrorMessage>
    );
  }

  return (
    <ArticlePageContainer>
      <NavigationContainer aria-label="Article navigation">
        <BackButton
          onClick={() => navigate("/articles")}
          aria-label="Go back to articles list"
        >
          <span aria-hidden="true">←</span> Back to Articles
        </BackButton>
      </NavigationContainer>

      <main>
        <ArticleContent
          article={article}
          authorAvatar={authorAvatar}
          votes={votes}
          userVote={userVote}
          onVote={handleVote}
          isVoting={isVoting}
        />

        <ArticleCommentsSection aria-label="Article comments">
          <PostComment
            articleId={articleId}
            onCommentPosted={handleCommentPosted}
          />

          {commentsError ? (
            <ErrorMessage role="alert">
              <span aria-hidden="true">⚠️</span> {commentsError}
            </ErrorMessage>
          ) : (
            <CommentsList
              comments={comments}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              isLoading={commentsLoading}
              articleId={articleId}
              onCommentUpdated={handleCommentUpdated}
              onCommentDeleted={handleCommentDeleted}
            />
          )}
        </ArticleCommentsSection>
      </main>
    </ArticlePageContainer>
  );
}

export default ArticlePage;
