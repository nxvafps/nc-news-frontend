import { useState } from "react";
import {
  NavContainer,
  NavContent,
  Logo,
  NavLinks,
  StyledNavLink,
  MobileIcons,
  MenuToggle,
  ProfileIcon,
  MobileSearchIcon,
  MobileMenu,
  MobileNavLinks,
  MobileStyledNavLink,
} from "./styles";
import { FaBars, FaTimes } from "react-icons/fa";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavContainer>
      <NavContent>
        <MenuToggle onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuToggle>
        <Logo>NC News</Logo>
        <NavLinks>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/articles">Articles</StyledNavLink>
          <StyledNavLink to="/topics">Topics</StyledNavLink>
          <StyledNavLink to="/users">Users</StyledNavLink>
        </NavLinks>
        <SearchBar />
        <MobileIcons>
          <MobileSearchIcon />
          <ProfileIcon />
        </MobileIcons>
      </NavContent>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileNavLinks>
          <MobileStyledNavLink to="/" onClick={toggleMobileMenu}>
            Home
          </MobileStyledNavLink>
          <MobileStyledNavLink to="/articles" onClick={toggleMobileMenu}>
            Articles
          </MobileStyledNavLink>
          <MobileStyledNavLink to="/topics" onClick={toggleMobileMenu}>
            Topics
          </MobileStyledNavLink>
          <MobileStyledNavLink to="/users" onClick={toggleMobileMenu}>
            Users
          </MobileStyledNavLink>
        </MobileNavLinks>
      </MobileMenu>
    </NavContainer>
  );
};

export default Navbar;
