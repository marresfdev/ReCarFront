import React from "react";
import "../styles/About.css"; // Asegúrate de crear este archivo CSS
import recarLogo from "../assets/recarequipo2.jpg";

const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img
              src={props.image || recarLogo } // Puedes poner una imagen predeterminada si no hay una imagen
              className="img-responsive"
              alt="About us"
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Sobre Nosotros</h2>
              <p>
                En Recar Motors, nos dedicamos a ofrecer soluciones accesibles y confiables para la compra de vehículos. Somos una agencia de autos especializada en ventas a crédito, brindando a nuestros clientes la posibilidad de adquirir el auto de sus sueños de manera sencilla y segura.
              </p>
              <p>
                Como orgullosos socios de ANCA, garantizamos la transparencia y profesionalismo en cada una de nuestras transacciones. Nuestro equipo se esfuerza día a día por brindar una atención personalizada que supera las expectativas de nuestros clientes.
              </p>
              <h3>¿Por qué elegirnos?</h3>
              <div className="col-12">
              <ul>
                <li>Financiamiento flexible adaptado a tus necesidades.</li>
                <li>Amplia variedad de vehículos para todos los gustos.</li>
                <li>Somos socios de ANCA, asegurando transacciones confiables.</li>
                <li>Equipo comprometido con la satisfacción del cliente.</li>
                <li>Proceso de compra rápido, sencillo y transparente.</li>
              </ul>
            </div>
            <div className="col-12">
              <ul>
                <li>Asesoramiento personalizado para encontrar el auto ideal.</li>
                <li>Vehículos certificados con garantía de calidad.</li>
                <li>Acceso a promociones exclusivas para nuestros clientes.</li>
                <li>Servicio postventa que te acompaña en cada paso.</li>
                <li>Más de 10 años de experiencia en el sector automotriz.</li>
              </ul>
            </div>    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
