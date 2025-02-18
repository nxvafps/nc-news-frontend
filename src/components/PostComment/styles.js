import styled from "styled-components";

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.background.secondary},
    ${({ theme }) => theme.colors.glass.background}
  );
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: 2rem;
`;

export const CommentTextarea = styled.textarea`
  width: 90%;
  margin: 0 auto;
  display: block;
  min-height: 120px;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ theme }) => theme.colors.glass.background};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1rem;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.shadow.accent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.accent.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  align-self: flex-end;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.accent.primary};
    box-shadow: 0 0 12px ${({ theme }) => theme.colors.shadow.accentHover};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  background: ${({ theme }) =>
    `${theme.colors.error}1a`}; // 1a = 10% opacity in hex
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
`;
