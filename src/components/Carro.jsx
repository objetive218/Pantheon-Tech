import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CarritoContext from "../contexts/CarritoContext";
import LoginContext from "../contexts/LoginContext";
import ModeloCar from "./ModeloCar";
import CarroStyle from "../css/Carro.module.css";
import NavBar from "./NavBar";
import numeral from "numeral";

const Carro = () => {
  const { carrito } = useContext(CarritoContext);
  const { usuario, logeo } = useContext(LoginContext);
  const [lista, setLista] = useState([]);
  const [total, setTotal] = useState(0);
  const [complete, setComplete] = useState(0);
  const navigate = useNavigate();

  useEffect(
    function () {
      setLista(carrito.items);
      setTotal(carrito.subTotal);
      if (carrito.subTotal == 0) {
        setComplete(carrito.subTotal);
      } else {
        setComplete(carrito.subTotal + 40000);
      }
    },
    [carrito]
  );
  const handleFinalizarCompra = function (e) {
    e.preventDefault();
    if (usuario == null) {
      alert("Inicia sesion antes de continuar");
      navigate("/login");
    }
  };

  return (
    <>
      <NavBar />
      <h1 className={CarroStyle.title}>Carrito De Compras</h1>
      <section className={CarroStyle.all}>
        <article className={CarroStyle.forma}>
          {lista.length > 0 ? (
            lista.map(function (element, index) {
              return (
                <ModeloCar
                  key={index}
                  url={lista[index]?.url}
                  modelo={lista[index]?.modelo}
                  precio={`$ ${numeral(lista[index]?.precio).format(
                    "0,0"
                  )} COP`}
                  cantidad={lista[index]?.cantidad}
                  id={lista[index]?.id}
                  elemento={lista[index]}
                />
              );
            })
          ) : (
            <h2 className={CarroStyle.vacio}>Tu carrito esta vacío</h2>
          )}
        </article>
        <article
          className={carrito.items.length == 0 ? "" : CarroStyle.checkout}
        >
          {carrito.items.length == 0 ? (
            ""
          ) : (
            <>
              <h2 className={CarroStyle.tituloCar}>Total del carrito</h2>
              <p> {`Subtotal: ${numeral(total).format("0,0")}`}</p>
              <p> {carrito.subTotal == 0 ? "Envio 0" : "Envio 40,000"}</p>
              <p> {`total: ${numeral(complete).format("0,0")}`}</p>
              <form onSubmit={handleFinalizarCompra}>
                <button className={CarroStyle.botton1}>Finalizar compra</button>
              </form>
            </>
          )}
        </article>
      </section>
    </>
  );
};

export default Carro;
