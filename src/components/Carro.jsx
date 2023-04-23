import CarritoContext from "../contexts/CarritoContext"
import React,{useContext, useState, useEffect} from 'react'
import Modelo from "./Modelo"

const Carro = () => {
  const {carrito} = useContext(CarritoContext)
  const [lista, setLista] = useState([])
  useEffect(function(){
    setLista(carrito.items)
  },[carrito])
  
  return (
    <>
    
    {lista != null
        ? (lista.map(function (element, index) {
            return (
              <Modelo key = {index}
                fuente={lista[index]?.url}
                modelo={lista[index]?.modelo}
                especificaciones={lista[index]?.especificaciones}
                precio={lista[index]?.precio}
                id={lista[index]?.id}
                elemento={lista[index]}
              />
            );
          }))
        : ""}
    </>
    
  )
}

export default Carro