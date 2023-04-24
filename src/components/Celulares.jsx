import React, { useContext, useState, useEffect } from "react";
import Modelo from "./Modelo";
import CatalogoContext from "../contexts/CatalogoContext";
import NavBar from "./NavBar"
import CelularesTitle from "../img/celulares.svg";

const Celulares = () => {
  const { productos} = useContext(CatalogoContext);
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
    <NavBar />
    <img src={CelularesTitle} alt="logo" />
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
