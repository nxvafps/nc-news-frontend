import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCurrentUser, logout } from "../store/features/authSlice";
import { fetchUserAvatar } from "../api/usersService";

export const useProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, error, isAuth } = useSelector((state) => state.auth);
  const [avatarUrl, setAvatarUrl] = useState("");
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, isAuth]);

  useEffect(() => {
    if (user?.user?.username) {
      const loadAvatar = async () => {
        try {
          const url = await fetchUserAvatar(user.user.username);
          setAvatarUrl(url);
        } catch (err) {
          console.error("Failed to load avatar:", err);
          setAvatarUrl("");
        }
      };

      loadAvatar();
    }
  }, [user]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };

  return {
    user,
    isLoading,
    error,
    avatarUrl,
    setAvatarUrl,
    handleLogout,
    auth,
  };
};
