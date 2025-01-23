import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
//import "../styles/Contacto.css"; // Importa los estilos

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
// Estado inicial para el formulario
const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contacto = () => {
  // Estado para manejar los datos del formulario
  const [{ name, email, message }, setState] = useState(initialState);

  // Función para manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Función para limpiar el estado después de enviar el formulario
  const clearState = () => setState({ ...initialState });

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    // Reemplaza con tu propio Service ID, Template ID y Public Key de EmailJS
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contacto-container">
      <section id="contacto" className="section">
        <div className="container">
          <h2>Contacto</h2>
          <p>¡Estamos aquí para ayudarte! Contáctanos en el siguiente formulario.</p>

          <div className="row">
            {/* Formulario en el 60% del ancho en pantallas grandes */}
            <div className="col-md-8">
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Tu Nombre"
                        required
                        value={name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Tu Correo Electrónico"
                        required
                        value={email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Escribe tu mensaje"
                    required
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Información de Contacto en el 35% del ancho en pantallas grandes */}
            <div className="col-md-10 contacto-info">
              <h3>Información de Contacto</h3>
              <p>
                <span><i className="fa fa-map-marker"></i> Dirección:</span>
                {" "}Dirección de la empresa
              </p>
              <p>
                <span><i className="fa fa-phone"></i> Teléfono:</span>
                {" "}123-456-7890
              </p>
              <p className="email-info">
                <span><i className="fa fa-envelope-o"></i> Correo Electrónico:</span>
                {" "}info@empresa.com
              </p>
              <div className="social">
                <ul>
                  <li>
                    <a href="/">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
