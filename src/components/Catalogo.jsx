import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Catalogo.css'; // Archivo de estilos
import { FaCar } from "react-icons/fa";

const Catalogo = () => {
  // Arreglo de carros de ejemplo
  const cars = [
    { id: 1, name: "Carro 1", price: "$20,000", image: "https://cimg3.ibsrv.net/cimg/www.autocreditosya.com/1200x675_100/207/DG022_047DUt0lrurp17jddtid181af94jjsf-705207.jpg" },
    { id: 2, name: "Carro 2", price: "$25,000", image: "https://cimg3.ibsrv.net/cimg/www.autocreditosya.com/1200x675_100/207/DG022_047DUt0lrurp17jddtid181af94jjsf-705207.jpg" },
    { id: 3, name: "Carro 3", price: "$30,000", image: "https://cimg3.ibsrv.net/cimg/www.autocreditosya.com/1200x675_100/207/DG022_047DUt0lrurp17jddtid181af94jjsf-705207.jpg" },
    { id: 4, name: "Carro 4", price: "$35,000", image: "https://cimg3.ibsrv.net/cimg/www.autocreditosya.com/1200x675_100/207/DG022_047DUt0lrurp17jddtid181af94jjsf-705207.jpg" },
    { id: 5, name: "Carro 5", price: "$20,000", image: "https://cimg3.ibsrv.net/cimg/www.autocreditosya.com/1200x675_100/207/DG022_047DUt0lrurp17jddtid181af94jjsf-705207.jpg" },
    { id: 6, name: "Carro 6", price: "$25,000", image: "https://cimg3.ibsrv.net/cimg/www.autocreditosya.com/1200x675_100/207/DG022_047DUt0lrurp17jddtid181af94jjsf-705207.jpg" },
    { id: 7, name: "Carro 7", price: "$30,000", image: "https://cimg3.ibsrv.net/cimg/www.autocreditosya.com/1200x675_100/207/DG022_047DUt0lrurp17jddtid181af94jjsf-705207.jpg" },
    { id: 8, name: "Carro 8", price: "$35,000", image: "https://cimg3.ibsrv.net/cimg/www.autocreditosya.com/1200x675_100/207/DG022_047DUt0lrurp17jddtid181af94jjsf-705207.jpg" },
    { id: 9, name: "Carro 9", price: "$35,000", image: "https://cimg3.ibsrv.net/cimg/www.autocreditosya.com/1200x675_100/207/DG022_047DUt0lrurp17jddtid181af94jjsf-705207.jpg" },
    { id: 10, name: "Carro 10", price: "$20,000", image: "https://cimg3.ibsrv.net/cimg/www.autocreditosya.com/1200x675_100/207/DG022_047DUt0lrurp17jddtid181af94jjsf-705207.jpg" },
    { id: 11, name: "Carro 11", price: "$25,000", image: "https://cimg3.ibsrv.net/cimg/www.autocreditosya.com/1200x675_100/207/DG022_047DUt0lrurp17jddtid181af94jjsf-705207.jpg" },
    { id: 12, name: "Carro 12", price: "$30,000", image: "https://cimg3.ibsrv.net/cimg/www.autocreditosya.com/1200x675_100/207/DG022_047DUt0lrurp17jddtid181af94jjsf-705207.jpg" }
  ];

  return (
    <div id="catalogo">
      <div className="container-fluid mt-5">
        <div className="row">
          <h1 className="custom-header"><center>Nuestros autos</center></h1>
          <p></p>
          {cars.map((car) => (
            <div key={car.id} className="col-md-3 col-12 mb-4"> {/* Responsivo: col-12 para pantallas pequeñas */}
              <div className="card">
                <div className="image">
                  <img src={car.image} alt={car.name} className="card-img-top" />
                  <span className="text">{car.name}</span>
                </div>
                <span className="title">{car.name}</span>
                <span className="price">{car.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
