import React, { useContext } from "react";
import modeloStyle1 from "../css/ModeloBuscar.module.css";
import CarritoContext from "../contexts/CarritoContext";
import Borde from "../img/borde.svg";

const ModeloBuscar = (props) => {
  const { eliminarModel, addModel } = useContext(CarritoContext);
  return (
    <>
      <section className={modeloStyle1.modelo}>
        <img className={modeloStyle1.borde} src={Borde} alt="BordeArticulo" />
        <img
          className={modeloStyle1.imag}
          src={props.fuente}
          alt="imagen modelo"
        />
        <article className={modeloStyle1.caracter}>
          <h2>{props.modelo}</h2>
          <p>{props.especificaciones}</p>
          <p>{props.precio}</p>
        </article>
        <form action="#">
          <button
            type="button"
            onClick={function () {
              addModel(props.elemento, 1);
            }}
          >
            carrito
          </button>
          <button
            type="button"
            onClick={function () {
              eliminarModel(props.id);
            }}
          >
            eliminar
          </button>
        </form>
      </section>
    </>
  );
};

export default ModeloBuscar;
