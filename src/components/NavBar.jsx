import React from "react";
import StyleNavBar from "../css/NavBar.module.css";
import { Link } from "react-router-dom";
import LogoPantheon from "../img/logo.svg";

const NavBar = () => {
  return (
    <nav id="nav">
      <Link to="/">
        <img src={LogoPantheon} alt="" />
      </Link>
      <Link to="/celulares">celulares</Link>
      <Link to="/computadores">Computadores</Link>
      <Link to="/consolas">Consolas Y Videojuegos</Link>
      <Link to="/audio">Audio y Accesorios</Link>
      <Link to="/login">Login</Link>
      <Link to="/carrito">carrito</Link>
    </nav>
  );
};

export default NavBar;
