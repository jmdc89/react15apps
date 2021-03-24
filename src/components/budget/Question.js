import React, {useState} from 'react';

const Question = () => {


    const [cantidad, guardarCantidad] = useState(0);

    //Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value, 10))
    }

    //Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar

        //Si se pasa la validación
        
    }

    return (  
        <>
            <h2>Coloca tu presupuesto</h2>

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />

            </form>
        </>
    );
}
 
export default Question;