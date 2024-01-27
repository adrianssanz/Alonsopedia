import React from 'react';
import ItemCircuito from './ItemCircuito';
import '../Estilos/ItemCarrera.css';

function ItemCarrera(race) {
  return (
    <div className='carrera-contenedor'>
      <div className='carrera-titulo'>
        {race.raceName} - {race.season}
      </div>
      <div>
        <strong>Fecha:</strong> {race.date}
      </div>
      <div>
        <strong>Ronda:</strong> {race.round}
      </div>
      <div>
        <ItemCircuito {...race.Circuit}/>
        {/*<button onClick={getCircuit}>Información del circuito</button>*/}
      </div>
    </div>
  );
};

export default ItemCarrera;