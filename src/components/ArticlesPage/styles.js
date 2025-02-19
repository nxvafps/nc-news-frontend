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
  position: relative;
  margin-top: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    margin-top: 0;
  }
`;

export const MobileFilterControls = styled.div`
  display: none;

  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem; // Consistent gap between buttons
    margin-bottom: 2rem;
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
    display: ${({ $show }) => ($show ? "block" : "none")};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 400px;
    max-height: 90vh;
    overflow-y: auto;
    z-index: 1000;
    margin: 0;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
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
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow.accent};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px ${({ theme }) => theme.colors.shadow.accentHover};
  }

  /* Filter toggle button (mobile only) */
  &:not([as]) {
    width: 100%;
    @media (min-width: calc(${({ theme }) => theme.breakpoints.tablet} + 1px)) {
      display: none;
    }
  }

  /* Create article button (visible on all screens) */
  &[as="button"] {
    display: block;
    width: 100%;
    margin-bottom: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 1rem;
    }
  }
`;

export const NewArticleButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: none;
  background: ${({ theme }) => theme.colors.accent.primary};
  color: white;
  font-weight: 600;
  font-size: 0.9375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow.accent};
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px ${({ theme }) => theme.colors.shadow.accentHover};
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

export const FilterOverlay = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ $show }) => ($show ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    z-index: 999;
    overscroll-behavior: contain;
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

export const ButtonContainer = styled.div``;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  @media (max-width: 968px) {
    display: none; // Hide the desktop layout on mobile
  }
`;
