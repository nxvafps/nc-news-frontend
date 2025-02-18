import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.textPrimary};
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

export const UsersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const UserAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const UserInfo = styled.div`
  text-align: center;
`;

export const Username = styled.h3`
  margin: 0 0 0.5rem;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1.2rem;
`;

export const Name = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1rem;
`;

export const LoadingText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.textSecondary};
  padding: 2rem;
`;

export const ErrorText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.error};
  padding: 2rem;
`;
