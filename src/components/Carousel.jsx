import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Carousel.css';
import carritoImg from '../assets/carrito.jpg';
import carritoImg2 from '../assets/carrito2.jpg';

const Carousel = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade full-width-carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={carritoImg} className="d-block w-100" alt="Slide 1" />
                    <div className="overlay">
                        <h1 className="carousel-text">Tomamos tu auto a crédito</h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={carritoImg2} className="d-block w-100" alt="Slide 2" />
                    <div className="overlay">
                        <h1 className="carousel-text">Texto para Slide 2</h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={carritoImg} className="d-block w-100" alt="Slide 3" />
                    <div className="overlay">
                        <h1 className="carousel-text">Texto para Slide 3</h1>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
