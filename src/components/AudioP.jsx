import React, { useContext, useState, useEffect } from 'react';
import Modelo from "./Modelo";
import NavBar from './NavBar';
import CatalogoContext from '../contexts/CatalogoContext';
import BuscadorContext from "../contexts/BuscadorContext";
import AudioTitle from "../img/audio.svg";
import StyleAudio from "../css/Audio.module.css"

const AudioP = () => {
  const { productos} = useContext(CatalogoContext);
  const [audiop, setAudiop] = useState([]); 
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
      setAudiop(
        productos.filter(function (item) {
    return item.categoria == "audiop";
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
          <picture className={StyleAudio.audio}>
    <img src={AudioTitle} alt="logo" />
    </picture>
    <section className={StyleAudio.articulos} > 
      {audiop != null
        ? audiop.map(function (element, index) {
            return (
              <Modelo key = {index}
                fuente={audiop[index]?.url}
                modelo={audiop[index]?.modelo}
                especificaciones={audiop[index]?.especificaciones}
                precio={audiop[index]?.precio}
                id={audiop[index]?.id}
                elemento={audiop[index]}
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

export default AudioP