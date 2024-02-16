import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Boton from "./Boton";
import "../Estilos/DesplegableEquipos.css";

const DesplegableEquipos = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const handleSelect = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  return (
    <div>
      
        <div className="selector">
          <label htmlFor="desplegable">Selecciona un equipo:</label>
          <select
            id="desplegable"
            onChange={handleSelect}
            value={opcionSeleccionada || ""}
          >
            <option value="1">Minardi</option>
            <option value="2">Renault</option>
            <option value="3">McLaren</option>
            <option value="4">Ferrari</option>
            <option value="5">Alpine</option>
            <option value="6">Aston Martin</option>
          </select>

          <Boton valor="Cargar" ruta={`/equipos/${opcionSeleccionada || '1'}`} />
        
      </div>

      <Outlet />
    </div>
  );
};

export default DesplegableEquipos;
