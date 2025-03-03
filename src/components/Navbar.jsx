import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css'; // Archivo de estilos
import logo from "../assets/recarlogo.png"; // Ruta al logo de la empresa
import { FaHome, FaCar, FaEnvelope, FaCalculator, FaPhone } from "react-icons/fa";

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
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-3">
            <li className="nav-item">
              <a className="nav-link" href="#catalogo">
              <FaCar className="nav-icon" />
                <br />
              Catálogo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
              <FaHome className="nav-icon" />
              <br />
              Sobre nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/simulador" target="_blank" rel="noopener noreferrer">
              <FaCalculator className="nav-icon" />
              <br />
              Simulador de crédito
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
              <FaEnvelope className="nav-icon" />
              <br />
              Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
