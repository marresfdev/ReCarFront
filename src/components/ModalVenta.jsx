
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Input, Switch, notification } from 'antd';
import '../styles/ModalVenta.css';

const ModalVenta = ({ isVisible, onCancel, loading, setLoading, fetchData }) => {
    const [form] = Form.useForm();
    const [isModalVentaOpen, setIsModalVentaOpen] = useState(false);

    const handleCancel = () => {
        form.resetFields();
        onCancel();
    };

    const showModalVenta = () => {
        setIsModalVentaOpen(true);
    };

    const handleCancelVenta = () => {
        setIsModalVentaOpen(false);
    };

    return (
        <Modal
            title="Agregar Oferta Educativa"
            visible={isVisible}
            onCancel={handleCancel}
            footer={null}
            centered
        >
            <Form
                form={form}
                name="add_ofertaEducativa"
                onFinish={onFinish}
                layout="vertical"
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
