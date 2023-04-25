import React from "react";
import categoriacelular from "../img/categoriacelulares.svg";
import categoriacomputador from "../img/categoriacomputador.svg";
import categoriaconsola from "../img/categoriaconsola.svg";
import categoriaaudio from "../img/categoriaaudio.svg";
import StylePreview from "../css/Preview"

const Preview = () => {
  return (
    <>
      <picture>
        <img src={categoriacelular} alt="telefono" />
      </picture>
      <picture>
        <img src={categoriacomputador} alt="computador" />
      </picture>
      <picture>
        <img src={categoriaconsola} alt="consola" />
      </picture>
      <picture>
        <img src={categoriaaudio} alt="audio" />
      </picture>
    </>
  );
};

export default Preview;
