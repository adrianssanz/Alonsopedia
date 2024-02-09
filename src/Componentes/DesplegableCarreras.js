import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Boton from './Boton';
import '../Estilos/DesplegableCarreras.css';

const DesplegableCarreras = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const handleSelect = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  return (
    <div>
    <div className='selector'>
      <label htmlFor="desplegable">Selecciona una temporada:</label>
      <select id="desplegable" onChange={handleSelect} value={opcionSeleccionada || ''}>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>

      <Boton valor="Cargar" ruta={`/carreras/${opcionSeleccionada|| '2021'}`} />

    </div>

        <Outlet/>
    </div>
  );
};

export default DesplegableCarreras;
