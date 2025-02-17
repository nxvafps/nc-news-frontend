import { ArticleMeta, MetaItem } from "./styles";

export const ArticleMetadata = ({ topic, votes, commentCount, author }) => {
  return (
    <ArticleMeta role="list">
      <MetaItem
        role="listitem"
        aria-label={`Topic: ${topic}`}
        title={`Article topic: ${topic}`}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
        <span>{topic}</span>
      </MetaItem>
      <MetaItem
        role="listitem"
        aria-label={`${votes} votes`}
        title={`This article has ${votes} votes`}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
          <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
        </svg>
        <span>{votes}</span>
      </MetaItem>
      <MetaItem
        role="listitem"
        aria-label={`${commentCount} comments`}
        title={`${commentCount} comments on this article`}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
          <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
        </svg>
        <span>{commentCount}</span>
      </MetaItem>
      <MetaItem
        role="listitem"
        aria-label={`Author: ${author}`}
        title={`Written by ${author}`}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
        <span>{author}</span>
      </MetaItem>
    </ArticleMeta>
  );
};
