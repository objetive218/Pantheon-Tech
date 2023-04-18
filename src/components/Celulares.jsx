import React, { useContext } from "react";
import Modelo from "./Modelo";
import { catalogo } from "../data/catalogo";
import CarritoContext from "../contexts/CarritoContext";

const Celulares = () => {
  const { addModel, carrito, eliminarModel } = useContext(CarritoContext);
  const cel = catalogo.filter(function (item) {
    return item.categoria == "celulares";
  });
  return (
    <>
      <Modelo
        fuente={cel[0].url}
        modelo={cel[0].modelo}
        especificaciones={cel[0].especificaciones}
        precio={cel[0].precio}
        id={cel[0].id}
      />

      <Modelo
        fuente={cel[1].url}
        modelo={cel[1].modelo}
        especificaciones={cel[1].especificaciones}
        precio={cel[1].precio}
        clic={function () {
          return addModel(cel[1], 1);
        }}
        cllic1={eliminarModel}
      />
      <Modelo
        fuente={cel[2].url}
        modelo={cel[2].modelo}
        especificaciones={cel[2].especificaciones}
        precio={cel[2].precio}
        clic={function () {
          console.log("aqui");
        }}
        cllic1={eliminarModel}
      />
      <Modelo
        fuente={cel[3].url}
        modelo={cel[3].modelo}
        especificaciones={cel[3].especificaciones}
        precio={cel[3].precio}
        clic={function () {
          console.log("aqui");
        }}
      />
    </>
  );
};

export default Celulares;
