import React, {useState} from 'react';
import Header from './Header';
import Formulario from './Formulario';

const News = () => {

    const [categoria, guardarCategoria] = useState('');

    return (
        <>
            <Header
                titulo='Buscador de Noticias'   
            />

            <div className="container white">
                <Formulario
                    guardarCategoria={guardarCategoria}
                />
            </div>
        </>
    );
}
 
export default News;
