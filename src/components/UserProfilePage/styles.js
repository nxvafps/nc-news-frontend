import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfileContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const UserHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  flex: 1;
`;

export const Username = styled.h2`
  margin: 0 0 0.5rem 0;
  color: ${({ theme }) => theme.textPrimary};
`;

export const Name = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.1rem;
`;

export const ArticlesSection = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

export const ArticlesTitle = styled.h3`
  margin-bottom: 2rem;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.textPrimary};
  grid-column: 1 / -1;
  text-align: center;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background: ${({ theme }) => theme.colors?.accent?.primary || "#007bff"};
    margin: 0.5rem auto 0;
    border-radius: 2px;
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.textSecondary};
`;

export const ErrorText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.error};
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.25rem;
  background: ${({ theme }) => theme.colors.background.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  margin-bottom: 2rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.accent.primary};
    border-color: transparent;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px
      rgba(${({ theme }) => theme.colors.accent.primaryRGB}, 0.2);
    color: white;
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accent.muted};
  }

  &:before {
    content: "←";
    font-size: 1.2rem;
  }
`;
