import React from 'react';

import {Citadiv} from './styles/Admin';

const Cita = ({cita}) => (
    <Citadiv className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>
    </Citadiv>
);

export default Cita;