import React from "react";
import Modelo from "./Modelo";
import { catalogo } from "../data/catalogo";

const Celulares = () => {
  const cel = catalogo.find(function (element) {
    return element.categoria == "celulares";
  });
  return (
    <>
      <Modelo />
    </>
  );
};

export default Celulares;
