import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  NavContainer,
  NavContent,
  Logo,
  NavLinks,
  StyledNavLink,
  MobileIcons,
  MenuToggle,
  ProfileIcon,
  DesktopOnly,
  MobileSearchIcon,
  MobileMenu,
  MobileNavLinks,
  MobileStyledNavLink,
  TopBar,
  TopBarButton,
  TopBarContent,
  TopBarSection,
  TopBarLink,
  CloseSearchButton,
} from "./styles";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowTopBar(currentScrollPos === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  const handleMobileSearchClick = () => {
    setIsMobileSearchActive(true);
    navigate("/articles");
  };

  const handleCloseSearch = () => {
    setIsMobileSearchActive(false);
  };

  const token = localStorage.getItem("token");
  const showProfileElements = isAuth && token;

  return (
    <NavContainer>
      <TopBar $show={showTopBar}>
        <TopBarContent>
          <TopBarSection>
            <TopBarLink
              as="a"
              href="https://github.com/nxvafps/nc-news-frontend"
              target="_blank"
            >
              View on GitHub
            </TopBarLink>
            <TopBarLink as="a" href="https://novafps.com" target="_blank">
              View Portfolio
            </TopBarLink>
          </TopBarSection>
          <TopBarSection>
            {showProfileElements ? (
              <TopBarButton onClick={() => navigate("/profile")}>
                Profile
              </TopBarButton>
            ) : (
              <>
                <TopBarButton onClick={() => navigate("/signin")}>
                  Sign In
                </TopBarButton>
                <TopBarButton onClick={() => navigate("/signup")}>
                  Create Account
                </TopBarButton>
              </>
            )}
          </TopBarSection>
        </TopBarContent>
      </TopBar>
      <NavContent>
        {isMobileSearchActive ? (
          <>
            <MenuToggle onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </MenuToggle>
            <SearchBar isMobile={true} />
            <CloseSearchButton onClick={handleCloseSearch}>
              <FaTimes />
            </CloseSearchButton>
          </>
        ) : (
          <>
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
            {!showTopBar && (
              <DesktopOnly>
                <ProfileIcon
                  onClick={() =>
                    navigate(showProfileElements ? "/profile" : "/signin")
                  }
                />
              </DesktopOnly>
            )}
            <MobileIcons>
              <MobileSearchIcon onClick={handleMobileSearchClick}>
                <FaSearch />
              </MobileSearchIcon>
              <ProfileIcon
                onClick={() =>
                  navigate(showProfileElements ? "/profile" : "/signin")
                }
              />
            </MobileIcons>
          </>
        )}
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
