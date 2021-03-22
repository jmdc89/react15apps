import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
      min-height: 100%;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Staatliches', cursive;
      background-color: gray;
      color: #333333;
      min-height: 100%;
      padding-bottom: 5rem;
      text-transform: uppercase;
    }
    h1, h2  {
      color: white;
      padding: 3rem 0;
      text-align: center;
      text-transform: uppercase;
      font-family: 'Staatliches', cursive;
      letter-spacing: 2px;
  }
`;