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

export const AvatarContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover .edit-overlay {
    opacity: 1;
  }
`;

export const EditOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s ease;
  border-radius: 50%;

  svg {
    width: 24px;
    height: 24px;
    color: white;
  }
`;

export const ProfileAvatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.accent.primary};
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow.primary};
  transition: opacity 0.3s ease, transform 0.3s ease;
  background: ${({ theme }) => theme.colors.background.secondary};

  &:hover {
    transform: scale(1.05);
    border-color: ${({ theme }) => theme.colors.accent.hover};
    box-shadow: 0 8px 24px ${({ theme }) => theme.colors.shadow.primary};
  }
`;

export const DefaultAvatar = styled(FaUserCircle)`
  width: 150px;
  height: 150px;
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

export const AvatarForm = styled.form`
  margin-top: 1rem;
  width: 100%;
  max-width: 300px;
`;

export const AvatarInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.text.primary};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent.primary};
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Button = styled.button`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  ${({ variant, theme }) =>
    variant === "primary"
      ? `
        background: ${theme.colors.accent.primary};
        color: white;
      `
      : `
        background: ${theme.colors.background.secondary};
        color: ${theme.colors.text.primary};
      `}
`;
