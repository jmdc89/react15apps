import React, {useState} from 'react';
import Formulario from "./Formulario";

function Admin() {

  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  // Funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  return (
    <>
    <h1>Administrador de Pacientes</h1>

    <div className="container">
        <div className="row">
            <div className="one-half column">
               <Formulario 
                crearCita={crearCita}
               />
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
