import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: inherit;
  }

  *:focus {
    outline: 0;
  }

  html {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-size: 16px;
    font-family: Helvetica, Arial, sans-serif;
    line-height: 1.4;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style:none;
  }

`;
