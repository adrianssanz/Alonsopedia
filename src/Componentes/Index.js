import React from "react";
import fotoAlonso from "../imagenes/alonso.jpg";
import "../Estilos/Index.css";

function Index() {
  return (
    <>
    <div class="contenedor">
      <div class="div1">
        <h2 className="tituloAlonso">AlonsoPedia</h2>
        <p className="textoAlonso">Sumérgete en las estadísticas impresionantes de <span>Fernando Alonso</span> en la Fórmula 1. Descubre sus victorias, récords y momentos destacados de una carrera excepcional. Bienvenido a la ventana digital que desglosa los números detrás del genio del volante, donde cada estadística cuenta una historia de éxito en la pista.</p>
      </div>

      <div className="div2">
        <img className="fotoAlonso" src={fotoAlonso} alt="Imagen Alonso" />
      </div>
    </div>
    </>
  );
}

export default Index;
