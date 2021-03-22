import styled from 'styled-components/macro';

export const Label = styled.label`
    text-transform: capitalize !important;
    color: white;
`;

export const Error = styled.p`
    background-color: white;
    color: red;
    padding: 1rem;
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
    font-family:  'Staatliches', cursive;
`;

export const Input = styled.input`
    height: 38px;
    padding: 6px 10px;
    background-color: #fff;
    border: 1px solid #D1D1D1;
    border-radius: 4px;
    box-shadow: none;
    box-sizing: border-box;
`;
