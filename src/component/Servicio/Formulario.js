// Componente 4 - Formulario (imagen 4)
import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const FormularioServicio = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        rfc: "",
        telefono: "",
        facturas: "",
        actividad: "",
        trabajadores: "",
        comentarios: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mensaje = `Hola, quiero más información. Formulario de servicios contables\n\nNombre: ${formData.nombre}\nCorreo: ${formData.correo}\nRFC: ${formData.rfc}\nTeléfono: ${formData.telefono}\nFacturas: ${formData.facturas}\nActividad: ${formData.actividad}\n¿Cuenta con trabajadores?: ${formData.trabajadores}\nComentarios: ${formData.comentarios}`;

        const url = `https://wa.me/5212216919071?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    };

    return (
        <section className="py-5 bg-light">
            <Container>
                <h2 className="text-center fw-bold mb-5">Empecemos a trabajar juntos</h2>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col md={6}><Form.Control name="nombre" value={formData.nombre} onChange={handleChange} type="text" placeholder="Nombre o Empresa*" required /></Col>
                        <Col md={6}><Form.Control name="correo" value={formData.correo} onChange={handleChange} type="email" placeholder="Correo Electronico*" required /></Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={6}><Form.Control name="rfc" value={formData.rfc} onChange={handleChange} type="text" placeholder="RFC*" required /></Col>
                        <Col md={6}><Form.Control name="telefono" value={formData.telefono} onChange={handleChange} type="tel" placeholder="Telefono*" required /></Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Control name="facturas" value={formData.facturas} onChange={handleChange} type="text" placeholder="Numero de Facturas Emitidas al mes*" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Actividad empresarial</Form.Label>
                        <Form.Control name="actividad" value={formData.actividad} onChange={handleChange} type="text" placeholder="Actividad Empresarial, Ejemplo: Ferretería, Restaurante*" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">¿Cuenta con trabajadores?</Form.Label>
                        <div>
                            <Form.Check inline type="radio" label="Si" name="trabajadores" value="Si" checked={formData.trabajadores === "Si"} onChange={handleChange} required />
                            <Form.Check inline type="radio" label="No" name="trabajadores" value="No" checked={formData.trabajadores === "No"} onChange={handleChange} required />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Control as="textarea" name="comentarios" value={formData.comentarios} onChange={handleChange} placeholder="Comentarios Adicionales* (Opcional)" rows={4} />
                    </Form.Group>
                    <Button type="submit" variant="info" className="px-5">ENVIAR</Button>
                </Form>
            </Container>
        </section>
    );
};

export default FormularioServicio;
