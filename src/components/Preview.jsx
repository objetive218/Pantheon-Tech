import React, { useState } from "react";
import categoriacelular from "../img/categoriacelulares.svg";
import categoriacomputador from "../img/categoriacomputador.svg";
import categoriaconsola from "../img/categoriaconsola.svg";
import categoriaaudio from "../img/categoriaaudio.svg";
import StylePreview from "../css/Preview.module.css";
import testcel from "../img/celpreviewtest.png";
import testcomp from "../img/comppreview.png";
import testvid from "../img/vidpreview.png";
import testaudio from "../img/audiopreview.png";

const Preview = () => {
  const [cambio, setCambio] = useState(false);
  const [cambio1, setCambio1] = useState(false);
  const [cambio2, setCambio2] = useState(false);
  const [cambio3, setCambio3] = useState(false);
  const cambiar = function () {
    setCambio(!cambio);
  };
  return (
    <>
      <section className={StylePreview.caja}>
        <picture
          onMouseEnter={function () {
            setCambio(!cambio);
          }}
          onMouseLeave={function () {
            setCambio(!cambio);
          }}
          className={`${StylePreview.celu} $`}
        >
          <img
            className={cambio ? StylePreview.active : ""}
            src={categoriacelular}
            alt="telefono"
          />
          <img
            className={cambio ? StylePreview.preview : StylePreview.active}
            src={testcel}
            alt="telefono"
          />
        </picture>
        <picture
          onMouseEnter={function () {
            setCambio1(!cambio1);
          }}
          onMouseLeave={function () {
            setCambio1(!cambio1);
          }}
          className={StylePreview.compu}
        >
          <img
            className={cambio1 ? StylePreview.active : ""}
            src={categoriacomputador}
            alt="computador"
          />
          <img
            className={cambio1 ? StylePreview.preview : StylePreview.active}
            src={testcomp}
            alt="computador"
          />
        </picture>
        <picture
          onMouseEnter={function () {
            setCambio2(!cambio2);
          }}
          onMouseLeave={function () {
            setCambio2(!cambio2);
          }}
          className={StylePreview.nintendo}
        >
          <img
            className={cambio2 ? StylePreview.active : ""}
            src={categoriaconsola}
            alt="consola"
          />
          <img
            className={cambio2 ? StylePreview.preview : StylePreview.active}
            src={testvid}
            alt="consola"
          />
        </picture>
        <picture
          onMouseEnter={function () {
            setCambio3(!cambio3);
          }}
          onMouseLeave={function () {
            setCambio3(!cambio3);
          }}
          className={StylePreview.audif}
        >
          <img
            className={cambio3 ? StylePreview.active : ""}
            src={categoriaaudio}
            alt="audio"
          />
          <img
            className={cambio3 ? StylePreview.preview : StylePreview.active}
            src={testaudio}
            alt="audio"
          />
        </picture>
      </section>
    </>
  );
};

export default Preview;
