import React from 'react'

const Login = () => {
  return (
    <form action="#">
      <input type="text" placeholder='nombre' name="usuario" id="usuario" />
      <input type="text" name='password' placeholder='contraseña' id='password' />
    </form>
  )
}

export default Login