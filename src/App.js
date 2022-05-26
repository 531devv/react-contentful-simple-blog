import React from "react";
import styled from "styled-components";
import Posts from "./components/Posts";

function App() {
  return (
    <Container>
      <Posts />
    </Container>
  );
}

const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  margin: auto;
`;

export default App;
