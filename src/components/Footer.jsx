import FooterStyle from "../css/Footer.module.css";
import Logo from "../img/logo.svg";
import { Link } from "react-router-dom";


import React, { useState } from "react";

const Footer = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <section className={`${FooterStyle.containerFooter}`}>
      <section className={`${FooterStyle.boxfooter}`}>
        <picture className={`${FooterStyle.logo}`}>
          <img src={Logo} alt="logo" /> </picture>
          <section className={`${FooterStyle.terms}`}>
            <section className={`${FooterStyle.boxfooter}`}>
            <Link to="/nosotros">
                  ¿Quiénes somos?
                </Link>
              <h2>Términos y Condiciones</h2>
              {!isClicked && (
                <button onClick={() => setIsClicked(!isClicked)}>
                  Ver más
                </button>
              )}
              {isClicked && (
                <Link to="/terminos">
                  Términos y condiciones
                </Link>
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
