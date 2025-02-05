import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/AutoDetalle.css"; // Importamos los estilos

const AutoDetalle = () => {
  const { id } = useParams();
  const [auto, setAuto] = useState(null);
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/getAuto/${id}`)
      .then((response) => {
        setAuto(response.data); // Guardamos el auto completo
        setImagenes(response.data.imagenes); // Guardamos las imágenes del auto
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los detalles del auto:", error);
      });
  }, [id]);

  if (!auto) {
    return <p className="loading">Cargando...</p>;
  }

  return (
    <div className="auto-detalle-container">
      <div className="auto-detalle-left">
        <Carousel showThumbs={true} infiniteLoop autoPlay>
          {imagenes.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Auto imagen ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="auto-detalle-right">
        <h2>{auto.submarca} {auto.modelo}</h2>
        <p className="auto-precio"><strong>Precio:</strong> ${auto.precio.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        <p><strong>Color:</strong> {auto.color}</p>
        <p><strong>Kilómetros:</strong> {auto.km} km</p>
        <p><strong>Ubicación:</strong> {auto.ubicacion}</p>
        <p><strong>Transmisión:</strong> {auto.transm}</p>
        <p><strong>Estatus:</strong> {auto.estatus}</p>
        <p><strong>Serie:</strong> {auto.serie}</p>
        <p><strong>Descripción:</strong> {auto.descripcion || "No disponible"}</p>
      </div>
    </div>
  );
};

export default AutoDetalle;
