import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCurrentUser, logout } from "../../store/features/authSlice";
import { useUserAvatar } from "../../hooks";
import {
  ProfileContainer,
  ProfileCard,
  ProfileTitle,
  ProfileInfo,
  InfoItem,
  LogoutButton,
  ProfileAvatar,
  DefaultAvatar,
} from "./styles";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, error, isAuth } = useSelector((state) => state.auth);
  const [avatarLoading, setAvatarLoading] = useState(true);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, isAuth]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };

  if (isLoading) {
    return <ProfileContainer>Loading...</ProfileContainer>;
  }

  if (error) {
    return <ProfileContainer>Error: {error.message}</ProfileContainer>;
  }

  if (!user) {
    return (
      <ProfileContainer>Please sign in to view your profile.</ProfileContainer>
    );
  }

  const userData = user.user || user;
  const avatarUrl = userData.avatar_url;

  return (
    <ProfileContainer>
      <ProfileCard>
        {avatarUrl ? (
          <ProfileAvatar
            src={avatarUrl}
            alt={`${userData.username}'s profile picture`}
            loading="lazy"
            onLoad={() => setAvatarLoading(false)}
            onError={() => setAvatarLoading(false)}
            style={{
              opacity: avatarLoading ? 0.6 : 1,
              transform: avatarLoading ? "scale(0.95)" : "scale(1)",
            }}
          />
        ) : (
          <DefaultAvatar />
        )}
        <ProfileTitle>{userData.username}</ProfileTitle>
        <ProfileInfo>
          <InfoItem>
            <strong>Name:</strong> {userData.name}
          </InfoItem>
          <InfoItem>
            <strong>Email:</strong> {userData.email}
          </InfoItem>
        </ProfileInfo>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default ProfilePage;
