import React from "react";
import modeloStyle from "../css/Modelo.module.css";

const Modelo = (props) => {
  return (
    <>
      <section className={modeloStyle.modelo}>
        <img className={modeloStyle.image} src={props.fuente} alt="imagen modelo" />
        <h2>{props.modelo}</h2>
        <p>{props.especificaciones}</p>
        <p>{props.precio}</p>
        <button onClick={props.clic}>carrito</button>
        <button onClick={props.clic1}>eliminar</button>
      </section>
    </>
  );
};

export default Modelo;
