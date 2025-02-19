import { useState, memo } from "react";
import {
  ArticleLink,
  ArticleCard,
  ArticleImage,
  ArticleContent,
  ArticleTitle,
  ArticleTime,
  AuthorContainer,
  AuthorAvatar,
  StyledFaUserCircle,
} from "./styles";
import { ArticleMetadata } from "./ArticleMeta";
import { useUserAvatar } from "../../hooks";
import { formatArticleDate } from "../../utils/dateUtils";

const ArticleItem = memo(function Article({ article }) {
  const avatarUrl = useUserAvatar(article.author);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const formattedDate = formatArticleDate(article.created_at);

  return (
    <ArticleLink
      to={`/articles/${article.article_id}`}
      aria-labelledby={`article-${article.article_id}-title`}
    >
      <ArticleCard>
        <AuthorContainer>
          {avatarUrl ? (
            <AuthorAvatar
              src={avatarUrl}
              alt={`${article.author}'s profile picture`}
              loading="lazy"
              onLoad={() => setAvatarLoaded(true)}
              style={{
                opacity: avatarLoaded ? 1 : 0.6,
                transform: avatarLoaded ? "scale(1)" : "scale(0.95)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          ) : (
            <StyledFaUserCircle />
          )}
        </AuthorContainer>
        <ArticleImage
          src={article.article_img_url}
          alt=""
          loading="lazy"
          role="presentation"
          onLoad={() => setImageLoaded(true)}
          style={{
            opacity: imageLoaded ? 1 : 0,
            transform: imageLoaded ? "scale(1)" : "scale(1.05)",
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        <ArticleContent>
          <ArticleTitle id={`article-${article.article_id}-title`}>
            {article.title}
          </ArticleTitle>
          <ArticleMetadata
            topic={article.topic}
            votes={article.votes}
            commentCount={article.comment_count}
            author={article.author}
          />
          <ArticleTime
            dateTime={article.created_at}
            aria-label={`Published on ${formattedDate}`}
            title={`Published on ${formattedDate}`}
          >
            {formattedDate}
          </ArticleTime>
        </ArticleContent>
      </ArticleCard>
    </ArticleLink>
  );
});

export default ArticleItem;
