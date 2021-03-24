import React from 'react';
// import {revisarPresupuesto} from './helpers';
import {AlertPrimary, AlertColor} from './styles/Budget';

const BudgetControl = ({presupuesto, restante}) => {

    const revisarPresupuesto = (presupuesto, restante) => {

        let clase;

        if( ( presupuesto / 4 ) > restante ) {
    
            clase = {
                color: "#721c24",
                background: "#f8d7da",
                border: "#f5c6cb"
            };
            
        } else if ( (presupuesto / 2) > restante ) {
    
            clase = {
                color: "#856404",
                background: "#fff3cd",
                border: "#ffeeba"
            };
    
        }    else {
            clase = {
                color: "#155724",
                background: "#d4edda",
                border: "#c3e6cb"
            };
        }

        return clase;
    
    }

    const styles = revisarPresupuesto();

   console.log(styles);


    return (
        <>
            <AlertPrimary>
                Presupuesto: $ {presupuesto}
            </AlertPrimary>
            <AlertColor>
                Restante: $ {restante}
            </AlertColor>
        </>
    );
}
 
export default BudgetControl;