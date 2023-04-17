import React, {useContext} from "react";
import CarritoContext from "../contexts/CarritoContext";

const Modelo = (fuente, modelo, especificaciones, precio) => {
  const {carrito} = useContext(CarritoContext);
  return ( <>
  <img src={fuente} alt="imagen modelo" />
  <h2>{modelo}</h2>
  <p>{especificaciones}</p>
  <p>{precio}</p>
  <button >carrito</button>
</>
);}
    

export default Modelo;
