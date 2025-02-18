import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.background.secondary},
    rgba(255, 255, 255, 0.05)
  );
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px ${({ theme }) => theme.colors.shadow.primary};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin: 1.5rem 0;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.75rem;
    padding: 1rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const PageNumbersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 1rem;

  @media (max-width: 768px) {
    order: -1;
    width: 100%;
    justify-content: center;
    margin: 0.5rem 0;
    gap: 0.375rem;
  }
`;

export const ButtonBase = styled.button`
  background: ${({ theme }) => theme.colors.background.tertiary};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.accent.primary};
    border-color: transparent;
    transform: translateY(-2px);

    &::before {
      transform: translateX(100%);
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px var(--accent-muted);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &::before {
      display: none;
    }
    &:hover:not(:disabled) {
      transform: none;
    }
  }
`;

export const PageButton = styled(ButtonBase)`
  padding: 1rem 1.25rem;
  min-width: 44px;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0.875rem 1rem;
  }
`;

export const ButtonText = styled.span`
  position: relative;
  z-index: 1;
  font-weight: 500;
`;

export const PageNumber = styled(ButtonBase)`
  min-width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9375rem;
  font-weight: 500;
  background: ${(props) =>
    props.$active
      ? props.theme.colors.accent.primary
      : props.theme.colors.background.tertiary};
  border-color: ${(props) =>
    props.$active ? "transparent" : props.theme.colors.border};

  @media (max-width: 768px) {
    min-width: 36px;
    height: 36px;
    font-size: 0.875rem;
  }
`;

export const PageInfo = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem;
  letter-spacing: 0.1em;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.375rem;
  }
`;
