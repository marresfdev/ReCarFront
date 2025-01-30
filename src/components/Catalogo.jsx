import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Catalogo.css'; // Archivo de estilos

const Catalogo = () => {
  // Estado para almacenar los autos
  const [cars, setCars] = useState([]);

  // Realizar la solicitud GET cuando el componente se monte
  useEffect(() => {
    axios.get("http://localhost:8080/api/getAllAutos") // Reemplaza con la URL de tu endpoint
      .then(response => {
        setCars(response.data); // Guardar los datos de los autos en el estado
        console.log(response.data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los autos:", error);
      });
  }, []); // El arreglo vacío asegura que la solicitud solo se realice una vez

  return (
    <div id="catalogo">
      <div className="container-fluid mt-5">
        <div className="row">
          <h1><center>Nuestros autos</center></h1>
          <p></p>
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
                  <a href="#" className="btn btn-custom">Ver más</a>
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
