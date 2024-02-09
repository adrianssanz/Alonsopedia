import React from "react";
import fotoAlonso from "../imagenes/alonso.jpg";
import "../Estilos/Index.css";

function Index() {
  return (
    <div class="contenedor">
      <div class="div1">
<<<<<<< HEAD
        <h2 className="tituloAlonso">AlonsoPedia</h2>
        <p className="textoAlonso">Sumérgete en las estadísticas impresionantes de <span>Fernando Alonso</span> en la Fórmula 1. Descubre sus victorias, récords y momentos destacados de una carrera excepcional. Bienvenido a la ventana digital que desglosa los números detrás del genio del volante, donde cada estadística cuenta una historia de éxito en la pista.</p>
=======
        Fernando Alonso Díaz es un piloto de automovilismo nacido el 29 de
        julio de 1981 en Oviedo, Asturias, España. Es reconocido como uno de
        los mejores pilotos de Fórmula 1 de su generación. Alonso comenzó su
        carrera en el karting a una edad temprana y rápidamente progresó a las
        categorías de monoplazas.
>>>>>>> 125012e1d9df1eeff2b4f7acc94d5d2ded6fa6da
      </div>

      <div class="div2">
        <img className="fotoAlonso" src={fotoAlonso} alt="Imagen Alonso" />
      </div>
    </div>
  );
}

export default Index;
