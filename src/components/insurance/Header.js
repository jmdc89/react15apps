import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TextoHeader = styled.h1`
    font-size: 2.5rem;
    margin:0;
    text-align: center;
`;

const Header = ({titulo}) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
    );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;