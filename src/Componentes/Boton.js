import React from "react";
import "../Estilos/Boton.css";
import { Link } from 'react-router-dom';

//Componente para los botones

function Boton({ valor, ruta }) {
  return (
    <div>
        <Link to={ruta} className="btn">
          {valor}
        </Link>
    </div>
  );
}

export default Boton;
