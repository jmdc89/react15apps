import React from 'react';
import {Alert, AlertPrimary} from './styles/Budget';

const BudgetControl = ({presupuesto, restante}) => {
    return (
        <>
            <AlertPrimary>
                Presupuesto: $ {presupuesto}
            </AlertPrimary>
            <Alert>
                Restante: $ {restante}
            </Alert>
        </>
    );
}
 
export default BudgetControl;