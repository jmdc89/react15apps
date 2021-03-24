import React, {useState} from 'react';
import Question from './Question';
import Form from './Form';
import {Contenido} from './styles/Budget.js';

function Budget() {

    //definir el state
    const [presupuesto, guardarPresupuesto] = useState(0);
    const [ restante, guardarRestante] = useState(0);
    const [mostrarpregunta, actualizarPregunta] = useState(true);

    return (
        <div className="container">
            <header>
                <h1>Gasto Semanal</h1>
                
                <Contenido>

                    {mostrarpregunta ?
                    (
                        <Question
                        guardarPresupuesto={guardarPresupuesto}
                        guardarRestante={guardarRestante}
                        actualizarPregunta={actualizarPregunta}
                       /> 
                    ) :
                    (
                        <div className="row">
                            <div className="one-half column">
                                <Form/>
                            </div>

                            <div className="one-half column">
                                2
                            </div>
                        </div>
                    )
                    }
                </Contenido>
                

            </header>
        </div>
    );
}

export default Budget;