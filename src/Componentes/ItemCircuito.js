import React from "react";
import EstiloItemCircuito from "../Estilos/ItemCircuito.css";
import { Link } from "react-router-dom";

function ItemCircuito(circuit) {
  return (
    <div className="circuito">
      <div>
        <strong>Circuito:</strong> {circuit.circuitName}
      </div>
      <div className="circuito-contenedor">
        <div>
          <strong>Ciudad:</strong> {circuit.Location.locality}
        </div>
        <div>
          <strong>Pais:</strong> {circuit.Location.country}
        </div>
        <div>
          <strong>Latitud:</strong> {circuit.Location.lat}
        </div>
        <div>
          <strong>Longitud:</strong> {circuit.Location.long}
        </div>
      </div>
      <a className="urlCircuito" href={circuit.url}>
        Mas infomación sobre {circuit.circuitName}
      </a>
    </div>
  );
}

export default ItemCircuito;
