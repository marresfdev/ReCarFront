import React, { useState } from 'react';
import { Modal, Button, Form, Input, Switch, notification } from 'antd';
import '../styles/ModalVenta.css';

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
            title="Ponte en contacto con nosotros"
            open={isVisible} // Cambiado de `visible` a `open`
            onCancel={handleCancel}
            footer={null}
            centered
        >
            <Form
                form={form}
                name="add_ofertaEducativa"
                layout="vertical"
                onFinish={onFinish} // Se agregó la función aquí
            >
                <Form.Item
                    name="nombre"
                    label="Nombre de Oferta"
                    rules={[{ required: true, message: 'Por favor ingrese el nombre de la oferta educativa' }]}
                >
                    <Input className="modal-input" placeholder="Nombre de la oferta educativa" />
                </Form.Item>
                <Form.Item
                    name="estado"
                    label="Estado"
                    valuePropName="checked"
                >
                    <Switch />
                </Form.Item>
                <Form.Item className="modal-footer">
                    <Button onClick={handleCancel} className="modal-btn modal-btn-cancel">
                        Cancelar
                    </Button>
                    <Button type="primary" htmlType="submit" loading={loading} className="modal-btn modal-btn-create">
                        Crear Oferta
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalVenta;
