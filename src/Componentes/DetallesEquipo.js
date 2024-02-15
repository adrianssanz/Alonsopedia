import { useLoaderData } from 'react-router-dom'
import React from 'react';
import { getEquipoByIdJson } from '../Services/Consultas';

export async function loader({params}) {
  try {
      const equipo = await getEquipoByIdJson(params.id);
      //console.log(equipo[0]);
      //console.log(params.id);
      return equipo[0];
  } catch (error) {
      console.log('Error obteniendo detalles equipo:'+error);
      return [];
  }
}

export const DetallesEquipo = () => {
  const equipo = useLoaderData();
  //console.log(equipo)

  return (
    equipo && (
      <>
        <div>
          <h1>{equipo.name}</h1>
          <img src={equipo.logo} alt="" />
          <p>Base: {equipo.base}</p>
          <p>Primer año en F1: {equipo.first_team_entry}</p>
          <p>Temporadas en las que participo alonso: {equipo.alonso_seasons}</p>
          <p>Titulos mundiales: {equipo.world_championships}</p>
          <p>Presidente: {equipo.president}</p>
          <p>Director: {equipo.director}</p>
          <p>Motor: {equipo.engine}</p>
        </div>
      </>
    )
  )
}
