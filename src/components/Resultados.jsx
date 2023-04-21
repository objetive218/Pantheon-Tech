import React, { useContext, useState, useEffect } from "react";
import CatalogoContext from "../contexts/CatalogoContext";
import BuscadorContext from "../contexts/BuscadorContext";
import NavBar from "./NavBar";
import Modelo from "./Modelo";

const Resultados = () => {
  const { productos, setProductos } = useContext(CatalogoContext);
  const { buscar, setBuscar } = useContext(BuscadorContext);
  const [carga, setCarga] = useState(null);

  useEffect(
    function () {
      setCarga(
        productos.filter(function (item) {
          return item.modelo == buscar;
        })
      );
    }[buscar]
  );

  return (
    <>
      <NavBar />

      {buscar == null || String(buscar).length < 3
        ? carga.map(function (element, index) {
            return (
              <Modelo
                fuente={carga[index]?.url}
                modelo={carga[index]?.modelo}
                especificaciones={carga[index]?.especificaciones}
                precio={carga[index]?.precio}
                id={carga[index]?.id}
                elemento={carga[index]}
              />
            );
          })
        : <h1>error</h1>}
    </>
  );
};

export default Resultados;
