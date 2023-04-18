import React from "react";

const Modelo = (props) => {
  return (
    <>
      <img src={props.fuente} alt="imagen modelo" />
      <h2>{props.modelo}</h2>
      <p>{props.especificaciones}</p>
      <p>{props.precio}</p>
      <button>carrito</button>
    </>
  );
};

export default Modelo;
