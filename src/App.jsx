
import React, { useContext, useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import CatalogoContext from "./contexts/CatalogoContext";
import BuscadorContext from "./contexts/BuscadorContext";
import Modelo from "./components/Modelo";
import banner from "./img/bannererror.gif";
import Preview from "./components/Preview";
import StyleApp from "./css/App.module.css"

const App = () => {
  const { productos } = useContext(CatalogoContext);
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

  return (
    <>
<NavBar />
    <section>
      <img className={StyleApp.imagen} src={banner} alt="imagen" />
      {buscar == null || String(buscar).length > 3 ? (
        carga.map(function (element, index) {
          return (
            <Modelo key = {index}
              fuente={carga[index]?.url}
              modelo={carga[index]?.modelo}
              especificaciones={carga[index]?.especificaciones}
              precio={carga[index]?.precio}
              id={carga[index]?.id}
              elemento={carga[index]}
            />
          );
        })
      )  : (
        <section><Preview /></section>
      )}
    </section>
      
    </>
  );
};

export default App;
