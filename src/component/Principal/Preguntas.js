import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaChevronUp } from "react-icons/fa";

const faqs = [
    {
        pregunta: "¿Qué necesito para comenzar con mi servicio contable?",
        respuesta:
            "Solo necesitas registrarte en el servicio de Taeconta al inicio de la página, podras usar el sistema gratis por 14 días y tendrás acceso a 10 folios gratis",
    },
    {
        pregunta: "¿Pueden dar servicio a nivel nacional?",
        respuesta:
            "Contamos con la tecnología y los profesionistas necesarios para atender tu negocio.",
    },
    {
        pregunta: "¿A qué tipo de clientes va dirigido nuestro servicio?",
        respuesta:
            "Freelancer, Emprendedor, Pequeñas, Medianas y Grandes Empresas.",
    },
];

const PreguntasFrecuentes = () => {
    return (
        <section className="py-5" style={{ backgroundColor: "#00a9cc", color: "#fff" }}>
            <Container>
                <h2 className="fw-bold mb-5 text-white">Preguntas frecuentes</h2>

                {faqs.map((item, index) => (
                    <Row key={index} className="align-items-start mb-4">
                        <Col xs={11}>
                            <h5 className="fw-bold mb-2">{item.pregunta}</h5>
                            <p className="mb-0">{item.respuesta}</p>
                        </Col>
                        <Col xs={1} className="text-end">
                            <FaChevronUp size={20} />
                        </Col>
                    </Row>
                ))}
            </Container>
        </section>
    );
};

export default PreguntasFrecuentes;
