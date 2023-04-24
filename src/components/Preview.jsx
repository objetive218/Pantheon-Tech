import React from "react";
import categoria1 from "../img/categoriacelulares.svg";
import categoria2 from "../img/categoriacomputador.svg";
import categoria3 from "../img/categoriaconsola.svg";
import categoria4 from "../img/categoriaaudio.svg";

const Preview = () => {
  return (
    <>
      <picture>
        <img src={categoria1} alt="telefono" />
      </picture>
      <picture>
        <img src={categoria2} alt="computador" />
      </picture>
      <picture>
        <img src={categoria3} alt="consola" />
      </picture>
      <picture>
        <img src={categoria4} alt="audio" />
      </picture>
    </>
  );
};

export default Preview;
