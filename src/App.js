import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Pages from "./pages/Pages";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import ThemeContext from "./context/ThemeContext";
import { theme } from "./utils/Theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(theme.isDefaultDarkMode);
  return (
    <ThemeContext.Provider value={{ theme, isDarkMode }}>
      <BrowserRouter>
        <GlobalStyle theme={isDarkMode ? theme.darkMode : theme.lightMode} />
        <Container theme={isDarkMode ? theme.darkMode : theme.lightMode}>
          <Nav setIsDarkMode={setIsDarkMode} />
          <Pages />
          <Footer />
        </Container>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
  }

  a {
    color: #a00c85;
    text-decoration: none;
  }

  h2 {
    line-height: 2.5rem;
  }

  p {
    line-height: 1.5rem;
  }
`;

const Container = styled.div`
  width: 1000px;
  max-width: 90%;
  margin: auto;
`;

export default App;
