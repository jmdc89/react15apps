import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyles} from './global-styles';
import Admin from "./components/adminpacientes";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Admin/>
  </React.StrictMode>,
  document.getElementById('root')
);


