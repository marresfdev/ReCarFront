import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About"
import Contact from "./components/Contact"
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
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;