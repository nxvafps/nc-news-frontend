import styled from "styled-components";

export const CommentsSection = styled.section`
  max-width: 800px;
  margin: 2.5rem auto;
  padding: 2rem;
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.background.secondary},
    rgba(255, 255, 255, 0.05)
  );
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px ${({ theme }) => theme.colors.shadow.primary};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    margin: 1.5rem auto;
    padding: 1.5rem;
    width: 100%;
    box-sizing: border-box;
    border-radius: 20px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const CommentsTitle = styled.h2`
  margin-bottom: 2rem;
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 600;
  letter-spacing: -0.02em;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.background.tertiary},
    rgba(255, 255, 255, 0.02)
  );
  box-shadow: 0 4px 16px ${({ theme }) => theme.colors.shadow.primary};
  margin-bottom: 2rem;
  backdrop-filter: blur(8px);

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`;
