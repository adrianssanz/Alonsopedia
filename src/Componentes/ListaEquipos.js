import { useLoaderData } from 'react-router-dom'
import ItemEquipo from './ItemEquipo';
import '../Estilos/ListaEquipos.css';
import { getAllEquiposJson } from '../Services/Consultas';

export async function loader() {
    try {
        const equipos = await getAllEquiposJson();
        //console.log(equipos);
        return equipos;
    } catch (error) {
        console.log('Error obteniendo equipos:'+error);
        return [];
    }
}

export function ListaEquipos() {
    const equipos = useLoaderData();
    //console.log(equipos)

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
