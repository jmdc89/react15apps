import React from 'react';
import Header from './Header';
import Form from './Form';
import styled from 'styled-components/macro';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

const Insurance = () => {
    return (
        <Contenedor>
           <Header
            titulo='Cotizador de Seguros'
            /> 

            <ContenedorFormulario>
                <Form />
            </ContenedorFormulario>
        </Contenedor>
        
    );
}
 
export default Insurance;