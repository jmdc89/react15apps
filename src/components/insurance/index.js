import React, {useState} from 'react';
import Header from './Header';
import Form from './Form';
import Resumen from './Resum';
import Resultado from './Result';
import Spinner from './Spinner';
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

    const [ resumen, guardarResumen] = useState({
        cotizacion: 0,
        datos: {
          marca: '',
          year: '',
          plan: ''
        }
    });
  
    const [ cargando, guardarCargando] = useState(false);
  
    // extraer datos
    const { cotizacion, datos } = resumen;

    return (
        <Contenedor>
           <Header
            titulo='Cotizador de Seguros'
            /> 

            <ContenedorFormulario>
                <Form
                guardarResumen={guardarResumen}
                guardarCargando={guardarCargando}
                />
                
                { cargando ? <Spinner/> : null }
                
                <Resumen
                    datos={datos}
                />

                { !cargando ?
                    <Resultado
                        cotizacion={cotizacion}
                    /> : null
                }
                
            </ContenedorFormulario>
        </Contenedor>
        
    );
}
 
export default Insurance;