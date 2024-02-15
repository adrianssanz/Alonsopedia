import React from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/ItemEquipo.css';

function ItemEquipo(equipo) {
  return (
    <div className='item-equipo'>
      <Link to={`/equipos/${equipo.id}`} className='link'>
          <img src={equipo.logo} alt="" />
          <h3>
            {equipo.name} - {equipo.alonso_seasons}
          </h3>
      </Link>
    </div>
  );
}

export default ItemEquipo;
