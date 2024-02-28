import React from 'react';
import { useLoaderData } from "react-router-dom";
import ItemCarrera from './ItemCarrera';
import { getAlldata } from '../Services/Consultas';
import '../Estilos/ListaCarreras.css';

export async function loader({ params }) {
    const carreras = await getAlldata(params.anio);
    //console.log(params.anio)
    return carreras;
}

export function ListaCarreras() {
    // Se obtiene tanto la temporada como la lista de carreras
    const result = useLoaderData();
    // Almacenamos la lista de carreras en una variable
    const carreras = result.Races;
    //console.log(carreras);
    //console.warn("Mostrando Lista Carreras");

    return (
        <>
            {/* Mostramos el año de la temporada seleccionada */}
            <h1 className='tituloCarreras'>Resultados de Carreras de {result.season}</h1>
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
