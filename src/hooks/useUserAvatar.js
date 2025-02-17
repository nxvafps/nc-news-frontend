import { useState, useEffect } from "react";
import api from "../api/axios";
import axios from "axios";

export const useUserAvatar = (username) => {
  const [userAvatar, setUserAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUserAvatar = async () => {
      try {
        setIsLoading(true);
        const { data } = await api.get(`/users/${username}`, {
          signal: controller.signal,
        });
        setUserAvatar(data.user.avatar_url);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error("Failed to fetch user avatar:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserAvatar();
    return () => controller.abort();
  }, [username]);

  return { userAvatar, isLoading };
};
