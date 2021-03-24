import styled from 'styled-components/macro';

export const Contenido = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 20px;

    h2 {
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    color:#004e92;
    margin-bottom:30px;
    font-size:3rem!important;
    text-align: center;
  }

`;

export const ErrorBudget = styled.p`
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    text-align: center;
`;

export const GastosRealizados = styled.div`
    margin-bottom: 2rem;

    li{
    list-style: none;
    margin-bottom: 0rem;
    border-bottom: 1px solid #e1e1e1;
    padding: 1rem 0;
     }

     li:last-of-type {
    margin-bottom: 0!important;
    }

    li p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0;
    }

    li p .gasto {
    background-color: #004085;
    padding: 1rem;
    color:white;
  }
`;

