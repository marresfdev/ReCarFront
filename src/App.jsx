import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Contact from "./components/Contact";
import Catalogo from "./components/Catalogo";
import Simulador from "./components/Simulador"
import './App.css';  // Asegúrate de usar la ruta correcta según la ubicación del archivo CSS

function App() {
  return (
    <>
      {/* Barra de Navegación */}
      <Navbar />

      {/* Secciones de la página */}
      <main>
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

      </main>
    </>
  );
}

export default App;
