import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import {Label, Error, Input} from './styles/Admin';

const Formulario = () => {


    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false)


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
    const submitCita = e => {
        e.preventDefault();

        //Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ){
            actualizarError(true);
            return;
        }

        //Eliminar el mensaje previo
        actualizarError(false);

        //Asignar un ID
        cita.id = uuid();

        //Crear la cita

        //Reiniciar el form

    }

    return (
        <>
            <h2>Crear cita</h2>

            { error ? <Error>Todos los campos son obligatorios</Error> : null}

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
                    <Input
                        type="date"
                        name="fecha"
                        className="u-full-width"
                        onChange={actualizarState}
                        value={fecha}
                    />

                    <Label>Hora</Label>
                    <Input
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
