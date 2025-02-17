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
  margin-top: 60px;
  flex: 1;
`;
