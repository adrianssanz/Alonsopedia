import { useState, useEffect } from 'react';
import * as API from '../Services/Consultas';
import ItemEquipo from './ItemEquipo';
import '../Estilos/ListaEquipos.css';

export function ListaEquipos() {
    const [equipos, setEquipos] = useState([])
    
    useEffect(() => {
        API.getAllEquipos().then(setEquipos);
    }, [])
    return (
        equipos && (
        <>
            { equipos.length === 0 ? (<div>Cargando Equipos...</div>) : (
                <div className='equipos'>
                    {equipos.map(equipo=>(
                        <ItemEquipo {...equipo}/>
                    ))}
                </div>
            )
            }
        </>
    )
    )
}
