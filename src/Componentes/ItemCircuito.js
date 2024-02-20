import React from "react";
import EstiloItemCircuito from "../Estilos/ItemCircuito.css";
import { Link } from "react-router-dom";
import ImagenCircuito from "../imagenes/circuitos/spa.png";

function ItemCircuito(circuit) {
  let circuitImage;
  try {
    circuitImage = require(`../imagenes/circuitos/${circuit.circuitId}.png`);
  } catch (error) {
    circuitImage = require(`../imagenes/image-not-found.jpg`);
  }

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
      <div className="contenedorImagenCircuito">
        <img src={circuitImage} alt="" />
      </div>
      <a className="urlCircuito" href={circuit.url}>
        Mas infomación sobre {circuit.circuitName}
      </a>
    </div>
  );
}

export default ItemCircuito;
