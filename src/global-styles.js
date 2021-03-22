import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
      min-height: 100%;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);
      color: #333333;
      min-height: 100%;
      padding-bottom: 5rem;
      text-transform: uppercase;
      
    }
    h1, h2  {
      color: white;
      padding: 3rem 0;
      text-align: center;
      letter-spacing: 2px;
  }

    h2 {
      font-size: 3rem;
    }
`;