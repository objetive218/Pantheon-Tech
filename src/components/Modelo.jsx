import React, { useContext } from "react";
import modeloStyle from "../css/Modelo.module.css";
import CarritoContext from "../contexts/CarritoContext";

const Modelo = (props) => {
  const { eliminarModel, addModel } = useContext(CarritoContext);
  return (
    <>
      <section className={modeloStyle.modelo}>
        <img
          className={modeloStyle.image}
          src={props.fuente}
          alt="imagen modelo"
        />
        <h2>{props.modelo}</h2>
        <p>{props.especificaciones}</p>
        <p>{props.precio}</p>
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

export default Modelo;
