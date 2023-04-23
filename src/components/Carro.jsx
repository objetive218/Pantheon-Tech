import CarritoContext from "../contexts/CarritoContext";
import React, { useContext, useState, useEffect } from "react";
import Modelo from "./Modelo";
import ModeloCar from "./ModeloCar";
import CarroStyle from "../css/Carro.module.css";
import NavBar from "./NavBar";

const Carro = () => {
  const { carrito } = useContext(CarritoContext);
  const [lista, setLista] = useState([]);
  const [total , setTotal] = useState(1)
  const [complete, setComplete] = useState(1)
  useEffect(
    function () {
      setLista(carrito.items);
      setTotal(carrito.subTotal)
      setComplete(carrito.subTotal + 40000)
    },
    [carrito]
  );

  return (
    <>
      <NavBar />
      <h1>Carrito De Compras</h1>
      <section className={CarroStyle.forma}>
        {lista != null
          ? lista.map(function (element, index) {
              return (
                <ModeloCar
                  key={index}
                  url={lista[index]?.url}
                  modelo={lista[index]?.modelo}
                  precio={lista[index]?.precio}
                  cantidad={lista[index]?.cantidad}
                  id={lista[index]?.id}
                  elemento={lista[index]}
                />
              );
            })
          : ""}
      </section >
      <section className={CarroStyle.checkout}>
        <h2 className={CarroStyle.tituloCar}>Total del carrito</h2>
        <p > {`Subtotal: ${total}`}</p>
        <p > Envio 40000</p>
        <p > {`total: ${complete}`}</p>
        <form className={CarroStyle.botton1} >
          <button>Finalizar compra</button>
        </form>
      </section>
    </>
  );
};

export default Carro;
