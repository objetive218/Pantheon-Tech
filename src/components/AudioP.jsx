import React, { useContext, useState, useEffect } from 'react';
import Modelo from "./Modelo";
import NavBar from './NavBar';
import CatalogoContext from '../contexts/CatalogoContext';
import AudioTitle from "../img/audio.svg";
import StyleAudio from "../css/Audio.module.css"

const AudioP = () => {
  const { productos} = useContext(CatalogoContext);
  const [audiop, setAudiop] = useState([]); 
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
    <img className={StyleAudio.audio} src={AudioTitle} alt="logo" />
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
  )
}

export default AudioP