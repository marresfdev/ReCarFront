import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Carousel.css';
import carritoImg from '../assets/carro1.jpg';
import carritoImg2 from '../assets/carro2.jpg';
import carritoImg3 from '../assets/carro3.jpg';
import carritoImg4 from '../assets/carro4.jpg';
import carritoImg5 from '../assets/carro6.jpg';
import carritoImg6 from '../assets/carro7.jpg';

const Carousel = () => {
    return (
        <div className="body-carousel">
        <div id="carouselExampleDark" className="carousel carousel-dark slide full-width-carousel" data-bs-ride="carousel">
            {/* Indicadores del carousel */}
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="5"
                    aria-label="Slide 6"
                ></button>
            </div>

            {/* Contenido del carousel */}
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2500">
                    <img src={carritoImg3} className="d-block w-100" alt="Slide 1" />
                    <div className="carousel-caption d-none d-md-block" style={{ color: "white", fontSize: "24px", padding: "10px", position: "absolute", top: "70%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <h2>Tomamos tu auto a cuenta</h2>
                        <p>Comprometidos con tu satisfacción</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                    <img src={carritoImg} className="d-block w-100" alt="Slide 2" />
                    <div className="carousel-caption d-none d-md-block" style={{ color: "white", fontSize: "24px", padding: "10px", position: "absolute", top: "70%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <h2>Manejamos a crédito y de contado</h2>
                        <p>Opciones flexibles para cada cliente</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                    <img src={carritoImg2} className="d-block w-100" alt="Slide 3" />
                    <div className="carousel-caption d-none d-md-block" style={{ color: "white", fontSize: "24px", padding: "10px", position: "absolute", top: "70%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <h2>Somos socios ANCA</h2>
                        <p>Compromiso y confianza en cada compra</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                    <img src={carritoImg4} className="d-block w-100" alt="Slide 4" />
                    <div className="carousel-caption d-none d-md-block" style={{ color: "white", fontSize: "24px", padding: "10px", position: "absolute", top: "70%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <h2>Opciones con o sin buro de crédito</h2>
                        <p>Encuentra el plan que mejor se adapte a ti</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                    <img src={carritoImg5} className="d-block w-100" alt="Slide 5" />
                    <div className="carousel-caption d-none d-md-block" style={{ color: "white", fontSize: "24px", padding: "10px", position: "absolute", top: "70%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <h2>Garantía en transmisión y motor</h2>
                        <p>Sientete seguro con nosotros</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                    <img src={carritoImg6} className="d-block w-100" alt="Slide 6" />
                    <div className="carousel-caption d-none d-md-block" style={{ color: "white", fontSize: "24px", padding: "10px", position: "absolute", top: "70%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <h2>Enganche desde el 10%</h2>
                        <p>Siempre pensando en el cliente</p>
                    </div>
                </div>
            </div>

            {/* Controles de navegación */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    );
};

export default Carousel;
