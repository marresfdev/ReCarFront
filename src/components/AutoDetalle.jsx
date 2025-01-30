import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AutoDetalle = () => {
  const { id } = useParams();  // Obtiene el id del auto desde la URL
  const [auto, setAuto] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/getAuto/${id}`)
      .then(response => {
        setAuto(response.data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los detalles del auto:", error);
      });
  }, [id]);  // Ejecuta el efecto cada vez que el id cambie

  if (!auto) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="container mt-5">
      <h2>Detalles del Auto</h2>
      <div className="card">
        <img src={auto.imagen} alt={`${auto.submarca} ${auto.modelo}`} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{auto.submarca} {auto.modelo} {auto.color}</h5>
          <p><strong>Precio:</strong> ${auto.precio.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          <p><strong>Kilómetros:</strong> {auto.km} km</p>
          <p><strong>Ubicación:</strong> {auto.ubicacion}</p>
          <p><strong>Descripción:</strong> {auto.descripcion || "No disponible"}</p>
          <p><strong>Estatus:</strong> {auto.estatus}</p>
        </div>
      </div>
    </div>
  );
};

export default AutoDetalle;
