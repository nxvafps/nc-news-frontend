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

export const editUserAvatar = async (username, avatarUrl, token) => {
  const { data } = await axios.put(
    `/users/${username}/avatar`,
    {
      avatar_url: avatarUrl,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data.user;
};

export const fetchUserAvatar = async (username) => {
  const { data } = await axios.get(`/users/${username}`);
  return data.user.avatar_url;
};
