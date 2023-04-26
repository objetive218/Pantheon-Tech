import React, { useContext, useState, useEffect } from 'react';
import NavBar from './NavBar';
import CatalogoContext from '../contexts/CatalogoContext';

const Computadores = () => {
  const { productos} = useContext(CatalogoContext);
  const comp = catalogo.filter(function (item) {
    return item.categoria == "celulares";
  });
  return (
    <>
    <NavBar/>
    <div>Computadores</div>
    </>
  )
}

export default Computadores