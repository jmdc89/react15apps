import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({gasto}) => (
    <li className="gastos">
        <p>
            {gasto.nombre}

            <span className="gasto">${gasto.cantidad}</span>
        </p>
    </li>
);


Expense.propTypes = {
    gasto: PropTypes.object.isRequired
}

export default Expense;