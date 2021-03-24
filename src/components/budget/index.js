import React, {useState} from 'react';
import Question from './Question';
import Form from './Form';
import List from './List';
import BudgetControl from './BudgetControl';
import {Contenido} from './styles/Budget.js';

function Budget() {

    //definir el state
    const [presupuesto, guardarPresupuesto] = useState(0);
    const [ restante, guardarRestante] = useState(0);
    const [mostrarpregunta, actualizarPregunta] = useState(true);
    const [gastos, guardarGastos] = useState([]);
    const [ gasto, guardarGasto ] = useState({});
    const [ creargasto, guardarCrearGasto ] = useState(false);

    //Cuando agreguemos un nuevo gasto
    const agregarNuevoGasto = gasto => {
        guardarGastos([
            ...gastos,
            gasto
        ])
    }

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
                                <Form
                                    agregarNuevoGasto={agregarNuevoGasto}
                                />
                            </div>

                            <div className="one-half column">
                                <List
                                    gastos={gastos}
                                />
                                <BudgetControl
                                    presupuesto={presupuesto}
                                    restante={restante}
                                />
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