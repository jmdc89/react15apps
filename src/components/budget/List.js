import React from 'react';
import Expense from './Expense';
import {GastosRealizados} from './styles/Budget';
import PropTypes from 'prop-types';

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

List.propTypes = {
    gastos: PropTypes.array.isRequired
}
 
export default List;