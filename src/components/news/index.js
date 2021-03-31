import React from 'react';
import Header from './Header';
import Formulario from './Formulario';

const News = () => {
    return (
        <>
            <Header
                titulo='Buscador de Noticias'   
            />

            <div className="container white">
                <Formulario />
            </div>
        </>
    );
}
 
export default News;
