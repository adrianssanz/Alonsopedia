// Importa las bibliotecas necesarias de React
import React from "react";
import "../Estilos/Layout.css";
import Boton from "../Componentes/Boton.js";
import { ListaCarreras } from "./ListaCarreras.js";
import logoAlonso from "../imagenes/logoalonso.png";
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';


// Componente principal de la página
function Layout() {
  return (
    <div>
      <div>
        <div className="cabecera">
          <div className="titulo">
            <h1>Alonsopedia 14</h1>
            <h3 className="subtitulo">
              Tu Enciclopedia de Fernando Alonso de Confianza
            </h3>
          </div>
          <div className="logo">
            <Link to="/">
              <img
                className="imagenLogo"
                src={logoAlonso}
                alt="Logo Fernando Alonso"
              />
            </Link>
          </div>
        </div>

        <nav className="navegacion">
          <Boton valor="Inicio" ruta="/" />
          <Boton valor="Equipos" ruta="/equipos" />
          <Boton valor="Coches" ruta="" />
          <Boton valor="Resultados" ruta="/carreras" />
        </nav>

        <div id="contenido" className="contenido">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default Layout;
