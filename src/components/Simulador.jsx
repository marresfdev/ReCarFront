import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Simulador = () => {
  return (
    <div id="simulador">
        <h1>Simulador de crédito de ReCar Motors</h1>
        <br></br>
    <section
      style={{
        backgroundColor: "#001f3f", // Azul marino
        padding: "50px 50px",
        color: "#ffffff",
        borderRadius: "10px",
      }}
      className="u-clearfix u-section-2"
    >
      <div
        className="container"
        style={{
          maxWidth: "600px",
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
        <form>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Precio del vehiculo
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Plazo 
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Enganche
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter a valid email address"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Tasa de interes
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter a valid email address"
              required
            />
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
            <br></br>
            <br></br>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">
                Resultado
                </label>
                <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Pago y mensualidades"
                required
                ></textarea>
            </div>
            <div className="text-center">
                <br></br>
                <label htmlFor="message" className="form-label">
                    Si gustas conocer tu credito y tasa de interés de manera más exacta haznos envio de tu INE y tu correo y nos pondremos en contacto contigo
                </label>
            </div>
        </form>
      </div>
    </section>
    </div>
  );
};

export default Simulador;
