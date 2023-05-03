import React,{useContext} from "react";
import StyleNavBar from "../css/NavBar.module.css";
import { Link } from "react-router-dom";
import LogoPantheon from "../img/logo.svg";
import CelularesTitle from "../img/celulares.svg";
import ComputadorTitle from "../img/computadores.svg";
import VideojuegoTitle from "../img/videojuegos.svg";
import AudioTitle from "../img/audio.svg";
import { BsFillPersonFill, BsCart2, BsFillGearFill} from "react-icons/bs";
import Buscador from "./Buscador";
import LoginContext from "../contexts/LoginContext";
import CarritoContext from "../contexts/CarritoContext";

const NavBar = () => {
  const {usuario} = useContext(LoginContext)
  const {carrito} = useContext(CarritoContext)
  return (
    <nav className={StyleNavBar.header}>
      <Link to="/">
        <img src={LogoPantheon} alt="" />
      </Link>
      <Link className={StyleNavBar.celulares} to="/celulares">
        <img src={CelularesTitle} alt="celulares" />
      </Link>
      <Link className={StyleNavBar.computadores} to="/computadores">
        <img src={ComputadorTitle} alt="computadores" />
      </Link>
      <Link className={StyleNavBar.consolas} to="/consolas">
        <img src={VideojuegoTitle} alt="videojuegos" />
      </Link>
      <Link className={StyleNavBar.audio} to="/audio">
        <img src={AudioTitle} alt="audio" />
      </Link>
      <Buscador className={StyleNavBar.buscar}/>
      <Link className={StyleNavBar.logo} to="/login">
        <BsFillPersonFill /> {usuario != null ?<span className={StyleNavBar.usuario}>{usuario.username} {usuario.roll== "administrador"?<BsFillGearFill/>: ""} </span>  : ""}
      </Link>
      <Link className={StyleNavBar.carrito} to="/carro">
        {carrito.items.length < 1 ?  "" : <h2 className={StyleNavBar.texto}>{carrito.items.length}</h2>}
        <BsCart2 />
      </Link>
    </nav>
  );
};

export default NavBar;
