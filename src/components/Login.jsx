import React, { useContext, useState } from "react";
import LoginContext from "../contexts/LoginContext";

const Login = () => {
  const { usuario, logeo, logout, esAdmin } = useContext(LoginContext);
  return (
    <>
      {usuario ? (
        <form
          onSubmit={function (e) {
            e.preventDefault();
            logout();
          }}
        >
          <span>
            {usuario.username} - {usuario.roll}
          </span>
          <button>salir</button>
        </form>
      ) : (
        <form
          onSubmit={function (e) {
            e.preventDefault();
            const { elements } = e.target;
            const { username, password } = elements;
            logeo(username.value, password.value);
          }}
        >
          <input type="text" placeholder="nombre" name="username" id="username" />
          <input
            type="text"
            name="password"
            placeholder="contraseña"
            id="password"
          />
          <button>Ingresar</button>
        </form>
      )}
    </>
  );
};

export default Login;
