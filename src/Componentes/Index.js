import React from "react";
import fotoAlonso from "../imagenes/alonso.jpg";
import "../Estilos/Index.css";

function Index() {
  return (
    <div class="contenedor">
      <div class="div1">
      </div>

      <div class="div2">
        <img className="fotoAlonso" src={fotoAlonso} alt="Imagen Alonso" />
      </div>
    </div>
  );
}

export default Index;
