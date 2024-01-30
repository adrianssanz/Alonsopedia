import { useState, useEffect } from 'react';
import ItemCarrera from './ItemCarrera';
import * as API from '../Services/Consultas';
import '../Estilos/ListaCarreras.css';
import Layout from './Layout';


export function ListaCarreras() {
    console.warn("Mostrando Lista Carreras");

    const [carreras, setCarreras] = useState([])
    
    useEffect(() => {
        API.getAlldata().then(setCarreras);
    }, [])
    return (
        <>
            <h1 className='h1'>Resultados de las Carreras</h1>
            { carreras.length === 0 ? (<div className='cargando'>Cargando Resultados...</div>) : (
                <div className='carreras'>
                    {carreras.map(race=>(
                        <ItemCarrera {...race}/>
                    ))}
                </div>
            )
            }
        </>
    )
}