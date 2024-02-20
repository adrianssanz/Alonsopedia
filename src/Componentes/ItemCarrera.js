import React from "react";
import ItemCircuito from "./ItemCircuito";
import "../Estilos/ItemCarrera.css";

function ItemCarrera(race) {
  const alonsoResultado = race.Results.find(
    (result) => result.Driver.driverId === "alonso"
  );
  const alonsoVueltaRapida = alonsoResultado?.FastestLap;

  let circuitImage;
  try {
    circuitImage = require(`../imagenes/${race.Circuit.circuitId}.png`);
  } catch (error) {
    circuitImage = require(`../imagenes/image-not-found.jpg`);
  }

  return (
    <div className="carrera-contenedor">
      <div className="carrera-titulo">
        {race.raceName} - {race.season}
      </div>
      <div className="carrera-datos">
        <div>
          <strong>Fecha:</strong> {race.date}
        </div>
        <div>
          <strong>Ronda:</strong> {race.round}
        </div>
      </div>
      <div className="vuelta-rapida">
        <div>
          <strong>Resultado de Fernando:</strong>{" "}
          {alonsoResultado ? alonsoResultado.positionText : "-"}
        </div>
        <strong>Vuelta Rápida:</strong>{" "}
        {alonsoVueltaRapida ? alonsoVueltaRapida.Time.time : "N/A"}
      </div>
      <div>
        <img src={circuitImage} className="" alt="" />
      </div>
      <div>
        <ItemCircuito {...race.Circuit} />
        {/*<button onClick={getCircuit}>Información del circuito</button>*/}
      </div>
    </div>
  );
}

export default ItemCarrera;
