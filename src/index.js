import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyles} from './global-styles';
// import Admin from "./components/adminpacientes";
// import Budget from "./components/budget";
import Insurance from "./components/insurance";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    {/* <Admin/> */}
    {/* <Budget/> */}
    <Insurance/>
  </React.StrictMode>,
  document.getElementById('root')
);


