import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  ArticlePage,
  ArticlesPage,
  HomePage,
  Navbar,
  SigninPage,
  TopicsPage,
  UsersPage,
} from "./components";
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
        <Router>
          <Navbar />
          <MainContentWrapper $showTopBar={showTopBar}>
            <MainContent>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/articles" element={<ArticlesPage />} />
                <Route path="/articles/:articleId" element={<ArticlePage />} />
                <Route path="/topics" element={<TopicsPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/profile" element={<h1>Profile</h1>} />
                <Route path="/signup" element={<h1>sign up</h1>} />
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
