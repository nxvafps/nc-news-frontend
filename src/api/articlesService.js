import api from "./axios";

export const getArticles = async (params = {}) => {
  const response = await api.get("/articles", { params });
  return response.data;
};
