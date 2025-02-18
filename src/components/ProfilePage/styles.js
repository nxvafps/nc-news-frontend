import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 80px);
  padding: 2rem;
  gap: 2rem;
`;

export const ProfileCard = styled.div`
  background: ${({ theme }) => theme.colors.background.primary};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 2rem;
`;

export const ProfileInfo = styled.div`
  margin-bottom: 2rem;
`;

export const InfoItem = styled.div`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};

  strong {
    margin-right: 0.5rem;
  }
`;

export const LogoutButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.error};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
`;

export const ProfileAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.accent.primary};
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow.primary};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ theme }) => theme.colors.background.secondary};
  margin-bottom: 1.5rem;

  &:hover {
    transform: scale(1.05);
    border-color: ${({ theme }) => theme.colors.accent.hover};
    box-shadow: 0 8px 24px ${({ theme }) => theme.colors.shadow.primary};
  }
`;

export const DefaultAvatar = styled(FaUserCircle)`
  width: 120px;
  height: 120px;
  color: #666;
  margin-bottom: 1.5rem;
`;

export const ArticlesSection = styled.section`
  width: 100%;
  max-width: 800px;
  margin-top: 1rem;
`;

export const ArticlesTitle = styled.h3`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`;

export const ArticlesContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  width: 100%;
`;
