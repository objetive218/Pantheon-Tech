import React, { useContext, useState, useEffect } from "react";
import Modelo from "./Modelo";
import CatalogoContext from "../contexts/CatalogoContext";

const Celulares = () => {
  const { productos, setProductos } = useContext(CatalogoContext);
  const [cel, setCel] = useState([]);
  useEffect(
    function () {
      setCel(
        productos.filter(function (item) {
          return item.categoria == "celulares";
        })
      );
    },
    [productos]
  );
  return (
    <>
      {cel != null
        ? cel.map(function (element, index) {
            return (
              <Modelo key = {index}
                fuente={cel[index]?.url}
                modelo={cel[index]?.modelo}
                especificaciones={cel[index]?.especificaciones}
                precio={cel[index]?.precio}
                id={cel[index]?.id}
                elemento={cel[index]}
              />
            );
          })
        : ""}
    </>
  );
};

export default Celulares;
