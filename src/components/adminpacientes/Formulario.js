import React from 'react';
import {Label} from './styles/Admin';

const Formulario = () => {
    return (
        <>
            <h2>Crear cita</h2>

            <form>
                    <Label>Nombre mascota</Label>
                    <input
                        type="text"
                        name="mascota"
                        className="u-full-width"
                        placeholder="Nombre Mascota"
                    />

                    <Label>Nombre dueño</Label>
                    <input
                        type="text"
                        name="propietario"
                        className="u-full-width"
                        placeholder="Nombre Dueño de la mascota"
                    />

                    <Label>Fecha</Label>
                    <input
                        type="date"
                        name="fecha"
                        className="u-full-width"
                    />

                    <Label>Hora</Label>
                    <input
                        type="time"
                        name="hora"
                        className="u-full-width"
                    />

                    <Label>Síntomas</Label>
                    <textarea
                        className="u-full-width"
                        name="sintomas"
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
