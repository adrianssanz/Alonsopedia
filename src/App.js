import logoAlonso from "./imagenes/logoalonso.png";
import "./App.css";
import Boton from "./Componentes/Boton.js";
import { ListaCarreras } from "./Componentes/ListaCarreras.js";
import { ListaEquipos } from "./Componentes/ListaEquipos.js";


function App() {
  return (
    <div className="App">
      <div>
        <div className="cabecera">
          <div className="titulo">
            <h1>Alonsopedia 14</h1>
            <h3 className="subtitulo">
              Tu Enciclopedia de Fernando Alonso de Confianza
            </h3>
          </div>
          <div className="logo">
            <img
              className="imagenLogo"
              src={logoAlonso}
              alt="Descripción de la imagen"
            />
          </div>
        </div>

        <nav className="navegacion">
          <Boton 
            valor="Equipos" 
            componenteAEjecutar={<ListaEquipos />}
            divId="contenido"          
          />
          <Boton 
            valor="Coches"
            componenteAEjecutar=""
            divId="contenido"
          />
          <Boton
            valor="Resultados"
            componenteAEjecutar={<ListaCarreras />}
            divId="contenido"
          />
        </nav>

        <div id="contenido" className="contenido"></div>
      </div>
    </div>
  );
}

export default App;
