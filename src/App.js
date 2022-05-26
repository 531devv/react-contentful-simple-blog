import React from "react";
import styled from "styled-components";
import Pages from "./pages/Pages";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Nav />
        <Pages />
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  width: 1000px;
  max-width: 90%;
  margin: auto;
`;

export default App;
