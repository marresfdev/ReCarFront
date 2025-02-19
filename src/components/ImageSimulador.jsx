import React from 'react';
import miImagen from '../assets/recarequipo2.jpg';
import '../styles/FormSimulador.css';

const ImageSimulador = () => {
    return (
        <div>
            {/* Utiliza la imagen importada en el src de la etiqueta img */}
            <img src={miImagen} alt="UNPOLLO" />
        </div>
    );
};

export default ImageSimulador;

