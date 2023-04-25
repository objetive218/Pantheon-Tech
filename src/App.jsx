import React, { useContext, useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import CatalogoContext from "./contexts/CatalogoContext";
import BuscadorContext from "./contexts/BuscadorContext";
import ModeloBuscar from "./components/ModeloBuscar";
import banner from "./img/bannererror.gif";
import Preview from "./components/Preview";
import StyleApp from "./css/App.module.css";

const App = () => {
  const { productos } = useContext(CatalogoContext);
  const { buscar } = useContext(BuscadorContext);
  const [carga1, setCarga1] = useState([]);
  useEffect(
    function () {
      setCarga1(
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
        {buscar == null || String(buscar).length > 3 ? null : (
          <picture className={StyleApp.imagen}>
            <img className={StyleApp.img1} src={banner} alt="imagen" />
          </picture>
        )}

        {buscar == null || String(buscar).length > 3 ? (
          carga1.map(function (element, index) {
            return (
              <ModeloBuscar
                key={index}
                fuente={carga1[index]?.url}
                modelo={carga1[index]?.modelo}
                especificaciones={carga1[index]?.especificaciones}
                precio={carga1[index]?.precio}
                id={carga1[index]?.id}
                elemento={carga1[index]}
              />
            );
          })
        ) : (
          <Preview />
        )}
    </>
  );
};

export default App;
