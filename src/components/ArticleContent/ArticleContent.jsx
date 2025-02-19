import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteArticle } from "../../api/articlesService";
import AuthorAvatar from "./AuthorAvatar";
import {
  ArticleContainer,
  ArticleTitle,
  ArticleImage,
  AuthorSection,
  AuthorInfo,
  ArticleMeta,
  MetaItem,
  VoteSection,
  ArticleBody,
  VoteButton,
  ArticleActions,
  ActionButton,
} from "./styles";

const ArticleContent = ({
  article,
  authorAvatar,
  votes,
  userVote,
  onVote,
  isVoting,
}) => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const formattedDate = new Date(article.created_at).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const handleEdit = () => {
    navigate(`/articles/${article.article_id}/edit`);
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this article?")) {
      return;
    }

    try {
      setIsDeleting(true);
      await deleteArticle(article.article_id, auth.token);
      navigate("/articles");
    } catch (error) {
      console.error("Failed to delete article:", error);
      alert("Failed to delete article. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  const isAuthor = auth.user?.user.username === article.author;

  return (
    <ArticleContainer>
      <header>
        <ArticleTitle id={`article-${article.article_id}-title`}>
          {article.title}
        </ArticleTitle>

        <ArticleImage
          src={article.article_img_url}
          alt={`Featured image for article: ${article.title}`}
          loading="lazy"
        />

        <AuthorSection>
          <AuthorAvatar author={article.author} avatarUrl={authorAvatar} />
          <AuthorInfo>
            <h3>Written by {article.author}</h3>
            <time
              dateTime={article.created_at}
              aria-label={`Published on ${formattedDate}`}
            >
              {formattedDate}
            </time>
          </AuthorInfo>
        </AuthorSection>

        <ArticleMeta role="list">
          <MetaItem role="listitem" aria-label={`Topic: ${article.topic}`}>
            <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
            <span>{article.topic}</span>
          </MetaItem>
          <MetaItem
            role="listitem"
            aria-label={`${article.comment_count} comments`}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
              <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
            </svg>
            <span>{article.comment_count} comments</span>
          </MetaItem>
          <VoteSection role="group" aria-label="Article voting">
            <VoteButton
              onClick={() => onVote(1)}
              disabled={isVoting}
              $active={userVote === 1}
              aria-label="Upvote article"
              aria-pressed={userVote === 1}
              title="Upvote"
            >
              ↑
            </VoteButton>
            <span aria-live="polite">
              {votes} {Math.abs(votes) === 1 ? "vote" : "votes"}
            </span>
            <VoteButton
              onClick={() => onVote(-1)}
              disabled={isVoting}
              $active={userVote === -1}
              aria-label="Downvote article"
              aria-pressed={userVote === -1}
              title="Downvote"
            >
              ↓
            </VoteButton>
          </VoteSection>
        </ArticleMeta>
      </header>

      <ArticleBody>
        {article.body.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </ArticleBody>

      {isAuthor && (
        <ArticleActions>
          <ActionButton
            onClick={handleEdit}
            disabled={isDeleting}
            aria-label="Edit article"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
            Edit
          </ActionButton>
          <ActionButton
            onClick={handleDelete}
            disabled={isDeleting}
            $delete
            aria-label="Delete article"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            </svg>
            {isDeleting ? "Deleting..." : "Delete"}
          </ActionButton>
        </ArticleActions>
      )}
    </ArticleContainer>
  );
};

export default ArticleContent;
