import React from "react";
import "../styles/About.css"; // Asegúrate de que este archivo CSS esté bien vinculado
import recarLogo from "../assets/recarequipo2.jpg";

const About = (props) => {
  return (
    <div id="about">
      {/* Columna del texto */}
      <h1>Sobre nosotros</h1>
      <div className="quienes-somos-container">
        <div className="quienes-somos-left">
          <p>
            En Recar Motors, nos dedicamos a ofrecer soluciones accesibles y confiables para la compra de vehículos. Somos una agencia de autos especializada en ventas a crédito, brindando a nuestros clientes la posibilidad de adquirir el auto de sus sueños de manera sencilla y segura.
          </p>
        </div>
        <div className="quienes-somos-right">
          <p>
            Como orgullosos socios de ANCA, garantizamos la transparencia y profesionalismo en cada una de nuestras transacciones. Nuestro equipo se esfuerza día a día por brindar una atención personalizada que supera las expectativas de nuestros clientes.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
          <h2>¿Por qué elegirnos?</h2>
          </div>
          <div className="card-back">
            <ul>
              <li>Financiamiento flexible adaptado a tus necesidades.</li>
              <li>Amplia variedad de vehículos para todos los gustos.</li>
              <li>Garantía en transmisión y motor.</li>
              <li>Somos socios de ANCA, asegurando transacciones confiables.</li>
              <li>Equipo comprometido con la satisfacción del cliente.</li>
              <li>Asesoramiento personalizado para encontrar el auto ideal.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
