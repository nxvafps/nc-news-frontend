import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  ArticlePage,
  ArticlesPage,
  HomePage,
  Navbar,
  ProfilePage,
  SigninPage,
  SignupPage,
  TopicsPage,
  UsersPage,
  UserProfilePage
} from "./";
import { AppContainer, MainContent, MainContentWrapper } from "./styles/styles";
import theme from "./styles/theme";
import "./App.css";

function App() {
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowTopBar(currentScrollPos === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Navbar />
        <MainContentWrapper $showTopBar={showTopBar}>
          <MainContent>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users/:username" element={<UserProfilePage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/articles/:articleId" element={<ArticlePage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/topics" element={<TopicsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/signin" element={<SigninPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </MainContent>
        </MainContentWrapper>
      </AppContainer>
    </ThemeProvider>
  );
}
