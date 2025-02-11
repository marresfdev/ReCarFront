import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Simulador = () => {
  const [precio, setPrecio] = useState("");
  const [enganche, setEnganche] = useState("");
  const [plazo, setPlazo] = useState("");
  const [tasa, setTasa] = useState("");
  const [resultado, setResultado] = useState("");

  // Calcula el 10% del precio del vehículo
  const calcularEngancheMinimo = () => {
    return (precio * 0.1).toFixed(2);
  };

  // Función para manejar el envío del formulario (simulación)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí agregarías la lógica para calcular el crédito
    setResultado("El cálculo de tu crédito se ha realizado con éxito.");
  };

  return (
    <div id="simulador" style={{ width: "100%", padding: "0 15px" }}>
      <h1>Simulador de crédito de ReCar Motors</h1>
      <br />
      <section
        style={{
          backgroundColor: "#001f3f", // Azul marino
          padding: "50px 15px", // Ajustar padding
          color: "#ffffff",
          borderRadius: "10px",
        }}
        className="u-clearfix u-section-2"
      >
        <div
          className="container"
          style={{
            width: "100%", // Hacer que el contenedor ocupe todo el ancho
            maxWidth: "none", // Eliminar el maxWidth
            backgroundColor: "#5d5555", // Azul un poco más claro
            borderRadius: "10px",
            padding: "30px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2
            className="text-center"
            style={{
              fontSize: "1.8rem",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            Consulta tu crédito
          </h2>
          <p className="text-center" style={{ marginBottom: "30px" }}>
            <strong>¿No sabes cuál será tu pago mensual aproximado? ¡Consúltalo aquí!</strong>
          </p>
          <form onSubmit={handleSubmit}>
            {/* Precio del vehículo */}
            <div className="mb-3">
              <label htmlFor="precio" className="form-label">
                Precio del vehículo
              </label>
              <input
                type="number"
                className="form-control"
                id="precio"
                placeholder="Ingresa el precio del vehículo"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                required
              />
            </div>

            {/* Enganche */}
            <div className="mb-3">
              <label htmlFor="enganche" className="form-label">
                Enganche (mínimo del 10%)
              </label>
              <input
                type="number"
                className="form-control"
                id="enganche"
                placeholder={`Enganche mínimo de ${calcularEngancheMinimo()}`}
                value={enganche}
                onChange={(e) => setEnganche(e.target.value)}
                min={calcularEngancheMinimo()} // Establece el mínimo como el 10% del precio
                required
              />
            </div>

            {/* Plazo */}
            <div className="mb-3">
              <label htmlFor="plazo" className="form-label">
                Plazo
              </label>
              <input
                type="text"
                className="form-control"
                id="plazo"
                value={plazo}
                onChange={(e) => setPlazo(e.target.value)}
                placeholder="Ingresa el plazo en meses"
                required
              />
            </div>

            {/* Tasa de interés */}
            <div className="mb-3">
              <label htmlFor="tasa" className="form-label">
                Situación en buro de crédito
              </label>
              <select
                id="tasa"
                className="form-control"
                value={tasa}
                onChange={(e) => setTasa(e.target.value)}
                required
              >
                <option value="">Selecciona tu situación</option>
                <option value="no_historial">No tengo historial</option>
                <option value="bien">Bien</option>
                <option value="regular">Regular</option>
                <option value="mal">Mal</option>
              </select>
            </div>
            <br></br>
            <button
              type="submit"
              className="btn btn-light"
              style={{
                backgroundColor: "#f0f8ff",
                color: "#001f3f",
                padding: "10px 20px",
                fontSize: "1rem",
                borderRadius: "5px",
                fontWeight: "bold",
                border: "none",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#d1e9ff")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#f0f8ff")}
            >
              Calcular
            </button>
            <br />
            <br />
            {/* Resultado */}
            <div className="mb-3">
              <label htmlFor="resultado" className="form-label">
                Resultado
              </label>
              <br />
              <label htmlFor="resultado" className="form-label">
                {resultado}
              </label>
            </div>
            <br />
            {/* INE */}
            <div className="mb-3">
              <label htmlFor="resultado" className="form-label">
                Si quieres saber tu tasa de interes más exacta, enviamos una copia de tu INE y un correo para
                revisar tu buro de crédito y nos pondremos en contacto contigo lo más pronto posible.
              </label>
              <br />
              <label htmlFor="resultado" className="form-label">
                {resultado}
              </label>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Simulador;



{/*
  anuales

  Sin: 16.99% personas sin historial

  Bien: 12.99% 

  Regular: 17.99%

  Mal: 30%
  
  
  */}