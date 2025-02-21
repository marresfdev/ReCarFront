import { useState, useEffect } from "react"; 
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SimuForms.css'; // Asegúrate de tener este archivo CSS

const initialState = {
  name: "",
  email: "",
  message: "",
  selectedCar: "",
};

const SimuForms = () => {
  const [{ name, email, message, selectedCar }, setState] = useState(initialState);
  const [vehicles, setVehicles] = useState([]);
  const [selectedCarPrice, setSelectedCarPrice] = useState("");

  // Obtener vehículos desde la API
  useEffect(() => {
    fetch("http://localhost:8080/api/getAllAutos")
      .then((response) => response.json())
      .then((data) => {
        const cars = data.map((car) => ({
          value: car.id,
          label: `${car.submarca} ${car.color} ${car.modelo}`,
          price: car.precio, // Agregar precio
        }));
        setVehicles(cars);
      })
      .catch((error) => console.error("Error al obtener los autos:", error));
  }, []);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "selectedCar") {
      const selectedCar = vehicles.find((car) => car.value === Number(value));
      setSelectedCarPrice(selectedCar ? selectedCar.price : ""); // Actualizar el precio
    }
  
    setState((prevState) => ({ ...prevState, [name]: value }));
  };  

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name: " + name);
    console.log("email: " + email);
    console.log("message: " + message);
    console.log("selectedCar: " + selectedCar);

    // Realizar la solicitud POST al backend
    fetch(`http://localhost:8080/api/email?name=${name}&email=${email}&message=${message}&car=${selectedCar}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Correo enviado exitosamente");
        clearState(); // Limpiar el formulario
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Hubo un error al enviar el correo");
      });
  };

  const calcularEnganche = () => {
    /*let porcentaje = 0.1;
    if (precio >= 250000 && precio <= 350000) {
      porcentaje = 0.2;
    } else if (precio > 350000) {
      porcentaje = 0.25;
    }
    */
    return precio;
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <br />
          <div className="col-md-10">
            <h2>Simulador de crédito de ReCar Motors</h2>
            <div className="form-container">
              <div className="row">
                {/* Primer formulario de contacto */}
                <div className="col-md-3 formulario1">
                  <div className="section-title-form1">
                    <h3>¿Quieres saber tu crédito exacto?</h3>
                    <br />
                    <p className="justified-text">
                      Envianos una foto de tu INE para revisar tu buró de crédito y nos pondremos en contacto contigo lo antes posible.
                    </p>
                  </div>
                  <form name="sentMessage" onSubmit={handleSubmit}>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            className="form-control"
                            placeholder="Correo o Número"
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        value={message}
                        className="form-control"
                        rows="4"
                        placeholder="Mensaje"
                        required
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-customContact btn-lg">
                      Enviar mensaje
                    </button>
                  </form>
                </div>

                {/* Segundo formulario de contacto */}
                <div className="col-md-9 formulario2">
                  <div className="section-title-form2">
                    <h1>Contáctanos</h1>
                    <br />
                    <p className="justified-text">
                      Si tienes alguna pregunta, por favor, completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible.
                    </p>
                  </div>
                  <form name="sentMessage" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Vehiculo
                        </label>
                          {/* Lista desplegable para seleccionar el vehículo */}
                          <select
                            id="carro"
                            name="selectedCar"
                            value={selectedCar}
                            className="form-control"
                            required
                            onChange={handleChange}
                          >
                            <option value="">Selecciona un vehículo</option>
                            {vehicles.map((car) => (
                              <option key={car.value} value={car.value}>
                                {car.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Enganche
                        </label>
                        <input
                            type="text"
                            id="enganche"
                            name="enganche"
                            className="form-control"
                            placeholder={selectedCarPrice ? `Enganche mínimo de: ${selectedCarPrice}` : "Enganche"}
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="plazo"
                            name="plazo"
                            value={name}
                            className="form-control"
                            placeholder="Plazo"
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            className="form-control"
                            placeholder="Correo o Número"
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-customContact btn-lg">
                      Calcular
                    </button>
                    <br />
                    <label className="credito">CREDITO APROXIMADO: </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimuForms;
