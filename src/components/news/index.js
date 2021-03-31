import React, {useState, useEffect} from 'react';
import Header from './Header';
import Formulario from './Formulario';
import ListadoNoticias from './ListadoNoticias';

const News = () => {

    const [categoria, guardarCategoria] = useState('');
    const [noticias, guardarNoticias] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
          const url = `https://newsapi.org/v2/top-headlines?country=es&category=${categoria}&apiKey=e2abd9e31c0d4f3aa782dbcaca44c9f3`;
    
          const respuesta = await fetch(url);
          const noticias = await respuesta.json();
    
          guardarNoticias(noticias.articles);
        }
        consultarAPI();
      }, [categoria]);

    return (
        <>
            <Header
                titulo='Buscador de Noticias'   
            />

            <div className="container white">
                <Formulario
                    guardarCategoria={guardarCategoria}
                />

                <ListadoNoticias
                    noticias={noticias}
                />
            </div>
        </>
    );
}
 
export default News;
