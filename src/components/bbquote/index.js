import React, {useState, useEffect} from 'react';
import Frase from './Frase';
import styled from 'styled-components/macro';
import './index.css';



const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
` ;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  line-height: 0;
  text-transform: capitalize !important;
  :hover {
    cursor:pointer;
    background-size: 400px;
  }
`;

const BreakingBad = () => {

    //state de frases
    const [frase, guardarFrase] = useState({});

    const consultarAPI = async () => {
        const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
        const frase = await api.json()
        guardarFrase(frase[0]);
    }

    // Cargar una frase
    useEffect( () => {
        consultarAPI()
      }, []);
    

    return (
           <Contenedor>
            <Frase
                frase={frase}
            />
           <Boton
            onClick={consultarAPI}
           >
            Obtener Frase
            </Boton>    
        </Contenedor>   
    );
}
 
export default BreakingBad;
