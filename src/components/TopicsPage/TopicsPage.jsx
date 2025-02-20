import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useTopics } from "../../hooks";
import TopicForm from "./TopicForm";
import {
  TopicsContainer,
  TopicsGrid,
  TopicCard,
  TopicTitle,
  TopicDescription,
  TopicsHeader,
  AddTopicButton,
} from "./styles";

const TopicsPage = () => {
  const { topics, isLoading, error, refetch } = useTopics();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  const [showForm, setShowForm] = useState(false);

  const handleTopicClick = (slug) => {
    navigate(`/articles?topic=${slug}&sort_by=created_at&order=desc&p=1`);
  };

  const handleTopicCreated = () => {
    refetch();
    setShowForm(false);
  };

  if (isLoading) return <TopicsContainer>Loading topics...</TopicsContainer>;
  if (error) return <TopicsContainer>Error: {error}</TopicsContainer>;

  return (
    <TopicsContainer>
      <TopicsHeader>
        <h1>Topics</h1>
        {isAuth && !showForm && (
          <AddTopicButton onClick={() => setShowForm(true)}>
            Add Topic
          </AddTopicButton>
        )}
      </TopicsHeader>

      {showForm && (
        <TopicForm
          onTopicCreated={handleTopicCreated}
          onCancel={() => setShowForm(false)}
        />
      )}

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
