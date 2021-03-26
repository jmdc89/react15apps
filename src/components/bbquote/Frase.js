import React from 'react';
import styled from 'styled-components/macro';

const ContenedorFrase = styled.div`
    padding: 2rem !important;
    border-radius: .5rem !important;
    background-color: #fff !important;
    max-width:80vw !important;
    margin-bottom: 1rem !important;
       
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2rem;
        text-align: center;
        color: black;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight:bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

const Frase = ({frase}) => {
    return (

        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>- {frase.author} </p>
        </ContenedorFrase>
        
    );
}
 
export default Frase;