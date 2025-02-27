import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css'; // Archivo de estilos
import logo from "../assets/recarlogo.png"; // Ruta al logo de la empresa
import { FaHome, FaCar, FaEnvelope, FaCalculator } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" />
          ENLAZANDO TUS CAMINOS
        </Link>
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
              <br />
                <FaCar className="nav-icon" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
              Sobre nosotros
              <br />
                <FaHome className="nav-icon" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/simulador" target="_blank" rel="noopener noreferrer">
              Simulador de crédito
              <br />
                <FaCalculator className="nav-icon" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
              Contáctanos
              <br />
                <FaEnvelope className="nav-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
