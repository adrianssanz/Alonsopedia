import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Boton from './Boton';
import '../Estilos/Desplegable.css';
import { getAllCarreras } from '../Services/Consultas.js';

const DesplegableCarreras = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const [opciones, setOpciones] = useState([]);

  useEffect(() => {
    const obtenerCarreras = async () => {
      try {
        const carreras = await getAllCarreras();

        // Extraer años únicos de las carreras
        const añosUnicos = [...new Set(carreras.map(carrera => carrera.season))];

        // Mapear los años únicos a las opciones deseadas
        const opcionesAños = añosUnicos.map(año => ({
          valor: año
        }));

        setOpciones(opcionesAños);
      } catch (error) {
        console.error('Error al obtener carreras:', error);
      }
    };

    obtenerCarreras();
  }, []);

  const handleSelect = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  return (
    <div>
    <div className='selector'>
      <label htmlFor="desplegable">Selecciona una temporada:</label>
      <select id="desplegable" onChange={handleSelect} value={opcionSeleccionada || ''}>
        {/* Añade las opciones dinámicamente desde el estado 'opciones' */}
        {opciones.map((opcion, index) => (
            <option key={index} value={opcion.valor}>{opcion.valor}</option>
          ))}
      </select>

      <Boton valor="Cargar" ruta={`/carreras/${opcionSeleccionada|| '2001'}`} />

    </div>

        <Outlet/>
    </div>
  );
};

export default DesplegableCarreras;
