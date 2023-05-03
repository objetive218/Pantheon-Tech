import React, { useContext, useState, useEffect } from 'react';
import Modelo from "./Modelo";
import NavBar from './NavBar';
import CatalogoContext from '../contexts/CatalogoContext';
import BuscadorContext from "../contexts/BuscadorContext";
import ComputadorTitle from "../img/computadores.svg";
import StyleComputadores from "../css/Computadores.module.css"

const Computadores = () => {
  const { productos} = useContext(CatalogoContext);
  const [comp, setComp] = useState([]); 
  const { buscar } = useContext(BuscadorContext);
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
      setComp(
        productos.filter(function (item) {
    return item.categoria == "computadores";
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
          <picture className={StyleComputadores.comput}>
    <img src={ComputadorTitle} alt="logo" />
    </picture>
    <section className={StyleComputadores.articulos} >
      {comp != null
        ? comp.map(function (element, index) {
            return (
              <Modelo key = {index}
                fuente={comp[index]?.url}
                modelo={comp[index]?.modelo}
                especificaciones={comp[index]?.especificaciones}
                precio={comp[index]?.precio}
                id={comp[index]?.id}
                elemento={comp[index]}
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
  )
}

export default Computadores