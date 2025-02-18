import { Link } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import {
  UsersGrid,
  UserCard,
  UserAvatar,
  UserInfo,
  Username,
  Name,
  PageContainer,
  PageTitle,
  LoadingText,
  ErrorText,
} from "./styles";

function UsersPage() {
  const { users, isLoading, error } = useUsers();

  if (isLoading) return <LoadingText>Loading users...</LoadingText>;
  if (error) return <ErrorText>Error: {error}</ErrorText>;

  return (
    <PageContainer>
      <PageTitle>Community Members</PageTitle>
      <UsersGrid>
        {users.map((user, index) => (
          <UserCard
            key={user.username}
            as={Link}
            to={`/users/${user.username}`}
            style={{
              animation: `fadeInUp 0.5s ease forwards`,
              animationDelay: `${index * 0.1}s`,
              opacity: 0,
            }}
          >
            <UserAvatar
              src={user.avatar_url}
              alt={`${user.username}'s avatar`}
            />
            <UserInfo>
              <Username>{user.username}</Username>
              <Name>{user.name}</Name>
            </UserInfo>
          </UserCard>
        ))}
      </UsersGrid>
    </PageContainer>
  );
}

export default UsersPage;
