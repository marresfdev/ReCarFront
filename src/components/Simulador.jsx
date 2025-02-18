import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Importa el ícono de flecha
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";  // Importa el componente Select de react-select

const Simulador = () => {
  const [precio, setPrecio] = useState(""); // Precio como un número
  const [enganche, setEnganche] = useState("");
  const [plazo, setPlazo] = useState("");
  const [tasa, setTasa] = useState("");
  const [resultado, setResultado] = useState("");
  const [vehiculos, setVehiculos] = useState([]); // Estado para almacenar los vehículos
  const [error, setError] = useState(""); // Estado para manejar el mensaje de error
  const [errorEnganche, setErrorEnganche] = useState("");
  const [errorPlazo, setErrorPlazo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/getAllAutos")
      .then((response) => response.json())
      .then((data) => {
        const vehicles = data.map((car) => ({
          value: car.id,
          label: `${car.submarca} ${car.color} ${car.modelo}`,
          precio: car.precio,
        }));
        setVehiculos(vehicles);
      })
      .catch((error) => console.error("Error al obtener los autos:", error));
  }, []);

  const calcularEngancheMinimo = () => {
    /*let porcentaje = 0.1;
    if (precio >= 250000 && precio <= 350000) {
      porcentaje = 0.2;
    } else if (precio > 350000) {
      porcentaje = 0.25;
    }
    */
    return precio;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validación del enganche basado en el precio del vehículo
    const engancheMinimo = parseFloat(calcularEngancheMinimo());
    if (parseFloat(enganche) < engancheMinimo) {
      setErrorEnganche(`El enganche debe ser de al menos ${engancheMinimo}.`);
      return;
    }
  
    // Validación del plazo
    const plazoNumerico = parseInt(plazo, 10);
    if (isNaN(plazoNumerico) || plazoNumerico < 12 || plazoNumerico > 60) {
      setErrorPlazo("El plazo debe ser de entre 12 a 60 meses.");
      return;
    }
  
    // Limpiar errores y continuar
    setErrorEnganche("");
    setErrorPlazo("");
    setResultado("El cálculo de tu crédito se ha realizado con éxito.");
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const handleVehicleChange = (selectedOption) => {
    setPrecio(selectedOption.precio); //precio del vehiculo seleccionado
  };

  return (
    <div id="simulador">
      <br />
      <section
        style={{
          backgroundColor: "#001f3f",
          padding: "50px 50px",
          color: "#ffffff",
          borderRadius: "10px",
          position: "relative",
        }}
        className="u-clearfix u-section-2"
      >
        {/* Botón de regreso */}
        <button
          onClick={handleGoHome}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "#ffffff",
            fontSize: "2rem",
            cursor: "pointer",
            position: "absolute",
            top: "20px",
            left: "20px",
            zIndex: 1,
          }}
          onMouseOver={(e) => (e.target.style.color = "#d1e9ff")}
          onMouseOut={(e) => (e.target.style.color = "#ffffff")}
        >
          <FaArrowLeft />
        </button>

        <h1>Simulador de crédito ReCar Motors</h1>
        <br />
        <div
          className="container-fluid"
          style={{
            backgroundColor: "#5d5555",
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
            <div className="mb-3">
              <label htmlFor="precio" className="form-label">
                Precio del vehículo
              </label>
              <Select
                options={vehiculos}
                onChange={handleVehicleChange} //cambio de vehiculo
                placeholder="Selecciona un vehículo"
                isSearchable
                required
                styles={{
                  singleValue: (provided) => ({
                    ...provided,
                    color: "black", 
                    textAlign: "left",
                  }),
                  option: (provided) => ({
                    ...provided,
                    color: "black",
                  }),
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="enganche" className="form-label">
                Enganche
              </label>
              <input
                type="number"
                className="form-control"
                id="enganche"
                placeholder={`Ingresa el monto sin puntos ni comas (el enganche mínimo para la unidad seleccionada es de ${calcularEngancheMinimo()})`}
                value={enganche}
                onChange={(e) => {
                  const value = e.target.value;
                  setEnganche(value);
                  if (parseFloat(value) >= parseFloat(calcularEngancheMinimo())) {
                    setErrorEnganche("");
                  }
                }}
                required
              />
            </div>

            {errorEnganche && <div className="text-warning">{errorEnganche}</div>}
            <br />

            <div className="mb-3">
              <label htmlFor="plazo" className="form-label">
                Plazo
              </label>
              <input
                type="text"
                className="form-control"
                id="plazo"
                value={plazo}
                //onChange={(e) => setPlazo(e.target.value)}
                onChange={(e) => {
                  const value = e.target.value;
                  setPlazo(value);
                  if (parseFloat(value) >= 12 || parseFloat(value) <= 60) {
                    setErrorPlazo("");
                  }
                }}
                placeholder="Ingresa el plazo en meses, debe estar entre un rango de 12 y 60 meses"
                required
              />
            </div>

            {errorPlazo && <div className="text-warning">{errorPlazo}</div>}
            <br />

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

            <div className="mb-3">
              <label htmlFor="resultado" className="form-label">
                Resultado
              </label>
              <br />
              <label htmlFor="resultado" className="text-warning">
                {resultado}
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="resultado" className="form-label">
                Si quieres saber tu tasa de interes más exacta, enviamos una copia de tu INE y un correo para
                revisar tu buro de crédito y nos pondremos en contacto contigo lo más pronto posible.
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

  Mal: 30%
  
*/}