import { createGlobalStyle } from "styled-components";

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

export default GlobalStyle;
