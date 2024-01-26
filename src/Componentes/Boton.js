import React from 'react';
import { useState } from 'react';
import "../Estilos/Boton.css";
import { ListaCarreras } from './ListaCarreras';
import ReactDOM from 'react-dom';


//Componente para los botones

function Boton({ valor, componenteAEjecutar, divId }) {
    const [ejecutarComponente, setEjecutarComponente] = useState(false);

    const manejarOnClick = () => {
        setEjecutarComponente(true);
        console.log("Boton pulsado");
      };

    return (
        <div>
            <div className="boton" onClick={manejarOnClick}>
              {valor}
            </div>
            {ejecutarComponente && 
              ReactDOM.createPortal(<ListaCarreras />, document.getElementById("contenido"))
            }
        </div>
    );
  }

export default Boton;