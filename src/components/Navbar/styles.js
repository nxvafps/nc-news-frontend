import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaBars, FaUser, FaTimes } from "react-icons/fa";

export const NavContainer = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  box-shadow: 0 2px 4px ${({ theme }) => theme.colors.shadow};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  margin: 0;
  padding: 0;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  height: 60px; // Fixed height for consistency

  @media (min-width: 769px) {
    gap: 3rem;
    & > *:first-child {
      display: none;
    }
  }
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Divider = styled.div`
  height: 24px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.accent.muted};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.accent.muted};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 20px;
  padding: 0.5rem 1rem;
  margin: 0 1rem;
  flex: 0 1 300px;
  height: 40px; // Fixed height for consistency

  ${(props) =>
    props.$isMobile &&
    css`
      flex: 1;
      margin: 0;
      border-radius: 0;
      padding: 0 0.5rem;
      height: 100%;
    `}

  @media (max-width: 768px) {
    display: ${(props) => (props.$isMobile ? "flex" : "none")};
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export const SearchIcon = styled(FaSearch)`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-right: 0.5rem;
`;

export const SearchInput = styled.input`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-left: 0.5rem;
  width: 100%;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.$isMobile &&
    css`
      font-size: 16px;
      height: 40px;
    `}
`;

export const CloseSearchButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 0 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  svg {
    font-size: 1.2rem;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileIcons = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-left: auto;
  }
`;

export const HamburgerIcon = styled(FaBars)`
  display: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuToggle = styled.button`
  display: none;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.2rem;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0 0.5rem;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ProfileIcon = styled(FaUser)`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.2rem;
  cursor: pointer;
`;

export const DesktopOnly = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileSearchIcon = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 60px; /* Height of navbar */
  left: 0;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: ${({ theme }) => theme.colors.background.secondary};
  z-index: 1500;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
  }
`;

export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem 0;
`;

export const MobileStyledNavLink = styled(StyledNavLink)`
  font-size: 1.5rem;
  padding: 1rem 0;
  width: 100%;
  text-align: center;
`;

export const TopBar = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background.secondary};
    height: ${({ $show }) => ($show ? "40px" : "0")};
    padding: ${({ $show }) => ($show ? "0 2rem" : "0")};
    opacity: ${({ $show }) => ($show ? "1" : "0")};
    transition: all 0.3s ease-in-out;
    overflow: hidden;
  }
`;

export const TopBarButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TopBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TopBarSection = styled.div`
  display: flex;
  gap: 10px;
`;

export const TopBarLink = styled(TopBarButton)`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;
