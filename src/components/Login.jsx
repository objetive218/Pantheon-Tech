import React, { useContext, useState } from "react";
import LoginContext from "../contexts/LoginContext";
import { Link } from "react-router-dom";
import LoginStyle from "../css/Login.module.css";
import {BsLockFill,BsFillPersonFill} from "react-icons/bs"

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
              <span className={LoginStyle.username}>
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
              <span className={LoginStyle.test}><BsFillPersonFill/>
              <input
                type="text"
                placeholder="nombre"
                name="username"
                id="username"
                />
                </span>
              <span className={LoginStyle.test}><BsLockFill/>
              <input
                type="password"
                name="password"
                placeholder="contraseña"
                id="password"
                />
                </span>
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
