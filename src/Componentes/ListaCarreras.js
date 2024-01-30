import { useState, useEffect } from 'react';
import ItemCarrera from './ItemCarrera';
import * as API from '../Services/Consultas';
import '../Estilos/ListaCarreras.css';
import Layout from './Layout';

export function ListaCarreras({ props }) {
    console.warn("Mostrando Lista Carreras");

    const [carreras, setCarreras] = useState([]);
    
    useEffect(() => {
        API.getAlldata(props).then(setCarreras);
    }, [props]); // Asegúrate de incluir props como dependencia

    return (
        <>
            <h1 className='h1'>Resultados de Carreras de {props}</h1>
            {carreras.length === 0 ? (
                <div className='cargando'>Cargando Resultados...</div>
            ) : (
                <div className='carreras'>
                    {carreras.map(race => (
                        <ItemCarrera key={race.id} {...race} />
                    ))}
                </div>
            )}
        </>
    );
}
