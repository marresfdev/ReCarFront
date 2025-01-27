import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css'; // Archivo de estilos
import logo from "../assets/recarlogo.png"; // Ruta al logo de la empresa
import { FaHome, FaCar, FaEnvelope, FaCalculator } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" />
          ENLAZANDO TUS CAMINOS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <a className="nav-link" href="#catalogo">
                Catálogo
              </a>
              <FaCar className="nav-icon" />
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Sobre nosotros
              </a>
              <FaHome className="nav-icon" />
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contáctanos
              </a>
              <FaEnvelope className="nav-icon" />
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Simulador de crédito
              </a>
              <FaCalculator className="nav-icon" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
