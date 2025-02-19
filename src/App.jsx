import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "./store/features/authSlice";
import {
  ArticlePage,
  ArticlesPage,
  HomePage,
  Navbar,
  ProfilePage,
  SigninPage,
  SignupPage,
  TopicsPage,
  UserProfilePage,
  UsersPage,
  ArticleForm,
} from "./components";
import { AppContainer, MainContent, MainContentWrapper } from "./styles/styles";
import theme from "./styles/theme";
import "./App.css";

function App() {
  const [showTopBar, setShowTopBar] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

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
        <Router>
          <Navbar />
          <MainContentWrapper $showTopBar={showTopBar}>
            <MainContent>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/articles" element={<ArticlesPage />} />
                <Route path="/articles/new" element={<ArticleForm />} />
                <Route
                  path="/articles/:articleId/edit"
                  element={<ArticleForm />}
                />
                <Route path="/articles/:articleId" element={<ArticlePage />} />
                <Route path="/topics" element={<TopicsPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/users/:username" element={<UserProfilePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/signin" element={<SigninPage />} />
              </Routes>
            </MainContent>
          </MainContentWrapper>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
