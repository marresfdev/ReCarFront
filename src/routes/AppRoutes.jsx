import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Contact from "../components/Contact";
import Catalogo from "../components/Catalogo";
import SimuladorPage from "../pages/SimuladorPage";
import DetallesAutoPage from "../pages/DetallesAutoPage";

const AppRoutes = () => {
  const location = useLocation();

  // Verificar si la ruta actual es una de las rutas independientes
  const showNavbar = !(
    location.pathname === "/auto/:id" || location.pathname === "/simulador"
  );

  return (
    <>
      {showNavbar && <Navbar />} {/* Solo mostrar Navbar si no es ruta independiente */}
      <Routes>
        {/* Página principal con secciones dentro de content-container */}
        <Route
          path="/"
          element={
            <div className="content-container">
              <Carousel />
              <section id="catalogo">
                <Catalogo />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </div>
          }
        />

        {/* Rutas independientes, sin content-container */}
        <Route path="/auto/:id" element={<DetallesAutoPage />} />
        <Route path="/simulador" element={<SimuladorPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
