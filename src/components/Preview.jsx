import React, { useState } from "react";
import categoriacelular from "../img/categoriacelulares.svg";
import categoriacomputador from "../img/categoriacomputador.svg";
import categoriaconsola from "../img/categoriaconsola.svg";
import categoriaaudio from "../img/categoriaaudio.svg";
import StylePreview from "../css/Preview.module.css";
import { Link } from "react-router-dom";

const Preview = () => {
  const [cambio, setCambio] = useState("");
  return (
    <>
      <section className={StylePreview.caja}>
        <picture
          onMouseEnter={function () {
            setCambio("celular");
          }}
          onMouseLeave={function () {
            setCambio("");
          }}
          className={`${StylePreview.imagen}`}
        >
          <img
            className={`${cambio == "celular" ? StylePreview.active : ""} `}
            src={categoriacelular}
            alt="telefono"
          />
            <Link to="/celulares" >
          <img
            className={cambio == "celular" ? StylePreview.preview : StylePreview.active}
            src="https://i.postimg.cc/ZYxpJ2kP/celpreviewtest.png"
            alt="telefono"
            />
            </Link>
        </picture>
        <picture
          onMouseEnter={function () {
            setCambio("computador");
          }}
          onMouseLeave={function () {
            setCambio("");
          }}
          className={`${StylePreview.imagen}`}
        >
          <img
            className={`${cambio == "computador" ? StylePreview.active : ""}`}
            src={categoriacomputador}
            alt="computador"
          />
            <Link to="/computadores" >
          <img
            className={cambio == "computador" ? StylePreview.preview : StylePreview.active}
            src="https://i.postimg.cc/T10DQLjN/comppreview.png"
            alt="computador"
            />
            </Link>
        </picture>
        <picture
          onMouseEnter={function () {
            setCambio("videojuego");
          }}
          onMouseLeave={function () {
            setCambio("");
          }}
          className={`${StylePreview.imagen}`}
        >
          <img
            className={`${cambio == "videojuego" ? StylePreview.active : ""}`}
            src={categoriaconsola}
            alt="consola"
          />
            <Link to="/consolas" >
          <img
            className={cambio == "videojuego" ? StylePreview.preview : StylePreview.active}
            src="https://i.postimg.cc/pLhm51S6/vidpreview.png"
            alt="consola"
            />
            </Link>
        </picture>
        <picture
          onMouseEnter={function () {
            setCambio("audio");
          }}
          onMouseLeave={function () {
            setCambio("");
          }}
          className={`${StylePreview.imagen}`}
        >
          <img
            className={`${cambio == "audio" ? StylePreview.active : ""} `}
            src={categoriaaudio}
            alt="audio"
          />
          <Link to="/audio" >
          <img
            className={cambio == "audio" ? StylePreview.preview : StylePreview.active}
            src="https://i.postimg.cc/D0nGqdGb/audiopreview.png"
            alt="audio"
            />
            </Link>
        </picture>
      </section>
    </>
  );
};

export default Preview;
