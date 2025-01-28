import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contact.css'; // Asegúrate de tener este archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
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
    console.log(name, email, message);
    
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
    <div id="contact">
      <div className="container">
        <div className="row">
        <div className="row">
          {/* Parte izquierda: formulario de contacto */}
          <div className="col-md-5">
            <div className="section-title">
              <h2>Contáctanos</h2>
              <p>
                Si tiene alguna duda, comuniquese con nosotros enviando un correo y estaremos en contacto lo más 
                pronto posible, gracias.
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
                      className="form-control"
                      placeholder="Name"
                      required
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
                      placeholder="Email"
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
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-custom btn-lg">
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Espacio en el centro */}
          <div className="col-md-2"></div>

          {/* Parte derecha: información de contacto y redes sociales */}
          <div className="col-md-5 contact-info">
            <h2></h2>
            <h2><center>Información de contacto</center></h2>
            <br></br>
            <div className="contact-item">
              <p><center>
                <span>
                  <i className="fa fa-map-marker"></i>      Av. 5 de Febrero 2121, 76120 Santiago de Querétaro, Querétaro
                </span>
                </center></p>
            </div>
            <div className="contact-item">
              <p>
                <span><center>
                  <i className="fa fa-phone"></i>         Phone
                  </center></span>{" "}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span><center>
                <i className="fa fa-envelope"></i>         Email
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
    </div>
  );
};

export default Contact;
