import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
      min-height: 100%;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      background-color: #000000;
      color: #333333;
      min-height: 100%;
      padding-bottom: 5rem;
    }
    h1, h2  {
      color: white;
      padding: 3rem 0;
      text-align: center;
      text-transform: uppercase;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      letter-spacing: 0.5px;
  }
`;