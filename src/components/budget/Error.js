import React from 'react';
import {ErrorBudget} from './styles/Budget.js';
import PropTypes from 'prop-types';

const Error = ({mensaje}) => (
    <ErrorBudget className="alert-danger error">{mensaje}</ErrorBudget>
);

Error.propTypes = {
    mensaje: PropTypes.string.isRequired    
}
 
export default Error;