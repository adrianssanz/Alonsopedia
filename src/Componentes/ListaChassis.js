import { useLoaderData } from 'react-router-dom'
import ItemChassis from './ItemChassis';
import '../Estilos/ListaChassis.css';
import { getChassisJson } from '../Services/Consultas';

export async function loader() {
    try {
        const chassis = await getChassisJson();
        //console.log(chassis);
        return chassis;
    } catch (error) {
        console.log('Error obteniendo chassis:'+error);
        return [];
    }
}

export function ListaChassis() {
    const listchassis = useLoaderData();
    //console.log(chassis)

    return (
        listchassis && (
        <>
            { listchassis.length === 0 ? (<div>Cargando Chassis...</div>) : (
                <div className='chassis'>
                    {listchassis.map(chassis=>(
                        <ItemChassis {...chassis}/>
                    ))}
                </div>
            )
            }
        </>
    )
    )
}
