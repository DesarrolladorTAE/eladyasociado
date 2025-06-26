// Componente 1 - Servicios Contables (imagen 1)
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ServiciosContables = () => (
  <section style={{ background: "#1da5d8", color: "white", padding: "4rem 0" }}>
    <Container>
      <h1 className="fw-bold mb-3">Servicios Contables</h1>
      <p className="mb-5">
        Más de 20 años trabajando la Contabilidad en México, nunca dejamos de capacitarnos en
        materia fiscal y contable.
      </p>
      <Row>
        <Col md={4} className="p-4" style={{ background: "#497392" }}>
          <h5 className="fw-bold">Administración</h5>
          <p className="mt-3">
            Una correcta gestión nos ayuda a saber lo que genera un negocio, solo de esa manera
            puedes dar los siguientes pasos.
          </p>
        </Col>
        <Col md={4} className="p-4" style={{ background: "#9fb1c5" }}>
          <h5 className="fw-bold">Recursos</h5>
          <p className="mt-3">
            La nómina de una empresa siempre estará en constante cambio, nosotros te asesoramos en cada uno de estos procesos.
          </p>
        </Col>
        <Col md={4} className="p-4 bg-white text-dark">
          <h5 className="fw-bold">Elaboración y Timbrado de Nómina</h5>
          <p className="mt-3">
            La nómina de una empresa siempre estará en constante cambio, nosotros te asesoramos en cada uno de estos procesos.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default ServiciosContables;