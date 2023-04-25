import FooterStyle from "../css/Footer.module.css";
import Logo from "../img/logo.svg"


import React, { useState } from "react";

const Footer = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <section className={`${FooterStyle.containerFooter}`}>
      <section className={`${FooterStyle.boxfooter}`}>
        <picture className={`${FooterStyle.logo}`}>
          <img src={Logo} alt="logo" /> </picture>
          <section className={`${FooterStyle.terms}`}>
            <h3>Misión:</h3>
            <p>
              Pantheon Tech es una empresa dedicada a la distribución,
              comercialización, y venta de equipos y partes de computo,
              portátiles, videojuegos, consolas, y lo referente con productos
              tecnológicos.
            </p>
            <h3>Visión:</h3>
            <p>
              Seremos la principal empresa en importación y distribución de
              tecnología, ampliaremos nuestra infraestructura a nivel nacional
              para ofrecer una mejor cobertura y mejorar el servicio al cliente.
            </p>
            <section className={`${FooterStyle.boxfooter}`}>
              <h2>Términos y Condiciones</h2>
              {!isClicked && (
                <button onClick={() => setIsClicked(!isClicked)}>
                  Ver más
                </button>
              )}
              {isClicked && (
                <a href="/terminos-y-condiciones">
                  Leer términos y condiciones
                </a>
              )}
            </section>
            <h2>Contacto</h2>
            <a href="">
              <i className="fab fa-envelope"></i> pantheontech@gmail.com
            </a>
            <section className={`${FooterStyle.boxcopyright}`}>
              <hr />
              <p>
                Todos los derechos reservados © 2023 <b>Pantheon Tech</b>
              </p>
            </section>
          </section>
        </section>
      </section>
  );
};

export default Footer;
