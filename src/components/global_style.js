import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
  html {
    box-sizing: border-box;
  }
  html,
  body {
    scroll-behavior: smooth;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
