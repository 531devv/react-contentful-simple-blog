import React, { useState } from "react";
import styled from "styled-components";
import Pages from "./pages/Pages";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import ThemeContext from "./context/ThemeContext";
import { theme } from "./style/Theme";
import GlobalStyle from "./style/GlobalStyle";

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

const Container = styled.div`
  margin: auto;
`;

export default App;
