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
                    <p><strong> Llama al: </strong> <a href="tel:+4426048658" className="call-link">442 604 8658</a></p>
                </div>
                <div className="call-info">
                    <p>O envianos un correo para más detalles sobre esta unidad.</p>
                </div>
            <Form
                form={form}
                name="add_ofertaEducativa"
                layout="vertical"
                onFinish={onFinish}
                className="form-modal"
            >
                <Row gutter={16}> {/* Ajusta el espacio entre columnas con gutter */}
                    <Col span={12}> {/* Ajusta el ancho según necesites */}
                        <Form.Item
                            name="nombre"
                            label="Nombre"
                            rules={[{ required: true, message: 'Por favor, ingresa tu nombre!' }]}
                        >
                            <Input placeholder="Ingresa tu nombre" className="modal-input" />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            name="telefono"
                            label="Número de teléfono"
                            rules={[{ required: true, message: 'Por favor, ingresa tu número de teléfono!' }]}
                        >
                            <Input placeholder="Ingresa tu número de teléfono" className="modal-input" />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item
                    name="mensaje"
                    label="Tu mensaje o dudas"
                    rules={[{ required: true, message: 'Por favor, ingresa tu mensaje!' }]}
                >
                    <Input.TextArea placeholder="Escribe tu mensaje aquí" rows={4} className="modal-textarea" />
                </Form.Item>

                <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    className="submit-button"
                >
                    Enviar
                </Button>
            </Form>
        </Modal>
    );
};

export default ModalVenta;

{/* marketing@recarmotors.com */}