import React from 'react';
import {AlertPrimary, AlertWarning, AlertSuccess, AlertDanger} from './styles/Budget';

const BudgetControl = ({presupuesto, restante}) => {

    return (
        <>
            <AlertPrimary>
                Presupuesto: $ {presupuesto}
            </AlertPrimary>

            {
            ( ( presupuesto*0.75) > restante )?
                <AlertSuccess>
                Restante: $ {restante}
                </AlertSuccess>
            :
            
            ( (presupuesto / 2) > restante )?
                <AlertWarning>
                Restante: $ {restante}
                </AlertWarning>
            :
                <AlertSuccess>
                Restante: $ {restante}
                </AlertSuccess>
            }

        </>
    );
}
 
export default BudgetControl;