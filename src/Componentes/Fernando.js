import React from "react";
import fotoAlonso from "../imagenes/alonso.jpg";
import "../Estilos/Index.css";

function Fernando() {
  return (
    <>
      <div class="contenedor">
        <div class="div1">
          <h2 className="tituloAlonso">Fernando Alonso</h2>
          <p className="textoAlonso">
            Fernando Alonso, nacido el 29 de julio de 1981 en Oviedo, Asturias,
            es un destacado piloto de automovilismo español. Ganó el título
            mundial de la Fórmula 1 en 2005 y 2006 con Renault, destacándose por
            su habilidad en pista y versatilidad en otras disciplinas
            automovilísticas como el Campeonato Mundial de Resistencia de la
            FIA. Su carrera lo ha convertido en un referente internacional y una
            figura emblemática del automovilismo español.
          </p>
        </div>

        <div className="div2">
          <img className="fotoAlonso" src={fotoAlonso} alt="Imagen Alonso" />
        </div>
      </div>
      <div class="video-container">
        <iframe
          src=""
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}

export default Fernando;
