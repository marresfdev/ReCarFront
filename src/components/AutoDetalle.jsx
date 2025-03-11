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
    axios
      .get(`http://localhost:8080/api/getAuto/${id}`)
      .then((response) => {
        setAuto(response.data);
        setImagenes(response.data.imagenes); // Las imágenes vienen en una lista de objetos con una propiedad 'url'
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los detalles del auto:", error);
      });
  }, [id]);

  if (!auto) {
    return <p className="loading">Cargando...</p>;
  }

  // Calcular el enganche basado en el precio del auto
  const enganche = calcularEnganche(auto.precio);

  return (
    <div className="auto-detalle-container">
      <div className="auto-detalle-left">
      <Carousel showThumbs={true} infiniteLoop autoPlay>
        {imagenes.length > 0 ? (
          imagenes.map((img, index) => (
            <div key={index}>
              <img 
                src={`http://localhost:8080/images/${img}`}  // Construimos la URL completa
                alt={`Auto imagen ${index + 1}`} 
                onError={(e) => e.target.src = "/path/to/default-image.jpg"} // Imagen por defecto en caso de error
              />
            </div>
          ))
        ) : (
          <div>
            <p>No hay imágenes disponibles para este auto.</p>
          </div>
        )}
      </Carousel>
      </div>

      <div className="auto-detalle-right">
        <div className="card-autodetalle">
          <div className="header">{auto.submarca} {auto.modelo}</div>
          <div className="info">
            <p>{`Con transmisión ${auto.transm === "STD" ? "estándar" : auto.transm === "AUT" ? "automática" : auto.transm}.`}</p>
            <p className="enganche">
              {`Enganche desde:`}
            </p>
            <p className="enganche-precio">
              {`${auto.precio.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
            </p>
          </div>
          <div className="footer">
            <p className="tag"><br /><strong>¿Te interesa? Llámanos y te daremos más detalles sin compromiso</strong></p>
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
