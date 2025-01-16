import { useLoaderData } from "react-router-dom";
import React from "react";
import { getEquipoByIdJson } from "../Services/Consultas";
import "../Estilos/DetallesEquipo.css";

export async function loader({ params }) {
  try {
      const equipo = await getEquipoByIdJson(params.id);
      console.log("Equipo encontrado:", equipo); // Debugging
      return equipo; // No usar [0]
  } catch (error) {
      console.log("Error obteniendo detalles equipo:" + error);
      return null; // Devolver null en caso de error
  }
}

export const DetallesEquipo = () => {
  const equipo = useLoaderData();
  //console.log(equipo)

  return (
    equipo && (
      <div className="contenedor-equipo">
        <h2 className="tituloEquipo">{equipo.name}</h2>
        <div className="datos-equipo">
          <div className="imagen-equipo">
            <img src={equipo.logo} alt="" />
          </div>
          <div className="info-equipo">
            <p>
              <span className="negrita">Base:</span> {equipo.base}
            </p>
            <p>
              <span className="negrita">Primer año en F1:</span>{" "}
              {equipo.first_team_entry}
            </p>
            <p>
              <span className="negrita">
                Temporadas en las que participó Alonso:
              </span>{" "}
              {equipo.alonso_seasons}
            </p>
            <p>
              <span className="negrita">Títulos mundiales:</span>{" "}
              {equipo.world_championships}
            </p>
            <p>
              <span className="negrita">Presidente:</span> {equipo.president}
            </p>
            <p>
              <span className="negrita">Director:</span> {equipo.director}
            </p>
            <p>
              <span className="negrita">Motor:</span> {equipo.engine}
            </p>
            <a className="urlEquipo" href={`https://es.wikipedia.org/wiki/${equipo.name}`} target="_blank">
              Mas infomación sobre {equipo.name}
            </a>
          </div>
        </div>
      </div>
    )
  );
};
