import { useEffect, useState } from "react";
import { fetchCommentAuthor } from "../api/commentService";

const useUserAvatar = (username) => {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const user = await fetchCommentAuthor(username);
        setAvatar(user.avatar_url);
      } catch (error) {
        console.error("Failed to fetch user avatar:", error);
      }
    };

    fetchAvatar();
  }, [username]);

  return avatar;
};

export default useUserAvatar;
