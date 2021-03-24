import React, {useState} from 'react';
import Question from './Question';
import {Contenido} from './styles/Budget.js';

function Budget() {

    //definir el state
    const [presupuesto, guardarPresupuesto] = useState(0);
    const [ restante, guardarRestante] = useState(0);

    return (
        <div className="container">
            <header>
                <h1>Gasto Semanal</h1>
                
                <Contenido>
                   <Question
                    guardarPresupuesto={guardarPresupuesto}
                    guardarRestante={guardarRestante}
                   /> 
                </Contenido>
                

            </header>
        </div>
    );
}

export default Budget;