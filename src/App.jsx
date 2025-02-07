import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Contact from "./components/Contact";
import Catalogo from "./components/Catalogo";
import Simulador from "./components/Simulador";
import DetallesAutoPage from "./pages/DetallesAutoPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Barra de Navegación */}
      <Navbar /> {/* Coloca aquí para que esté presente en todas las páginas */}

      {/* Definimos las Rutas */}
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
    </Router>
  );
}

export default App;
