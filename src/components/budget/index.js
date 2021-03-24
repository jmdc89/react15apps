import React from 'react';
import Question from './Question';
import {Contenido} from './styles/Budget.js';

function Budget() {
    return (
        <div className="container">
            <header>
                <h1>Gasto Semanal</h1>
                
                <Contenido>
                   <Question/> 
                </Contenido>
                

            </header>
        </div>
    );
}

export default Budget;