import { useState, useEffect } from "react";
import { ArticleItem } from "../";
import { fetchUserArticles } from "../../api/usersService";
import {
  ArticlesSection,
  ArticlesTitle,
  ArticlesContainer,
  InfoItem,
} from "./styles";

const UserArticles = ({ username }) => {
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setArticlesLoading(true);
        const userArticles = await fetchUserArticles(username);
        setArticles(userArticles);
      } catch (err) {
        console.error("Failed to load articles:", err);
      } finally {
        setArticlesLoading(false);
      }
    };

    if (username) {
      loadArticles();
    }
  }, [username]);

  return (
    <ArticlesSection>
      <ArticlesTitle>Your Articles</ArticlesTitle>
      <ArticlesContainer>
        {articlesLoading ? (
          <InfoItem>Loading articles...</InfoItem>
        ) : articles.length === 0 ? (
          <InfoItem style={{ textAlign: "center" }}>
            You haven't written any articles yet.
            <br />
            <span style={{ fontSize: "0.9em", opacity: 0.7 }}>
              Time to start writing!
            </span>
          </InfoItem>
        ) : (
          articles.map((article, index) => (
            <div
              key={article.article_id}
              style={{
                animation: `fadeInUp 0.5s ease forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <ArticleItem article={article} />
            </div>
          ))
        )}
      </ArticlesContainer>
    </ArticlesSection>
  );
};

export default UserArticles;
