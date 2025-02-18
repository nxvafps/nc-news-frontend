import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCurrentUser, logout } from "../../store/features/authSlice";
import { fetchUserArticles } from "../../api/usersService";
import { useUserAvatar } from "../../hooks";
import { ArticleItem } from "../";
import {
  ProfileContainer,
  ProfileCard,
  ProfileTitle,
  ProfileInfo,
  InfoItem,
  LogoutButton,
  ProfileAvatar,
  DefaultAvatar,
  ArticlesSection,
  ArticlesTitle,
  ArticlesContainer,
} from "./styles";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, error, isAuth } = useSelector((state) => state.auth);
  const [avatarLoading, setAvatarLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, isAuth]);

  useEffect(() => {
    if (user?.user?.username) {
      const loadArticles = async () => {
        try {
          setArticlesLoading(true);
          const userArticles = await fetchUserArticles(user.user.username);
          setArticles(userArticles);
        } catch (err) {
          console.error("Failed to load articles:", err);
        } finally {
          setArticlesLoading(false);
        }
      };
      loadArticles();
    }
  }, [user]);

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

      <ArticlesSection>
        <ArticlesTitle>Your Articles</ArticlesTitle>
        <ArticlesContainer>
          {articlesLoading ? (
            <InfoItem>Loading articles...</InfoItem>
          ) : articles.length === 0 ? (
            <InfoItem style={{ textAlign: "center" }}>
              You haven't written any articles yet.
              <br />
              <span style={{ fontSize: "0.9em", opacity: 0.7 }}>
                Time to start writing!
              </span>
            </InfoItem>
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
        </ArticlesContainer>
      </ArticlesSection>
    </ProfileContainer>
  );
};

export default ProfilePage;
