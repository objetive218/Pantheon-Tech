import React, { useContext, useState, useEffect } from 'react';
import Modelo from "./Modelo";
import NavBar from './NavBar';
import CatalogoContext from '../contexts/CatalogoContext';
import ComputadorTitle from "../img/computadores.svg";

const Computadores = () => {
  const { productos} = useContext(CatalogoContext);
  const [comp, setComp] = useState([]); 
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
    <img src={ComputadorTitle} alt="logo" />
    <section>
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
  )
}

export default Computadores