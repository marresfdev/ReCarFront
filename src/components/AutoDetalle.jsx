import React, { useEffect, useState } from "react";
import { ENV } from "../utils/constants";
import { useParams } from "react-router-dom";
import { autoService } from "../services/autoService"; // Importamos el service
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/AutoDetalle.css"; 
import ModalVenta from "../components/ModalVenta";

const AutoDetalle = () => {
  const { id } = useParams();
  const [auto, setAuto] = useState(null);
  const [imagenes, setImagenes] = useState([]);
  const [isModalVentaOpen, setIsModalVentaOpen] = useState(false);

  const showModalVenta = () => setIsModalVentaOpen(true);
  const handleCancelVenta = () => setIsModalVentaOpen(false);

  const calcularEnganche = (precio) => {
    if (precio < 250000) return precio * 0.10;
    if (precio <= 350000) return precio * 0.20;
    return precio * 0.25;
  };

  useEffect(() => {
    const fetchAuto = async () => {
      const autoData = await autoService.getAutoById(id);
      if (autoData) {
        setAuto(autoData);
        setImagenes(autoData.imagenes || []);
      }
    };
    fetchAuto();
  }, [id]);

  if (!auto) return <p className="loading">Cargando...</p>;

  return (
    <div className="auto-detalle-container">
      <div className="auto-detalle-left">
        <Carousel showThumbs={true} infiniteLoop autoPlay>
          {imagenes.length > 0 ? (
            imagenes.map((img, index) => (
              <div key={index}>
                <img 
                  src={`${ENV.API_URL}/${ENV.ENDPOINTS.IMAGES}/${img}`} 
                  alt={`Auto imagen ${index + 1}`} 
                  onError={(e) => (e.target.src = "/path/to/default-image.jpg")}
                />
              </div>
            ))
          ) : (
            <div><p>No hay imágenes disponibles para este auto.</p></div>
          )}
        </Carousel>
      </div>

      <div className="auto-detalle-right">
        <div className="card-autodetalle">
          <div className="header">{auto.submarca} {auto.modelo}</div>
          <div className="info">
            <p>Transmisión: {auto.transm}</p>
            <p>{auto.km.toLocaleString('es-MX')} km</p>
            <p className="enganche">Enganche desde:</p>
            <p className="enganche-precio">
              {auto.precio.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div className="footer">
            <p className="tag"><strong>¿Te interesa? Llámanos y te daremos más detalles sin compromiso</strong></p>
            <button className="button-lq" onClick={showModalVenta}>
              <i className="fa fa-phone"></i>
            </button>
          </div>
        </div>
      </div>

      <ModalVenta isVisible={isModalVentaOpen} onCancel={handleCancelVenta} />
    </div>
  );
};

export default AutoDetalle;
