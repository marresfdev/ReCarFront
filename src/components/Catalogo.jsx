import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Catalogo.css';

const Catalogo = () => {
  const [cars, setCars] = useState([]);

  // Función para calcular el enganche
  const calcularEnganche = (precio) => {
    if (precio < 250000) {
      return precio * 0.10; // 10% si el precio es menor a 250,000
    } else if (precio >= 250000 && precio <= 350000) {
      return precio * 0.20; // 20% si el precio está entre 250,000 y 350,000
    } else {
      return precio * 0.25; // 25% si el precio es mayor a 350,000
    }
  };

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
          {cars.map((car) => {
            // Calculamos el enganche para cada auto
            const enganche = calcularEnganche(car.precio);

            return (
              <div key={car.id} className="col-md-3 mb-4">
                <div className="card">
                  <img src={car.imagen} alt={`${car.submarca} ${car.modelo} ${car.color}`} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">
                      {car.submarca} {car.color} {car.modelo}
                    </h5>
                    <p className="card-text">
                      {/* Mostrar el precio */}
                      Desde: ${car.precio.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    {/* btn con link para redirigir a la página de detalles */}
                    <Link to={`/auto/${car.id}`} className="btn btn-custom">Ver más</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
