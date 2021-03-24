import React from 'react';

const Expense = ({gasto}) => (
    <li className="gastos">
        <p>
            {gasto.nombre}

            <span className="gasto">${gasto.cantidad}</span>
        </p>
    </li>
);
export default Expense;