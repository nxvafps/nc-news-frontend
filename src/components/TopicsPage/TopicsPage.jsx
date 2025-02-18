import { useNavigate } from "react-router-dom";
import { useTopics } from "../../hooks";
import {
  TopicsContainer,
  TopicsGrid,
  TopicCard,
  TopicTitle,
  TopicDescription,
} from "./styles";

const TopicsPage = () => {
  const { topics, isLoading, error } = useTopics();
  const navigate = useNavigate();

  const handleTopicClick = (slug) => {
    navigate(`/articles?topic=${slug}&sort_by=created_at&order=desc&p=1`);
  };

  if (isLoading) return <TopicsContainer>Loading topics...</TopicsContainer>;
  if (error) return <TopicsContainer>Error: {error}</TopicsContainer>;

  return (
    <TopicsContainer>
      <h1>Topics</h1>
      <TopicsGrid>
        {topics.map((topic) => (
          <TopicCard
            key={topic.slug}
            onClick={() => handleTopicClick(topic.slug)}
          >
            <TopicTitle>{topic.slug}</TopicTitle>
            <TopicDescription>{topic.description}</TopicDescription>
          </TopicCard>
        ))}
      </TopicsGrid>
    </TopicsContainer>
  );
};

export default TopicsPage;
