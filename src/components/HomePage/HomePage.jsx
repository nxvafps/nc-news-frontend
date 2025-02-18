import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../../api/articlesService";
import { getTopics } from "../../api/topicsService";
import { ArticleItem } from "../";
import styled from "styled-components";

const HomePageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const TopArticlesSection = styled.section`
  margin-top: 2rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.02em;
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TopicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const TopicCard = styled(Link)`
  padding: 1.75rem;
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.background.secondary},
    ${({ theme }) => theme.colors.glass.background}
  );
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px ${({ theme }) => theme.colors.shadow.primary};

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.accent.primary};
    box-shadow: 0 12px 48px ${({ theme }) => theme.colors.shadow.primary};
  }

  h3 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.25rem;
    margin: 0 0 0.75rem 0;
    text-transform: capitalize;
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

const HomePage = () => {
  const [topArticles, setTopArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [articlesResponse, topicsData] = await Promise.all([
          getArticles({
            sort_by: "votes",
            order: "desc",
            limit: 3,
          }),
          getTopics(),
        ]);
        setTopArticles(articlesResponse.articles);
        setTopics(topicsData.slice(0, 3));
      } catch (err) {
        setError("Failed to load content");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <HomePageContainer>
      <h1>Welcome to NC News</h1>

      <TopArticlesSection>
        <SectionTitle>Popular Topics</SectionTitle>
        {!isLoading && !error && (
          <TopicsGrid>
            {topics.map((topic) => (
              <TopicCard key={topic.slug} to={`/articles?topic=${topic.slug}`}>
                <h3>{topic.slug}</h3>
                <p>{topic.description}</p>
              </TopicCard>
            ))}
          </TopicsGrid>
        )}

        <SectionTitle>Top Articles</SectionTitle>
        {isLoading && <p>Loading content...</p>}
        {error && <p role="alert">{error}</p>}

        {!isLoading && !error && (
          <ArticlesGrid>
            {topArticles.map((article) => (
              <ArticleItem key={article.article_id} article={article} />
            ))}
          </ArticlesGrid>
        )}
      </TopArticlesSection>
    </HomePageContainer>
  );
};

export default HomePage;
