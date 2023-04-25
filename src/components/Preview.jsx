import React from "react";
import categoriacelular from "../img/categoriacelulares.svg";
import categoriacomputador from "../img/categoriacomputador.svg";
import categoriaconsola from "../img/categoriaconsola.svg";
import categoriaaudio from "../img/categoriaaudio.svg";
import StylePreview from "../css/Preview.module.css"

const Preview = () => {
  return (
    <>
    <section className={StylePreview.caja}>
      <picture>
        <img className={StylePreview.celu} src={categoriacelular} alt="telefono" />
      </picture>
      <picture>
        <img className={StylePreview.compu} src={categoriacomputador} alt="computador" />
      </picture>
      <picture>
        <img className={StylePreview.nintendo}  src={categoriaconsola} alt="consola" />
      </picture>
      <picture>
        <img className={StylePreview.audif}  src={categoriaaudio} alt="audio" />
      </picture>
    </section>
    </>
  );
};

export default Preview;
