import styled from "styled-components";

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
  flex: 1;
`;

export const MainContentWrapper = styled.div`
  margin-top: ${({ $showTopBar }) => ($showTopBar ? "40px" : "64px")};

  @media (min-width: 768px) {
    margin-top: ${({ $showTopBar }) => ($showTopBar ? "90px" : "64px")};
  }
  transition: margin-top 0.3s ease-in-out;
`;
