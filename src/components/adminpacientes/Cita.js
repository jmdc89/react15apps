import React from 'react';

import {Citadiv, ButtonEliminar} from './styles/Admin';

const Cita = ({cita, eliminarCita}) => (
    <Citadiv className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>

        <ButtonEliminar
            className="u-full-width"
            onClick={() => eliminarCita(cita.id) }
        >Eliminar &times;</ButtonEliminar>
    </Citadiv>
);

export default Cita;