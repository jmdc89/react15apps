import React from 'react';
import Expense from './Expense';
import {GastosRealizados} from './styles/Budget';

const List = ({gastos}) => (
    <GastosRealizados>
        <h2>Listado</h2>
        {gastos.map(gasto => (
            <Expense
                key={gasto.id}
                gasto={gasto}
            />
        ))}
    </GastosRealizados>
);
 
export default List;