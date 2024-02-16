import React from 'react';
import '../Estilos/ItemChassis.css';

function ItemChassis(chassis) {
  return (
    <>
      <div className='item-chassis'>
        <h1>{chassis.nombre}</h1>
        <h3>{chassis.equipo}</h3>
        <p><span className='negrita'>Temporada: </span> {chassis.temporada}</p>
        <p><span className='negrita'>Diseñadores:</span> {chassis.diseñador.map((disenador, index) => (
          <span key={index}>{disenador}{index !== chassis.diseñador.length - 1 && ', '}</span>
        ))}</p>
        <p><span className='negrita'>Material:</span> {chassis.material.map((material, index) => (
          <span key={index}>{material}{index !== chassis.material.length - 1 && ', '}</span>
        ))}</p>      
        <div className='descripcion-chasis'>
        <p><span className='negrita'>Descripción: </span> {chassis.descripcion}</p>

        </div>
      </div>
    </>
  );
}

export default ItemChassis;
