import React from 'react';
import '../Estilos/ItemChassis.css';

function ItemChassis(chassis) {
  return (
    <>
      <div className='item-chassis'>
        <h1>{chassis.nombre}</h1>
        <h3>{chassis.equipo}</h3>
        <p>Temporada: {chassis.temporada}</p>
        <p>Diseñadores: {chassis.diseñador.map((disenador, index) => (
          <span key={index}>{disenador}{index !== chassis.diseñador.length - 1 && ', '}</span>
        ))}</p>
        <p>Materiales: {chassis.material.map((material, index) => (
          <span key={index}>{material}{index !== chassis.material.length - 1 && ', '}</span>
        ))}</p>      <p>Descripción: {chassis.descripcion}</p>
      </div>
    </>
  );
}

export default ItemChassis;
