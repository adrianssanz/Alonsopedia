import { useState, useEffect } from 'react';
import React from 'react';
import * as API from '../Services/Consultas';
import { useParams } from 'react-router-dom';

const DetalleEquipo = () => {
  const { id } = useParams();

  const [equipo, setEquipo] = useState([])
  console.log(equipo);
    
  useEffect(() => {
      API.getEquipoById(id).then(setEquipo);
  }, [])
  return (
    equipo && (
      <>
        <div>
          <h1>{equipo.name}</h1>
          <img src={equipo.logo} alt="" />
          <p>Base: {equipo.base}</p>
        </div>
      </>
    )
  );
};

export default DetalleEquipo;
