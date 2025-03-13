import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import logo from "../assets/recarlogo.png";
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

  // Verificar si la ruta actual es AutoDetalle
  const isAutoDetalle = location.pathname.startsWith("/auto/");

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <span className="brand-text">ENLAZANDO TUS CAMINOS</span>
        </Link>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
          {!isAutoDetalle && (
            <ul className="navbar-nav d-flex gap-4">
              <li className="nav-item">
                <a className="nav-link" href="#catalogo">
                  <FaCar className="nav-icon" />
                  <span>Catálogo</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  <FaHome className="nav-icon" />
                  <span>Sobre nosotros</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <FaEnvelope className="nav-icon" />
                  <span>Contáctanos</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/simulador" target="_blank" rel="noopener noreferrer">
                  <FaCalculator className="nav-icon" />
                  <span>Simulador</span>
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
