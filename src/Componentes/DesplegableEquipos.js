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
            <option value="17">Aston Martin</option>
            <option value="13">Alpine</option>
            <option value="2">McLaren</option>
            <option value="3">Ferrari</option>
          </select>

          <Boton valor="Cargar" ruta={`/equipos/${opcionSeleccionada}`} />
        
      </div>

      <Outlet />
    </div>
  );
};

export default DesplegableEquipos;
