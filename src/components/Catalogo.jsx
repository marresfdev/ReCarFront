import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";  // Importa Link para navegación
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Catalogo.css';

const Catalogo = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/getAllAutos")
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los autos:", error);
      });
  }, []);

  return (
    <div id="catalogo">
      <div className="container-fluid mt-5">
        <div className="row">
          <h1><center>Nuestros autos</center></h1>
          {cars.map((car) => (
            <div key={car.id} className="col-md-3 mb-4">
              <div className="card">
                <img src={car.imagen} alt={`${car.submarca} ${car.modelo} ${car.color}`} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">
                    {car.submarca} {car.color} {car.modelo}
                  </h5>
                  <p className="card-text">
                    Precio: ${car.precio.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                  {/* Botón con Link para redirigir a la página de detalles */}
                  <Link to={`/auto/${car.id}`} className="btn btn-custom">Ver más</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
