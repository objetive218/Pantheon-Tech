import { Link } from "react-router-dom";
import React from 'react'

const App = () => {
  return (
    
    <>
    <h1>hola</h1>
    <h1>hola</h1>
    <Link to="/">inicio</Link>
    <Link to="/login">Login</Link>
    <Link to="/consolas">consolas</Link>
    <Link to="/celulares">celulares</Link>
    <Link to="/computadores">computadores</Link>
    <Link to="/audio">audio</Link>
    <Link to="/carrito">carrito</Link>
    </>
  )
}

export default App