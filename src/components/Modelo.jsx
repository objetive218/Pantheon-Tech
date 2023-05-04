import React, { useContext, useState , useEffect} from "react";
import modeloStyle from "../css/Modelo.module.css";
import CarritoContext from "../contexts/CarritoContext";
import Borde from "../img/borde.svg";
import { BsCart2 } from "react-icons/bs";
import numeral from "numeral";
import LoginContext from "../contexts/LoginContext";
import CatalogoContext from "../contexts/CatalogoContext";

const Modelo = (props) => {
  const { eliminarModel, addModel } = useContext(CarritoContext);
  const { borrar } = useContext(CatalogoContext);
  const { esAdmin } = useContext(LoginContext);
  const [provador, setProvador] = useState(null)
  useEffect(function(){
    setProvador(esAdmin)
  },[esAdmin])
  return (
    <>
      <section className={modeloStyle.modelo}>
        <img
          className={modeloStyle.bordecito}
          src={Borde}
          alt="BordeArticulo"
        />
        <section id={modeloStyle.imgtl}>
          <img
            className={modeloStyle.image}
            src={props.fuente}
            alt="imagen modelo"
          />
          <h2 className={modeloStyle.nombre}>{props.modelo}</h2>
        </section>
        <p className={modeloStyle.caracteristica}>{props.especificaciones}</p>
        <section id={modeloStyle.cajita}>
          <p className={modeloStyle.valor}>{`$ ${numeral(props.precio).format(
            "0,0"
          )}`}</p>
          <form action="#">
            <button
              className={modeloStyle.carrito}
              type="button"
              onClick={function () {
                addModel(props.elemento, 1);
              }}
            >
              <BsCart2 />
            </button>
          </form>
        </section>
        <form className={provador ? "": modeloStyle.active }>
          <button
            type="button"
            onClick={function () {
              borrar(props.id);
            }}
          >
            <p className={modeloStyle.eliminar} >x</p>
          </button>
        </form>
      </section>
    </>
  );
};

export default Modelo;
