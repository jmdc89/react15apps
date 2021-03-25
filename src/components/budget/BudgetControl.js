import React from 'react';
import {AlertPrimary, AlertWarning, AlertSuccess, AlertDanger} from './styles/Budget';
import PropTypes from 'prop-types';

const BudgetControl = ({presupuesto, restante}) => {

    return (
        <>
            <AlertPrimary>
                Presupuesto: $ {presupuesto}
            </AlertPrimary>

            {
            ( restante < (presupuesto/4) )?
                <AlertDanger>
                Restante: $ {restante}
                </AlertDanger>
            :
            
            ( restante < (presupuesto/2) )?
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

BudgetControl.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default BudgetControl;