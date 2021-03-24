import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyles} from './global-styles';
import Admin from "./components/adminpacientes";
import Budget from "./components/budget";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    {/* <Admin/> */}
    <Budget/>
  </React.StrictMode>,
  document.getElementById('root')
);


