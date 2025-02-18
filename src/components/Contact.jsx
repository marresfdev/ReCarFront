import { useState } from "react";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contact.css'; // Asegúrate de tener este archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "../styles/Contact.css"

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name: "+ name);
    console.log("email: "+ email);
    console.log("message: "+ message);

    // Realizar la solicitud POST al backend
    fetch(`http://localhost:8080/api/email?name=${name}&email=${email}&message=${message}`, {
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

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          {/* Parte izquierda: formulario de contacto */}
          <div className="col-md-5">
            <div className="section-title">
              <h1>Contáctanos</h1>
              <br></br>
              <p className="justified-text">
                Si tiene alguna duda, comuníquese con nosotros enviando un correo o llamando a los números que aparecen a la derecha en pantalla, estaremos en contacto lo más pronto posible, gracias.
              </p>
            </div>
            <form name="sentMessage" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      className="form-control"
                      placeholder="Nombre"
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

          {/* Espacio en el centro */}
          <div className="col-md-2"></div>

          {/* Parte derecha: información de contacto y redes sociales */}
          <div className="col-md-5 contact-info">
            <h2><center>Información de contacto</center></h2>
            <br></br>
            <div className="contact-item">
              <p><center>
                <span>
                <i className="fa-solid fa-location-dot"></i>      Av. 5 de Febrero 2121, 76120 Santiago de Querétaro, Querétaro
                </span>
                </center></p>
            </div>
            <div className="contact-item">
              <p>
                <span><center>
                  <i className="fa fa-phone"></i>         +52 442 325 0018
                  </center></span>{" "}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span><center>
                <i className="fa fa-envelope"></i>         gte.ventas@recarmotors.com
                </center></span>{" "}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span><center>
                <i className="fa-brands fa-whatsapp"></i>         +52 442 604 8658
                </center></span>{" "}
              </p>
            </div>

            <div className="social">
              <br></br>
              <h4><center>Visita nuestras redes sociales para estar al tanto de nuestras promociones</center></h4>
              <ul>
                <li>
                  <a href={props.data ? props.data.facebook : "https://www.facebook.com/RecarMotorsQro"}>
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.twitter : "https://www.instagram.com/recarmotorsqueretaro"}>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
