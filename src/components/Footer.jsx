import styled from "styled-components";
import { RiHeartFill } from "react-icons/ri";
import ThemeContext from "../Context/ThemeContext";
import { useContext } from "react";

function Footer() {
  const { theme, isDarkMode } = useContext(ThemeContext);
  return (
    <PageFooter theme={isDarkMode ? theme.darkMode : theme.lightMode}>
      <p>
        Made with <RiHeartFill /> by
        <a href="https://github.com/531devv"> Marek Klatt</a>
      </p>
    </PageFooter>
  );
}

const PageFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.footerFontColor};
  border-top: 1px solid;
  border-color: ${({ theme }) => theme.footerHrColor};

  a {
    color: ${({ theme }) => theme.footerLinkColor};
  }

  svg {
    color: ${({ theme }) => theme.footerLinkColor};
    position: relative;
    bottom: -1.5px;
  }
`;

export default Footer;
