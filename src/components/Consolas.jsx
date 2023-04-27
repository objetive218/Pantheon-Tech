import React, { useContext, useState, useEffect } from 'react';
import Modelo from "./Modelo";
import NavBar from './NavBar';
import CatalogoContext from '../contexts/CatalogoContext';
import VideojuegoTitle from "../img/videojuegos.svg";
import StyleVideojuegos from "../css/Videojuegos.module.css"

const Videojuegos = () => {
  const { productos} = useContext(CatalogoContext);
  const [video, setVideo] = useState([]); 
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
    <img className={StyleVideojuegos.consola} src={VideojuegoTitle} alt="logo" />
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
  )
}

export default Videojuegos