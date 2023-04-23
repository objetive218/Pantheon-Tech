import CarritoContext from "../contexts/CarritoContext"
import React,{useContext, useState, useEffect} from 'react'
import Modelo from "./Modelo"
import ModeloCar from "./ModeloCar"
import CarroStyle from "../css/Carro.module.css"
import NavBar from "./NavBar"

const Carro = () => {
  const {carrito} = useContext(CarritoContext)
  const [lista, setLista] = useState([])
  useEffect(function(){
    setLista(carrito.items)
  },[carrito])
  
  return (
    <>
    <NavBar/>
    <h1>Carrito De Compras</h1>
    <section className={CarroStyle.forma}>
    {lista != null
        ? (lista.map(function (element, index) {
          return (
            <ModeloCar key = {index} 
            url={lista[index]?.url}
            modelo={lista[index]?.modelo}
            precio={lista[index]?.precio}
            cantidad={lista[index]?.cantidad}
            id={lista[index]?.id}
            elemento={lista[index]}
            />
            );
          }))
          : ""}
          </section>
    </>
    
  )
}

export default Carro