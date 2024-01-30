import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Boton from './Boton';
import '../Estilos/DesplegableCarreras.css';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
    <div className='selector'>
      <label htmlFor="dropdown">Selecciona una opción:</label>
      <select id="dropdown" onChange={handleSelect} value={selectedOption || ''}>
        <option value="" disabled>Selecciona una opción</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>

      <Boton valor="Cargar" ruta={`/carreras/${selectedOption}`} />

    </div>

        <Outlet/>
    </div>
  );
};

export default Dropdown;
