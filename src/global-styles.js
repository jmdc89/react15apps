import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
      min-height: 100%;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Raleway', Helvetica, Arial, sans-serif;
      background: #000428;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #004e92, #000428);  
      background: linear-gradient(to right, #004e92, #000428); 
      color: #333333;
      min-height: 100%;
      padding-bottom: 5rem;
      text-transform: capitalize;
      
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

