import api from "./axios";

export const getTopics = async () => {
  const response = await api.get("/topics");
  return response.data.topics;
};

export const getArticlesByTopic = async (topic, params = {}) => {
  const response = await api.get("/articles", {
    params: { topic, ...params },
  });
  return response.data;
};

export const createTopic = async (topicData, token) => {
  const response = await api.post("/topics", topicData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.topic;
};
