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

export const Citadiv = styled.div`
    text-transform: capitalize;
    padding: 2rem;
    background: white;
    border-bottom: 1px solid #e1e1e1;
    color: black;

    p {
    font-weight: bold;
    margin-bottom: .8rem;
    }

    p span {
    font-weight: normal;
    }

    :first-of-type {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    }

    :last-of-type {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    }
`;

export const ButtonEliminar = styled.button`
    background-color: #c10059;
    color: white;
    margin-top: 2rem;
`;
