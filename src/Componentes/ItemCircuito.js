import React from 'react';
import EstiloItemCircuito from '../Estilos/ItemCircuito.css';

function ItemCircuito(circuit) {
  return (
    <div className='circuito'>
      <div>
        <strong>Circuito:</strong> {circuit.circuitName}
      </div>
      <div className='circuito-contenedor'>
        <div>
          <strong>Ciudad:</strong> {circuit.Location.locality}
        </div>
        <div>
          <strong>Pais:</strong> {circuit.Location.country}
        </div>
        <div>
          <strong>Latitud:</strong> {circuit.Location.lat}
        </div>
        <div>
          <strong>Longitud:</strong> {circuit.Location.long}
        </div>
      </div>
    </div>
  );
};

export default ItemCircuito;