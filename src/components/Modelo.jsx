import React, { useContext } from "react";
import modeloStyle from "../css/Modelo.module.css";
import CarritoContext from "../contexts/CarritoContext";
import Borde from "../img/borde.svg"
import { BsCart2 } from "react-icons/bs";
import numeral from "numeral";

const Modelo = (props) => {
  const { eliminarModel, addModel } = useContext(CarritoContext);
  return (
    <>
      <section className={modeloStyle.modelo}>
        <img className={modeloStyle.bordecito} src={Borde} alt="BordeArticulo"/>
        <img
          className={modeloStyle.image}
          src={props.fuente}
          alt="imagen modelo"
        />
        <h2 className={modeloStyle.nombre} >{props.modelo}</h2>
        <p className={modeloStyle.caracteristica}>{props.especificaciones}</p>
        <p className={modeloStyle.valor}>{`$ ${numeral(props.precio).format('0,0')}`}</p>
        <form action="#">
          <button className={modeloStyle.carrito}
            type="button"
            onClick={function () {
              addModel(props.elemento, 1);
            }}
          >
          <BsCart2 />
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
