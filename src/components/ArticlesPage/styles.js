import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: ${({ theme }) => theme.colors.background.primary};
`;

export const ContentWrapper = styled.div`
  padding: 2rem;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
`;

export const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const MobileFilterControls = styled.div`
  display: none;
  margin-bottom: 1rem;

  @media (max-width: 968px) {
    display: block;
  }
`;

export const FiltersSection = styled.aside`
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.background.secondary},
    ${({ theme }) => theme.colors.glass.background}
  );
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  backdrop-filter: blur(${({ theme }) => theme.colors.glass.blur});
  box-shadow: 0 8px 32px ${({ theme }) => theme.colors.shadow.primary};
  height: fit-content;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ $isExpanded }) => ($isExpanded ? "block" : "none")};
    margin-bottom: 1rem;
  }

  h2 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.01em;
  }
`;

export const FilterGroup = styled.div`
  margin-bottom: 1.25rem;
  box-sizing: border-box;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 0.9375rem;
    font-weight: 500;
  }

  input,
  select {
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    padding: 0.75rem;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    border: 1px solid ${({ theme }) => theme.colors.glass.border};
    background: ${({ theme }) => theme.colors.glass.background};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 0.9375rem;
    transition: all 0.2s ease;
    backdrop-filter: blur(8px);

    &:hover {
      border-color: rgba(${({ theme }) => theme.colors.accent.primaryRGB}, 0.3);
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.accent.primary};
      box-shadow: 0 0 0 2px
        rgba(${({ theme }) => theme.colors.accent.primaryRGB}, 0.2);
    }
  }

  select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 1rem;
    padding-right: 2.5rem;
  }
`;

export const ApplyFiltersButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: none;
  background: ${({ theme }) => theme.colors.accent.primary};
  color: white;
  font-weight: 600;
  font-size: 0.9375rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent.primaryHover};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const FilterToggleButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: none;
  background: ${({ theme }) => theme.colors.accent.primary};
  color: white;
  font-weight: 600;
  font-size: 0.9375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow.accent};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px ${({ theme }) => theme.colors.shadow.accentHover};
  }

  @media (min-width: calc(${({ theme }) => theme.breakpoints.tablet} + 1px)) {
    display: none;
  }
`;

export const MobileCloseFilters = styled.button`
  display: none;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ArticlesSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  gap: 1rem;
`;

export const PageButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : "transparent"};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.text};
  cursor: pointer;
  border-radius: 4px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const PageInfo = styled.span`
  margin: 0 1rem;
`;
