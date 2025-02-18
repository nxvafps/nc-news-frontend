import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const SigninContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 2rem;
  background-color: ${theme.colors.background.primary};
`;

export const SigninForm = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(${theme.colors.glass.blur});
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.small};
  box-shadow: 0 8px 32px ${theme.colors.shadow.primary};
`;

export const FormTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${theme.colors.text.primary};
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background-color: ${theme.colors.background.tertiary};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.small};
  font-size: 1rem;
  color: ${theme.colors.text.primary};

  &:focus {
    outline: none;
    border-color: ${theme.colors.accent.primary};
    box-shadow: 0 0 0 2px ${theme.colors.accent.muted};
  }

  &::placeholder {
    color: ${theme.colors.text.secondary};
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${theme.colors.accent.primary};
  color: ${theme.colors.text.primary};
  border: none;
  border-radius: ${theme.borderRadius.small};
  font-size: 1rem;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: 0 4px 12px ${theme.colors.shadow.accentHover};
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: ${theme.colors.background.tertiary};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const SignupButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: transparent;
  color: ${theme.colors.text.primary};
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.small};
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${theme.colors.glass.background};
  }
`;

export const ErrorMessage = styled.div`
  color: ${theme.colors.error};
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;
`;
