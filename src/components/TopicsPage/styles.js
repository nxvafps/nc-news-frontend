import styled from "styled-components";

export const TopicsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const TopicsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const TopicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const TopicCard = styled.div`
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.background.secondary},
    ${({ theme }) => theme.colors.glass.background}
  );
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 1.5rem;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px ${({ theme }) => theme.colors.shadow.primary};

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.accent.primary};
    box-shadow: 0 12px 48px ${({ theme }) => theme.colors.shadow.primary};
  }
`;

export const TopicTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 0.5rem;
`;

export const TopicDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9rem;
`;

export const AddTopicButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.accent.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 600;
  font-size: 0.9375rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow.accent};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px ${({ theme }) => theme.colors.shadow.accentHover};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;
