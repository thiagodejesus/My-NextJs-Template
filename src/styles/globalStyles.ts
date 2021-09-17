import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 10px */
    color: ${(props) => props.theme.colors.primary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
