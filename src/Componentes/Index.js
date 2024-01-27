import React from "react";
import fotoAlonso from "../imagenes/alonso.jpg";
import '../Estilos/Index.css';

function Index() {
  return (
    <div className="contenedor">
      <div className="imagen">
        <img className="fotoAlonso" src={fotoAlonso} alt="Foto Alonso" />
      </div>
      <div className="texto">
        <p>
          Fernando Alonso Díaz es un piloto de automovilismo nacido el 29 de
          julio de 1981 en Oviedo, Asturias, España. Es reconocido como uno de
          los mejores pilotos de Fórmula 1 de su generación. Alonso comenzó su
          carrera en el karting a una edad temprana y rápidamente progresó a las
          categorías de monoplazas.
        </p>
      </div>
    </div>
  );
}

export default Index;
