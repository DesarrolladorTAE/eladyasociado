// Componente 3 - Experiencia (imagen 3)
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExpImage from "../../assets/images/Servicio/image2.png";

const AsesoriaExperiencia = () => (
  <section className="py-5">
    <Container>
      <Row className="align-items-center">
        <Col lg={6} className="text-center">
          <img src={ExpImage} alt="Experiencia" className="img-fluid" />
        </Col>
        <Col lg={6}>
          <h2 className="fw-bold">Asesoría con Experiencia</h2>
          <p className="mt-3">
            Conocemos el área de la Contabilidad Electrónica en México, hemos crecido con ella y podemos
            decir que nuestra experiencia nos permite adaptarnos a tu negocio y al crecimiento de este.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default AsesoriaExperiencia;