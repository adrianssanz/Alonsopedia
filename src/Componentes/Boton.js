import React from 'react';
import { useState } from 'react';
import "../Estilos/Boton.css";
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
              ReactDOM.createPortal(componenteAEjecutar, document.getElementById(divId))
            }
        </div>
    );
  }

export default Boton;