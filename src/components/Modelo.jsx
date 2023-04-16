import React from "react";

const Modelo = (fuente, modelo, especificaciones, precio) => {
  return (
    <>
      <img src={fuente} alt="imagen modelo" />
      <h2>{modelo}</h2>
      <p>{especificaciones}</p>
      <p>{precio}</p>
    </>
  );
};

export default Modelo;
