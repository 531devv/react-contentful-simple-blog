import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { GiPencilRuler } from "react-icons/gi";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
function Nav(props) {
  const { theme, isDarkMode } = useContext(ThemeContext);
  const handleClick = () => {
    props.setIsDarkMode(!isDarkMode);
  };

  return (
    <Navigation theme={isDarkMode ? theme.darkMode : theme.lightMode}>
      <ToggleTheme
        onClick={handleClick}
        theme={isDarkMode ? theme.darkMode : theme.lightMode}
      >
        {isDarkMode ? "Enable Light Mode" : "Enable Dark Mode"}
      </ToggleTheme>
      <Link to={"/"}>
        <Logo theme={isDarkMode ? theme.darkMode : theme.lightMode}>
          <GiPencilRuler /> <p>DevBlog</p>
        </Logo>
      </Link>
      <Wrapper theme={isDarkMode ? theme.darkMode : theme.lightMode}>
        <Category to="/category/news">Aktualności</Category>
        <Category to="/category/fun">Rozrywka</Category>
        <Category to="/category/curiosities">Ciekawostki</Category>
        <Category to="/category/tech">Technologie</Category>
      </Wrapper>
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 1rem 0;
  z-index: 1090;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.logoColor};

  &:hover {
    transform: translateY(-2px);
    transition: ease-in-out 0.1s;
  }

  p {
    padding-left: 0.2rem;
    font-weight: 700;
    font-size: 1.5rem;
    font-family: "Bebas neue", sans-serif;
    letter-spacing: 0.2rem;
  }

  svg {
    color: ${({ theme }) => theme.logoIconColor};
    height: 25px;
    width: 25px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 1rem;

  a {
    background-color: ${({ theme }) => theme.buttonColor};
    color: ${({ theme }) => theme.buttonFontColor};

    &:hover {
      background-color: ${({ theme }) => theme.buttonHoverColor};
      color: ${({ theme }) => theme.buttonHoverFontColor};
    }

    &.active {
      background-color: ${({ theme }) => theme.buttonHoverColor};
      color: ${({ theme }) => theme.buttonHoverFontColor};
    }
  }
`;

const Category = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 2rem;
  border-radius: 1rem;
  font-size: 0.9rem;
  margin-right: 0.2rem;
  transform: scale(0.8);
`;

const ToggleTheme = styled.button`
  position: absolute;
  right: 0;
  top: 0.4rem;
  background-color: transparent;
  color: ${({ theme }) => theme.footerLinkColor};
  border: none;
  border-radius: 1rem;
  padding: 0.4rem 1rem;
  cursor: pointer;
`;

export default Nav;
