import React, { useState } from 'react';
import { Modal, Button, Form, Input, notification } from 'antd';
import '../styles/ModalVenta.css';
import logo from '../assets/recarlogo.png'; // Asegúrate de tener la ruta correcta de tu logo
import { Row, Col } from 'antd';

const ModalVenta = ({ isVisible, onCancel, loading, setLoading, fetchData }) => {
    const [form] = Form.useForm();

    // Función para manejar el envío del formulario
    const onFinish = async (values) => {
        console.log('Datos del formulario:', values);
        try {
            setLoading(true);
            // Aquí puedes hacer una petición para guardar la oferta
            notification.success({ message: 'Oferta creada con éxito' });
            form.resetFields();
            onCancel();
        } catch (error) {
            notification.error({ message: 'Error al crear la oferta' });
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        form.resetFields();
        onCancel();
    };

    return (
        <Modal
            title={
                <div className="modal-title">
                    <img src={logo} alt="Logo" className="modal-logo" />
                    <span>Ponte en contacto con nosotros</span>
                </div>
            }
            open={isVisible} // Cambiado de `visible` a `open`
            onCancel={handleCancel}
            footer={null}
            centered
            className="modal-venta"
        >
                <div className="call-info">
                    <center>
                    <p><strong> Llama al: </strong> <a href="tel:+4426048658" className="call-link">442 604 8658</a></p>
                    </center>
                </div>
        </Modal>
    );
};

export default ModalVenta;

{/* marketing@recarmotors.com */}