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
  const STD = "estandar";

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
        <div class="card-autodetalle">
        <div class="header">{auto.submarca} {auto.modelo}</div>
        <div class="info">
          <p class="title">Llevatelo desde: {auto.precio.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          <p>{`Por tan solo $${auto.precio.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}, con una transmisión ${auto.transm === "STD" ? "estándar" : auto.transm === "AUT" ? "automática" : auto.transm}. Es ideal para ti.`} </p>
        </div>
        <div class="footer">
          <p class="tag"><br></br>¿Necesitas más detalles? llamanos y te atenderemos sin problema</p>
          <button type="button" class="button-lq"><i className="fa fa-phone"></i></button>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default AutoDetalle;
