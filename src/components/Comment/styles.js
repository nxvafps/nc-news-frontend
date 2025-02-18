import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

export const CommentContainer = styled.div`
  position: relative;
  display: flex;
  gap: 1.5rem;
  padding: 1.75rem;
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.background.secondary},
    rgba(255, 255, 255, 0.05)
  );
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px ${({ theme }) => theme.colors.shadow.primary};
  margin-bottom: 1.75rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 48px ${({ theme }) => theme.colors.shadow.primary};
    border-color: ${({ theme }) => theme.colors.accent.primary};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.25rem;
    gap: 1rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const AvatarContainer = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 48px;
  height: 48px;

  &::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.accent.primary},
      ${({ theme }) => theme.colors.accent.hover}
    );
    z-index: -1;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.colors.accent.primary};
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow.primary};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ theme }) => theme.colors.background.secondary};

  &:hover {
    transform: scale(1.1) rotate(5deg);
    border-color: ${({ theme }) => theme.colors.accent.hover};
    box-shadow: 0 8px 24px ${({ theme }) => theme.colors.shadow.primary};
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const StyledFaUserCircle = styled(FaUserCircle)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.accent.primary};s
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow.primary};
  transition: all 0.3s ease;
`;

export const CommentContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const CommentAuthor = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: -0.01em;
`;

export const CommentBody = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.7;
  font-size: 1rem;
  margin: 0;
  white-space: pre-line;
`;

export const CommentFooter = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const CommentTime = styled.time`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9rem;
  font-feature-settings: "tnum";
  letter-spacing: 0.02em;
  padding: 0.5rem 0.75rem;
  background: ${({ theme }) => theme.colors.background.tertiary};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.primary};
    transform: translateY(-1px);
  }
`;

export const VoteButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.background.tertiary};
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.primary};
    transform: translateY(-1px);
  }

  span {
    min-width: 4rem;
    text-align: center;
    font-variant-numeric: tabular-nums;
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 500;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    max-width: 240px;
  }
`;

export const VoteButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) =>
    props.$active
      ? props.theme.colors.accent.primary
      : props.theme.colors.text.secondary};
  cursor: pointer;
  padding: 0.75rem;
  font-size: 1.25rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px;

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.accent.primary};
    background: ${({ theme }) => theme.colors.background.secondary};
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent.primary};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover:not(:disabled) {
      transform: none;
    }
  }
`;

export const CommentActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 0.75rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.accent.primary};
  cursor: pointer;
  padding: 0.625rem;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  border-radius: 12px;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.background.tertiary};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: auto;
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const EditTextarea = styled.textarea`
  width: 90%;
  margin: 0 auto;
  min-height: 100px;
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.background.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.9375rem;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent.primary};
    box-shadow: 0 0 0 2px
      ${({ theme }) => `rgba(${theme.colors.accent.primaryRGB}, 0.2)`};
  }
`;

export const EditButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;
