import api from "./axios";

export const getComments = async (articleId) => {
  const response = await api.get(`/articles/${articleId}/comments`);
  return response.data;
};

export const updateCommentVotes = async (commentId, voteChange, token) => {
  const response = await api.patch(
    `/comments/${commentId}`,
    {
      inc_votes: voteChange,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const postComment = async (articleId, comment, token) => {
  const response = await api.post(
    `/articles/${articleId}/comments`,
    { body: comment },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const updateComment = async (commentId, comment, token) => {
  const response = await api.put(
    `/comments/${commentId}`,
    {
      body: comment,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const deleteComment = async (commentId, token) => {
  await api.delete(`/comments/${commentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const fetchCommentAuthor = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data.user;
};
