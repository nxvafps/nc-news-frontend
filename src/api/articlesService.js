import api from "./axios";

export const getArticles = async (params = {}) => {
  const response = await api.get("/articles", { params });
  return response.data;
};

export const searchArticles = async (searchTerm) => {
  const response = await api.get("/articles/search", {
    params: { q: searchTerm },
  });
  return response.data.articles; // Assuming the response contains an articles array
};

export const getArticleById = async (articleId) => {
  const response = await api.get(`/articles/${articleId}`);
  return response.data.article;
};

export const getArticleComments = async (articleId, page) => {
  const response = await api.get(`/articles/${articleId}/comments`, {
    params: { p: page },
  });
  return response.data;
};

export const updateArticleVotes = async (articleId, voteChange, token) => {
  const response = await api.patch(
    `/articles/${articleId}`,
    { inc_votes: voteChange },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const createComment = async (articleId, comment, token) => {
  const response = await api.post(
    `/articles/${articleId}/comments`,
    { body: comment },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data.comment;
};

export const createArticle = async (articleData, token) => {
  const response = await api.post("/articles", articleData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.article;
};

export const updateArticle = async (articleId, articleData, token) => {
  const response = await api.put(`/articles/${articleId}`, articleData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.article;
};

export const deleteArticle = async (articleId, token) => {
  await api.delete(`/articles/${articleId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
