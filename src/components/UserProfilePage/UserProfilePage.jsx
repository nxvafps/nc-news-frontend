import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchUserByUsername, fetchUserArticles } from "../../api/usersService";
import { ArticleItem } from "../";
import {
  ProfileContainer,
  UserHeader,
  Avatar,
  UserInfo,
  Username,
  Name,
  ArticlesSection,
  ArticlesTitle,
  LoadingText,
  ErrorText,
  BackButton,
} from "./styles";

function UserProfilePage() {
  const { username } = useParams();
  const navigate = useNavigate();
  const { user: currentUser } = useSelector((state) => state.auth);
  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentUser?.user.username === username) {
      navigate("/profile");
      return;
    }

    const loadUserData = async () => {
      try {
        setIsLoading(true);
        const [userData, userArticles] = await Promise.all([
          fetchUserByUsername(username),
          fetchUserArticles(username),
        ]);
        setUser(userData);
        setArticles(userArticles);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, [username, currentUser, navigate]);

  if (isLoading) return <LoadingText>Loading profile...</LoadingText>;
  if (error) return <ErrorText>Error: {error}</ErrorText>;
  if (!user) return <ErrorText>User not found</ErrorText>;

  return (
    <ProfileContainer>
      <BackButton to="/users">Back to Users</BackButton>
      <UserHeader>
        <Avatar src={user.avatar_url} alt={`${user.username}'s avatar`} />
        <UserInfo>
          <Username>{user.username}</Username>
          <Name>{user.name}</Name>
        </UserInfo>
      </UserHeader>

      <ArticlesSection>
        <ArticlesTitle>Articles by {user.username}</ArticlesTitle>
        {articles.length === 0 ? (
          <ErrorText
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              padding: "3rem 0",
            }}
          >
            {user.username} hasn't written any articles yet.
            <br />
            <span style={{ fontSize: "0.9em", opacity: 0.7 }}>
              Check back later!
            </span>
          </ErrorText>
        ) : (
          articles.map((article, index) => (
            <div
              key={article.article_id}
              style={{
                animation: `fadeInUp 0.5s ease forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <ArticleItem article={article} />
            </div>
          ))
        )}
      </ArticlesSection>
    </ProfileContainer>
  );
}

export default UserProfilePage;
