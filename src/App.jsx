import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  Navbar,
  HomePage,
  ArticlesPage,
  TopicsPage,
  UsersPage,
} from "./components";
import { AppContainer, MainContent } from "./styles/styles";
import theme from "./styles/theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Router>
          <Navbar />
          <MainContent>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/topics" element={<TopicsPage />} />
              <Route path="/users" element={<UsersPage />} />
            </Routes>
          </MainContent>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
