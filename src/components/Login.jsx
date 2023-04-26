import React,{useContext,useState} from 'react'
import LoginContext from '../contexts/LoginContext'


const Login = () => {
  const {usuario, logeo, logout, esAdmin} = useContext(LoginContext)
  return (
    <form action="#">
      <input type="text" placeholder='nombre' name="usuario" id="usuario" />
      <input type="text" name='password' placeholder='contraseña' id='password' />
    </form>
  )
}

export default Login