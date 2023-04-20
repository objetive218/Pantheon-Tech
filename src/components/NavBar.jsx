import React from "react";
import StyleNavBar from "../css/NavBar.module.css";
import { Link } from "react-router-dom";
import LogoPantheon from "../img/logo.svg";
import CelularesTitle from"../img/celulares.svg";
import ComputadorTitle from"../img/computadores.svg";
import VideojuegoTitle from"../img/videojuegos.svg";
import AudioTitle from"../img/audio.svg";
import {BsFillPersonFill, TiShoppingCart} from 'react-icons/Bs, react-icons/Ti';


const NavBar = () => {
  return (
    <nav className={StyleNavBar.header}>
      <Link to="/">
        <img src={LogoPantheon} alt="" />
      </Link>
      <Link to="/celulares">
        <img src={CelularesTitle} alt="celulares" />
      </Link>
      <Link to="/computadores">
        <img src={ComputadorTitle} alt="computadores" />
      </Link>
      <Link to="/consolas">
        <img src={VideojuegoTitle} alt="videojuegos" />
      </Link>
      <Link to="/audio">
        <img src={AudioTitle} alt="audio" />
      </Link>
      <Link to="/buscar">
      </Link>
      <Link className={StyleNavBar.logo} to="/login"><BsFillPersonFill/></Link>
      <Link className={StyleNavBar.carrito} to="/carrito"><TiShoppingCart/></Link>
    </nav>
  );
};

export default NavBar;
