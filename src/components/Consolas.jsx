import React, { useContext, useState, useEffect } from 'react';
import Modelo from "./Modelo";
import NavBar from './NavBar';
import CatalogoContext from '../contexts/CatalogoContext';
import BuscadorContext from "../contexts/BuscadorContext";
import VideojuegoTitle from "../img/videojuegos.svg";
import StyleVideojuegos from "../css/Videojuegos.module.css"

const Videojuegos = () => {
  const { productos} = useContext(CatalogoContext);
  const [video, setVideo] = useState([]); 
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
      setVideo(
        productos.filter(function (item) {
    return item.categoria == "videojuegos";
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
          <picture className={StyleVideojuegos.consola}>
    <img src={VideojuegoTitle} alt="logo" />
    </picture>
    <section className={StyleVideojuegos.articulos} >
      {video != null
        ? video.map(function (element, index) {
            return (
              <Modelo key = {index}
                fuente={video[index]?.url}
                modelo={video[index]?.modelo}
                especificaciones={video[index]?.especificaciones}
                precio={video[index]?.precio}
                id={video[index]?.id}
                elemento={video[index]}
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

export default Videojuegos