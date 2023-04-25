import React, { useContext } from "react";
import modeloStyle from "../css/ModeloBuscar.module.css";
import CarritoContext from "../contexts/CarritoContext";
import Borde from "../img/borde.svg"

const ModeloBuscar = (props) => {
  const { eliminarModel, addModel } = useContext(CarritoContext);
  return (
    <>
      <section >
        <img className={modeloStyle.bordecito} src={Borde} alt="BordeArticulo"/>
        <img
          className={modeloStyle.image}
          src={props.fuente}
          alt="imagen modelo"
        />
        <h2 className={modeloStyle.nombre} >{props.modelo}</h2>
        <p className={modeloStyle.caracteristica}>{props.especificaciones}</p>
        <p className={modeloStyle.valor}>{props.precio}</p>
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
