import React from "react";
import StyleNavBar from "../css/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="nav">
      <Link to="/">
        <img src="" alt="" />
      </Link>
      <Link to="/celulares">celulares</Link>
      <Link to="/computadores">Computadores</Link>
      <Link to="/consolas">Consolas Y Videojuegos</Link>
      <Link to="/audio">Audio y Accesorios</Link>
    </nav>
  );
};

export default NavBar;
