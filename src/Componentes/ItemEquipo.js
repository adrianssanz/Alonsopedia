import React from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/ItemEquipo.css';

function ItemEquipo(equipo) {
  return (
    <div className='item-equipo'>
      <Link to={`/equipos/${equipo.team.id}`} className='link'>
          <img src={equipo.team.logo} alt="" />
          <h3>
            {equipo.team.name} - {equipo.season}
          </h3>
      </Link>
    </div>
  );
}

export default ItemEquipo;
