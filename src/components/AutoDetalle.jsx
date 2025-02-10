import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/AutoDetalle.css"; // Importamos los estilos
import ModalVenta from "../components/ModalVenta";

const AutoDetalle = () => {
  const { id } = useParams();
  const [auto, setAuto] = useState(null);
  const [imagenes, setImagenes] = useState([]);
  const [isModalVentaOpen, setIsModalVentaOpen] = useState(false);

  const showModalVenta = () => {
    setIsModalVentaOpen(true);
  };

  const handleCancelVenta = () => {
    setIsModalVentaOpen(false);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/getAuto/${id}`)
      .then((response) => {
        setAuto(response.data);
        setImagenes(response.data.imagenes);
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
        <div className="card-autodetalle">
          <div className="header">{auto.submarca} {auto.modelo}</div>
          <div className="info">
            <p className="title">Llévatelo desde: {auto.precio.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <p>{`Por tan solo $${auto.precio.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}, con una transmisión ${auto.transm === "STD" ? "estándar" : auto.transm === "AUT" ? "automática" : auto.transm}. Es ideal para ti.`}</p>
          </div>
          <div className="footer">
            <p className="tag"><br />¿Te interesa? Llámanos y te daremos más detalles sin compromiso</p>
            <button type="button" className="button-lq" onClick={showModalVenta}>
              <i className="fa fa-phone"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Agregamos el modal aquí */}
      <ModalVenta 
        isVisible={isModalVentaOpen} 
        onCancel={handleCancelVenta} 
      />
    </div>
  );
};

export default AutoDetalle;
