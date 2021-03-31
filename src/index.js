import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyles} from './global-styles';
// import Admin from "./components/adminpacientes";
// import Budget from "./components/budget";
// import Insurance from "./components/insurance";
// import BreakingBad from "./components/bbquote";
// import Cotizador from "./components/crypto";
import News from "./components/news";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    {/* <Admin/> */}
    {/* <Budget/> */}
    {/* <Insurance/> */}
    {/* <BreakingBad/> */}
    {/* <Cotizador/> */}
    <News/>
  </React.StrictMode>,
  document.getElementById('root')
);


