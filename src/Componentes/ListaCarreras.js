import React from 'react';
import { useLoaderData } from "react-router-dom";
import ItemCarrera from './ItemCarrera';
import * as API from '../Services/Consultas';
import '../Estilos/ListaCarreras.css';

export async function loader({ params }) {
    const carreras = await API.getAlldata(params.anio);
    //console.log(params.anio)
    return carreras;
}

export function ListaCarreras() {
    const result = useLoaderData();
    const carreras = result.Races;
    //console.log(carreras);
    //console.warn("Mostrando Lista Carreras");

    return (
        <>
            <h1 className='h1'>Resultados de Carreras de {result.season}</h1>
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
