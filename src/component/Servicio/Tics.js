// Componente 2 - TIC's (imagen 2)
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TicImage from "../../assets/images/Servicio/image1.png";

const ServicioTics = () => (
  <section className="py-5">
    <Container>
      <Row className="align-items-center">
        <Col lg={6}>
          <h2 className="fw-bold">Servicio con TIC’s</h2>
          <p className="mt-3">
            Utilizamos las tecnologías de la información disponibles, para brindarte un mejor servicio,
            estamos disponibles de lunes a sábado para responder tus dudas y resolver las cuestiones
            contables que se presenten en tu negocio.
          </p>
        </Col>
        <Col lg={6} className="text-center">
          <img src={TicImage} alt="Servicio TICs" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  </section>
);

export default ServicioTics;