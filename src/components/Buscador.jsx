import React, { useContext } from "react";
import BuscadorContext from "../contexts/BuscadorContext";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Buscador = function () {
  const { setBuscar } = useContext(BuscadorContext);
  const search = function (e) {
    e.preventDefault();
    setBuscar(e.target.value);
  };

  return (
    <form action="/resultados">
      <input type="text" placeholder="buscar" onChange={search} />
      <Link to="/resultados">
        <BsSearch />
      </Link>
    </form>
  );
};

export default Buscador;
