import React from 'react'
import NavBar from '../css/NavBar.css'

const NavBar = () => {
  return (
    class NavBar extends React.Component {
        render() {
          return (
            <nav id='nav'>
              <ul>
                <li><img src="" alt="" /></li>
                <li><a href="">Inicio</a></li>
                <li><a href=".//Celulares.jsx">celulares</a></li>
                <li><a href=".//Computadores.jsx">Computadores</a></li>
                <li><a href=".//Consolas.jsx">Consolas Y Videojuegos</a></li>
                <li><a href=".//Audio.jsx">Audio y Accesorios</a></li>
              </ul>
            </nav>
          );
        }
      }
  )
}

export default NavBar