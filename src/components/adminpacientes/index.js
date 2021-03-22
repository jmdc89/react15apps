import React from 'react';
import Formulario from "./Formulario";

function Admin() {
  return (
    <>
    <h1>Administrador de Pacientes</h1>

    <div className="container">
        <div className="row">
            <div className="one-half column">
               <Formulario />
            </div>
            <div className="one-half column">
            <h1>2</h1>
            </div>
        </div>
    </div>
    </>
  );
}

export default Admin;
