import styled from "styled-components";

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const MainContent = styled.main`
  margin-top: 60px;
`;
