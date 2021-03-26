import React from 'react';

const Frase = ({frase}) => {
    return (
        
        <>
            <h1>{frase.quote}</h1>
            <p>- {frase.author} </p>
        </>
        
    );
}
 
export default Frase;