import React, {useState} from 'react';
import {Label} from './styles/Admin';

const Formulario = () => {


    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    //Funcion que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    // Cuando el usuario presiona agregar cita
    const SubmitCita = e => {
        e.preventDefault();
        
        //Validar

        //Asignar un ID

        //Crear la cita

        //Reiniciar el form

    }

    return (
        <>
            <h2>Crear cita</h2>

            <form
                onSubmit={submitCita}
            >
                    <Label>Nombre mascota</Label>
                    <input
                        type="text"
                        name="mascota"
                        className="u-full-width"
                        placeholder="Nombre Mascota"
                        onChange={actualizarState}
                        value={mascota}
                    />

                    <Label>Nombre dueño</Label>
                    <input
                        type="text"
                        name="propietario"
                        className="u-full-width"
                        placeholder="Nombre Dueño de la mascota"
                        onChange={actualizarState}
                        value={propietario}
                    />

                    <Label>Fecha</Label>
                    <input
                        type="date"
                        name="fecha"
                        className="u-full-width"
                        onChange={actualizarState}
                        value={fecha}
                    />

                    <Label>Hora</Label>
                    <input
                        type="time"
                        name="hora"
                        className="u-full-width"
                        onChange={actualizarState}
                        value={hora}
                    />

                    <Label>Síntomas</Label>
                    <textarea
                        className="u-full-width"
                        name="sintomas"
                        onChange={actualizarState}
                        value={sintomas}
                    >
                    </textarea>

                    <button
                        type="submit"
                        className="u-full-width button-primary"
                    >
                        Agregar Cita
                    </button>
            </form>

        </>
    );
}

export default Formulario;
