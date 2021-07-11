import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
    border: none;
  }
  html, body {
    box-sizing: border-box;
    font-family: 'Rajdhani', sans-serif;
    font-size: 1rem;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;

  }
  html {
    min-height: 100%;
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    overflow: scroll;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";

  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  h1 {
    font-size: 4rem;
    font-weight: bold;
    line-height: 6rem;
  }
  a {
  text-decoration: none;
  color: inherit;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;
