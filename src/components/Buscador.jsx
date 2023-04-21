import React, { useContext } from "react";
import BuscadorContext from "../contexts/BuscadorContext";
import { BsSearch } from "react-icons/bs";
import StyleSearch from "../css/Buscador.module.css"

const Buscador = function () {
  const { setBuscar } = useContext(BuscadorContext);
  const search = function (e) {
    e.preventDefault();
    setBuscar(e.target.value);
  };

  return (
    <form className={StyleSearch.search}>
        <BsSearch />
      <input className={StyleSearch.buscar} type="text" onChange={search} />
    </form>
  );
};

export default Buscador;
