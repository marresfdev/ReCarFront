import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Contact from "./components/Contact";
import Catalogo from "./components/Catalogo";
import Simulador from "./components/Simulador";
import AutoDetalle from "./components/AutoDetalle";  // Asegúrate de importar AutoDetalle
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';  // Asegúrate de usar la ruta correcta según la ubicación del archivo CSS

function App() {
  return (
    <Router>
      {/* Barra de Navegación */}
      <Navbar />

      {/* Definimos las Rutas */}
      <Routes>
        <Route path="/" element={<><Carousel /><Catalogo /></>} />
        <Route path="/auto/:id" element={<AutoDetalle />} />
      </Routes>

      {/* Secciones de la página */}
      <main>
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
    </Router>
  );
}

export default App;
