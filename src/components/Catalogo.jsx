import React, { useEffect, useState } from "react";
import { ENV } from "../utils/constants";
import { autoService } from "../services/autoService"; // Importamos el service
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Catalogo.css';

const Catalogo = () => {
  const [cars, setCars] = useState([]);

  const calcularEnganche = (precio) => {
    if (precio < 250000) return precio * 0.10;
    if (precio <= 350000) return precio * 0.20;
    return precio * 0.25;
  };

  useEffect(() => {
    const fetchAutos = async () => {
      const autos = await autoService.getAllAutos();
      setCars(autos);
    };
    fetchAutos();
  }, []);

  return (
    <div id="catalogo">
      <div className="container-fluid mt-5">
        <div className="row">
          <h1><center>Nuestros autos</center></h1>
          {cars.map((car) => {
            const enganche = calcularEnganche(car.precio);

            const imageUrl = `${ENV.API_URL}${ENV.ENDPOINTS.IMAGES}/${car.imagen}`;
            console.log("URL de la imagen generada:", imageUrl); // 👀 Verifica esto en la consola

            return (
              <div key={car.id} className="col-md-3 mb-4">
                <div className="card">
                  <img
                    src={`${ENV.API_URL}/${ENV.ENDPOINTS.IMAGES}/${car.imagen}`} 
                    alt={`${car.submarca} ${car.modelo} ${car.color}`}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {car.submarca} {car.color} {car.modelo}
                    </h5>
                    <p className="card-text">
                      Enganche: ${car.precio.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </p>
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
