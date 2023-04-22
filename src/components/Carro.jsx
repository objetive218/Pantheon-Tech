import CarritoContext from "../contexts/CarritoContext"
import React,{useContext, useState} from 'react'

const Carro = () => {
  const {carrito} = useContext(CarritoContext)
  const [lista, setLista] = useState(carrito)
  return (
    <h1>{lista}</h1>
  )
}

export default Carro