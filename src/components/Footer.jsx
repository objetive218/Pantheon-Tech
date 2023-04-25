import Footerstyle from "../css/Footer.module.css"

import React from 'react'

const Footer = () => {
    return <section className={`${FooterStyle.containerFooter}`}>
        <section className={`${FooterStyle.boxfooter}`}>
            <section className={`${FooterStyle.logo}`}>
                <img src="img/" alt="" />
                <section className={`${FooterStyle.terms}`}>
                    <h3>Misión:</h3>
                    <p>Pantheon Tech es una empresa dedicada a la distribución, comercialización, y
                        venta de equipos y partes de computo, portátiles, videojuegos, consolas, y
                        lo referente con productos tecnológicos.
                    </p>
                    <h3>Visión:</h3>
                    <p>Seremos la principal empresa en importación y distribución de tecnología, ampliaremos nuestra infraestructura
                     a nivel nacional para ofrecer una mejor cobertura y mejorar el servicio al cliente.
                    </p>
                    <section className={`${FooterStyle.boxfooter}`}>
                        <h2>Términos y Condiciones</h2>
                        {!isClicked && (
                            <button onClick={() => setIsClicked(true)}>Ver más</button>
                        )}
                        {isClicked && (
                            <a href="/terminos-y-condiciones">Leer términos y condiciones</a>
                        )}
                    </section>
                    <h2>Redes Sociales</h2>
                    <a href=""><i className="fab fa-facebook"></i> Facebook</a>
                    <a href=""><i className="fab fa-twitter"></i> Twitter</a>
                    <a href=""><i className="fab fa-linkedin"></i> Linkedin</a>
                    <a href=""><i className="fab fa-instagram"></i> Instagram</a>
                    <a href=""><i className="fab fa-envelope"></i> pantheontech@gmail.com</a>
                    <section className={`${FooterStyle.boxcopyright}`}>
                        <hr/>
                        <p>
                            Todos los derechos reservados © 2023 <b>Pantheon Tech</b>
                        </p>
                    </section>
                </section>
            </section>
        </section>
    </section>
    
}


