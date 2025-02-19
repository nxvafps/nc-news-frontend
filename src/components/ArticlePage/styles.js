import styled from "styled-components";

export const ArticlePageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  box-sizing: border-box;
  overflow-x: hidden;
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.background.secondary},
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  box-shadow: 0 8px 32px ${({ theme }) => theme.colors.shadow};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: clamp(1rem, 3vw, 1.5rem);
    border-radius: 20px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin: 2rem auto;
  max-width: 400px;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    font-size: 0.9rem;
    margin: 1rem auto;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error.main};
  background: ${({ theme }) => theme.colors.error.background};
  padding: 1.25rem;
  border-radius: 16px;
  text-align: center;
  margin: 2rem auto;
  max-width: 600px;
  border: 1px solid ${({ theme }) => theme.colors.error.border};
  backdrop-filter: blur(8px);

  @media (max-width: 768px) {
    margin: 1rem auto;
    padding: 1rem;
    font-size: 0.9rem;
    max-width: 90%;
  }
`;

export const NavigationContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.colors.background.secondary};
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin: -1.5rem -1.5rem 1.5rem;

  @media (max-width: 768px) {
    margin: -1rem -1rem 1rem;
    padding: 0.75rem;
  }
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.25rem;
  background: ${({ theme }) => theme.colors.background.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow};

  &:hover {
    background: ${({ theme }) => theme.colors.accent.primary};
    border-color: transparent;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px
      rgba(${({ theme }) => theme.colors.accent.primaryRGB}, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accent.muted};
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    width: auto;
    justify-content: center;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const ArticleCommentsSection = styled.section`
  margin-top: 2rem;
`;
