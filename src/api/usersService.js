import axios from "./axios";

export const fetchUsers = async () => {
  const { data } = await axios.get("/users");
  return data.users;
};

export const fetchUserByUsername = async (username) => {
  const { data } = await axios.get(`/users/${username}`);
  return data.user;
};

export const fetchUserArticles = async (username) => {
  const { data } = await axios.get(`/articles?author=${username}`);
  return data.articles;
};
