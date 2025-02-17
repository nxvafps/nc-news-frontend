import styled from "styled-components";
import { NavLink } from "react-router-dom";
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
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchIcon = styled(FaSearch)`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-right: 0.5rem;
`;

export const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  padding: 0;
  font-size: 0.9rem;
  width: 200px;
  color: ${({ theme }) => theme.colors.text.primary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
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

export const MenuToggle = styled.div`
  display: none;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const ProfileIcon = styled(FaUser)`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.2rem;
  cursor: pointer;
`;

export const MobileSearchIcon = styled(SearchIcon)`
  margin: 0;
  font-size: 1.2rem;
  cursor: pointer;
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
