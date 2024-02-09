import { useState, useEffect } from 'react';
import ItemCarrera from './ItemCarrera';
import * as API from '../Services/Consultas';
import '../Estilos/ListaCarreras.css';
import { useParams } from 'react-router-dom';

export function ListaCarreras() {
    console.warn("Mostrando Lista Carreras");

    const { anio } = useParams();

    const [carreras, setCarreras] = useState([]);
    
    useEffect(() => {
        API.getAlldata(anio).then(setCarreras);
    }, [anio]); // Asegúrate de incluir props como dependencia

    return (
        <>
            <h1 className='h1'>Resultados de Carreras de <span className='negrita'>{anio}</span></h1>
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
