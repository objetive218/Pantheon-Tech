import React, { useContext, useState } from "react";
import LoginContext from "../contexts/LoginContext";
import Formulario from "./Formulario";
import { Link } from "react-router-dom";
import LoginStyle from "../css/Login.module.css";

const Login = () => {
  const { usuario, logeo, logout, esAdmin } = useContext(LoginContext);
  return (
    <>
      <section  className={LoginStyle.all}>
        
          {usuario ? (
            <form
              className={LoginStyle.form}
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
              className={LoginStyle.form}
              onSubmit={function (e) {
                e.preventDefault();
                const { elements } = e.target;
                const { username, password } = elements;
                logeo(username.value, password.value);
              }}
            >
              <input
                type="text"
                placeholder="nombre"
                name="username"
                id="username"
              />
              <input
                type="password"
                name="password"
                placeholder="contraseña"
                id="password"
              />
              <button>Ingresar</button>
            </form>
          )}
          <Link to="/">
        <h2 className={LoginStyle.link}>Regresar</h2>
      </Link>
          {esAdmin() ? (
            <Link to="/formulario">Agregar un nuevo producto</Link>
          ) : (
            ""
          )}
      </section>
    </>
  );
};

export default Login;
