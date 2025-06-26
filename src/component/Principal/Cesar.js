import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cesar from "../../assets/images/Principal/image3.png"; // Imagen del asesor

const HiloContabilidad = () => {
    return (
        <section className="section" style={{ backgroundColor: "#00a9cc", color: "#fff" }}>
            <Container>
                <Row className="align-items-center">
                    {/* Imagen lado izquierdo */}
                    <Col lg={6}>
                        <img
                            src={Cesar}
                            alt="Descubrimos el hilo negro"
                            className="img-fluid rounded mb-4 mb-lg-0"
                            style={{ borderRadius: "20px" }}
                        />
                    </Col>

                    {/* Lista lado derecho */}
                    <Col lg={6}>
                        <h2 className="fw-bold mb-4">Descubrimos el hilo negro<br />de la Contabilidad</h2>
                        <ul className="list-unstyled fs-5">
                            <li>📌 Diagnóstico fiscal</li>
                            <li>📌 Registro de pólizas</li>
                            <li>📌 Elaboración de estados financieros</li>
                            <li>📌 Cálculo de impuestos</li>
                            <li>📌 Elaboración de papeles de trabajo</li>
                            <li>📌 Declaraciones mensuales, informativas y anuales</li>
                            <li>📌 Trámites administrativos ante dependencias</li>
                            <li>📌 Regularización de ejercicios de años anteriores</li>
                            <li>📌 Gestión de trámites</li>
                            <li>📌 Trámite REPSE</li>
                        </ul>

                        <a
                            href="https://wa.me/5212216919071?text=Hola%2C%20quiero%20más%20información%20sobre%20EladyAsociados"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-light btn-lg mt-3 px-4 fw-bold"
                        >
                            Más información
                        </a>
                    </Col>
                </Row>

                <div className="text-center mt-5 fs-5 fw-bold">
                    Asesoría contable, fiscal y soporte en línea
                </div>
            </Container>
        </section>
    );
};

export default HiloContabilidad;
