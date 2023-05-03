import React, { useContext, useState, useEffect } from "react";
import Modelo from "./Modelo";
import CatalogoContext from "../contexts/CatalogoContext";
import BuscadorContext from "../contexts/BuscadorContext";
import NavBar from "./NavBar"
import CelularesTitle from "../img/celulares.svg";
import StyleCelulares from "../css/Celulares.module.css"

const Celulares = () => {
  const { productos} = useContext(CatalogoContext);
  const { buscar } = useContext(BuscadorContext);
  const [cel, setCel] = useState([]);
  const [carga, setCarga] = useState([]);
  useEffect(
    function () {
      setCarga(
        productos.filter(function (item) {
          return String(item.modelo)
            .toLowerCase()
            .includes(String(buscar).toLowerCase());
        })
      );
    },
    [buscar]
  );
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
    {buscar == null || String(buscar).length > 3 ? null : (
          <>
          <picture className={StyleCelulares.celuco}>
    <img src={CelularesTitle} alt="logo" />
    </picture>
    <section className={StyleCelulares.articulos}>
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
    </section>  
          </>
        )}
    {buscar == null || String(buscar).length > 3 ? (
          carga.map(function (element, index) {
            return (
              <Modelo
                key={index}
                fuente={carga[index]?.url}
                modelo={carga[index]?.modelo}
                especificaciones={carga[index]?.especificaciones}
                precio={carga[index]?.precio}
                id={carga[index]?.id}
                elemento={carga[index]}
              />
            );
          })
        ) : (
          ""
        )}
    </>
  );
};

export default Celulares;
