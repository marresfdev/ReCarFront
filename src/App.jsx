import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Contact from "./components/Contact";
import Catalogo from "./components/Catalogo";
//import './App.css';  // Asegúrate de usar la ruta correcta según la ubicación del archivo CSS

//import Simulador from "./pages/Simulador";
//import SobreNosotros from "./pages/SobreNosotros";
//import Catalogo from "./pages/Catalogo";

function App() {
  return (
    <>
      {/* Barra de Navegación */}
      <Navbar />

      {/* Secciones de la página */}
      <main>
        <Carousel />
        <Catalogo />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
