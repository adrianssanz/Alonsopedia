import { useState, useEffect } from 'react';
import ItemCarrera from './ItemCarrera';
import * as API from '../Services/Consultas';
import '../Estilos/ListaCarreras.css';


export function ListaCarreras() {
    console.warn("Mostrando Lista Carreras");

    const [carreras, setCarreras] = useState([])
    
    useEffect(() => {
        API.getAlldata().then(setCarreras);
    }, [])
    return (
        <>
            { carreras.length === 0 ? (<div>Cargando Resultados...</div>) : (
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