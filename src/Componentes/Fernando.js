import React from "react";
import fotoAlonso from "../imagenes/alonso2.jpg";
import videoAlonso from "../imagenes/videos/video.mp4";
import "../Estilos/Fernando.css";

function Fernando() {
  return (
    <>
      <div class="contenedorInformacion">
        <div className="divImagen">
          <img
            className="fotoAlonso"
            src="https://caleyandoporvaldes.files.wordpress.com/2017/05/fernando-alonso-nino-primeros-karts_1021408168_7229736_1020x574.jpg"
            alt="Imagen Alonso"
          />
        </div>
        <div class="divTexto">
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
      </div>
      <div class="contenedorInformacion">
        <div class="divTexto">
          <p className="textoAlonso">
            La época dorada de Fernando Alonso en la Fórmula 1 se materializó
            con su destacado desempeño junto al equipo Renault. En los años 2005
            y 2006, logró conquistar el título mundial, demostrando una
            combinación excepcional de habilidad en pista y estrategia. Su
            retirada en 2018 marcó el fin de una era, pero su legado perdura,
            extendiéndose más allá de la F1 al brillar también en el Campeonato
            Mundial de Resistencia. Como embajador del automovilismo español,
            Alonso dejó una huella imborrable, recordándonos la época en la que
            llevó a España a la cima del automovilismo mundial.
          </p>
        </div>
        <div className="divImagen">
          <img className="fotoAlonso" src={fotoAlonso} alt="Imagen Alonso" />
        </div>
      </div>
      <div class="contenedorInformacion">
        <div className="divImagen">
          <img
            className="fotoAlonso"
            src="https://images.daznservices.com/di/library/DAZN_News/36/10/fernando-alonso-aston-martin-f1-formula-1-gp-miami-7-mayo-2023_oofpc7lax37i13zkp2c2ilifb.jpg?t=-46590409&w=800"
            alt="Imagen Alonso"
          />
        </div>
        <div class="divTexto">
          <p className="textoAlonso">
            Fernando Alonso regresó a la Fórmula 1 en 2021 con Alpine después de
            un breve retiro. Su éxito y habilidades atrajeron la atención de
            Aston Martin, que lo fichó para la temporada 2024. Desde su regreso,
            Alonso ha continuado desafiando límites y destacando en la parrilla,
            consolidándose como un piloto clave en la categoría. Su trayectoria
            entre McLaren, Alpine y ahora Aston Martin refleja su dedicación y
            determinación en el automovilismo de élite.
          </p>
        </div>
      </div>
      <div className="centrar-video">
        <video width="640" height="360" controls>
          <source src={videoAlonso} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </>
  );
}

export default Fernando;
