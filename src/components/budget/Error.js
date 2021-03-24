import React from 'react';
import {ErrorBudget} from './styles/Budget.js';

const Error = ({mensaje}) => (
    <ErrorBudget className="alert-danger error">{mensaje}</ErrorBudget>
);
 
export default Error;