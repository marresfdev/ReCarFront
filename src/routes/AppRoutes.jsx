import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Contact from "../components/Contact";
import Catalogo from "../components/Catalogo";
import Simulador from "../components/Simulador";
import DetallesAutoPage from "../pages/DetallesAutoPage";

const AppRoutes = () => {
  return (
    <>
      {/* Barra de Navegación */}
      <Navbar />
      
      {/* Definición de Rutas */}
      <div className="content-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <Catalogo />
                <div className="about-container">
                  <About />
                </div>
                <div className="contact-container">
                  <Simulador />
                </div>
                <div className="contact-container">
                  <Contact />
                </div>
              </>
            }
          />
          <Route path="/auto/:id" element={<DetallesAutoPage />} />
        </Routes>
      </div>
    </>
  );
};

export default AppRoutes;
