import React, { useContext, useState, useEffect } from "react";
import Modelo from "./Modelo";
import { catalogo } from "../data/catalogo";
import CatalogoContext from "../contexts/CatalogoContext";

const Celulares = () => {
  const { productos, setProductos } = useContext(CatalogoContext);
  const [cel, setCel] = useState([]);
  useEffect(function(){
    setCel(productos.filter(function (item) {
      return item.categoria == "celulares";
    }))
  },productos)
  return (
    <>
      <Modelo
        fuente={cel[0]?.url}
        modelo={cel[0]?.modelo}
        especificaciones={cel[0]?.especificaciones}
        precio={cel[0]?.precio}
        id={cel[0]?.id}
        elemento={cel[0]}
      />

      <Modelo
        fuente={cel[1]?.url}
        modelo={cel[1]?.modelo}
        especificaciones={cel[1]?.especificaciones}
        precio={cel[1]?.precio}
        id={cel[1]?.id}
        elemento={cel[1]}
      />
      <Modelo
        fuente={cel[2]?.url}
        modelo={cel[2]?.modelo}
        especificaciones={cel[2]?.especificaciones}
        precio={cel[2]?.precio}
        id={cel[2]?.id}
        elemento={cel[2]}
      />
      <Modelo
        fuente={cel[3]?.url}
        modelo={cel[3]?.modelo}
        especificaciones={cel[3]?.especificaciones}
        precio={cel[3]?.precio}
        id={cel[3]?.id}
        elemento={cel[3]}
      />
    </>
  );
};

export default Celulares;
