import { useProfile } from "../../hooks/useProfile";
import AvatarSection from "./AvatarSection";
import UserArticles from "./UserArticles";
import {
  ProfileContainer,
  ProfileCard,
  ProfileTitle,
  ProfileInfo,
  InfoItem,
  LogoutButton,
} from "./styles";

const ProfilePage = () => {
  const {
    user,
    isLoading,
    error,
    avatarUrl,
    setAvatarUrl,
    handleLogout,
    auth,
  } = useProfile();

  if (isLoading) {
    return <ProfileContainer>Loading...</ProfileContainer>;
  }

  if (error) {
    return <ProfileContainer>Error: {error.message}</ProfileContainer>;
  }

  if (!user || !user.user) {
    return (
      <ProfileContainer>Please sign in to view your profile.</ProfileContainer>
    );
  }

  return (
    <ProfileContainer>
      <ProfileCard>
        <AvatarSection
          user={user}
          avatarUrl={avatarUrl}
          setAvatarUrl={setAvatarUrl}
          auth={auth}
        />
        <ProfileTitle>{user.user.username}</ProfileTitle>
        <ProfileInfo>
          <InfoItem>
            <strong>Name:</strong> {user.user.name}
          </InfoItem>
          <InfoItem>
            <strong>Email:</strong> {user.user.email}
          </InfoItem>
        </ProfileInfo>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </ProfileCard>

      <UserArticles username={user.user.username} />
    </ProfileContainer>
  );
};

export default ProfilePage;
