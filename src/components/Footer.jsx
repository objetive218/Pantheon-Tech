import FooterStyle from "../css/Footer.module.css";
import Logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import {FaEnvelope} from 'react-icons/fa'


import React, { useState } from "react";

const Footer = () => {
  return(
      <footer id={`${FooterStyle.footerMain}`}>
        <picture id={`${FooterStyle.footerLogo}`}>
          <img src={Logo} alt="logo" /> </picture>
            <section id={`${FooterStyle.copyright}`}>
            <h3>Contacto</h3>
            <a href="mailto:pantheontech@gmail.com" target="_blank">
            <FaEnvelope/>
            pantheontech@gmail.com
            </a>
              <p>
                Todos los derechos reservados © 2023 <b>Pantheon Tech</b>
              </p>
            </section>
            <nav id={`${FooterStyle.footerLinks}`}>
            <Link to="/nosotros">
            ¿Quiénes somos?
            </Link>
            <Link to="/terminos">
            Términos y condiciones
            </Link>
            </nav>
        </footer>
  );
};

export default Footer;
