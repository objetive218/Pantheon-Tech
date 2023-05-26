import React, { useContext } from "react";
import CarritoContext from "../contexts/CarritoContext";
import ModCarStyle from "../css/ModeloCar.module.css";

const ModeloCar = (props) => {
  const { eliminarModel, addModel } = useContext(CarritoContext);
  return (
    <section className={ModCarStyle.box}>
      <img className={ModCarStyle.image} src={props.url} alt="imagen" />
      <h1>{props.modelo}</h1>
      <h2>{props.precio}</h2>
      <form action="#">
        {props.cantidad < 2 ? (
          <button className={ModCarStyle.botton1} type="button">
            -
          </button>
        ) : (
          <button
            className={ModCarStyle.botton1}
            type="button"
            onClick={function () {
              eliminarModel(props.id);
            }}
          >
            -
          </button>
        )}
        <span>{props.cantidad}</span>
        <button
          className={ModCarStyle.botton1}
          type="button"
          onClick={function () {
            addModel(props.elemento, 1);
          }}
        >
          +
        </button>
        {props.cantidad > 0 ? (
          <button
            className={ModCarStyle.botton2}
            type="button"
            onClick={function () {
              eliminarModel(props.id);
            }}
          >
            X
          </button>
        ) : (
          ""
        )}
      </form>
    </section>
  );
};

export default ModeloCar;
