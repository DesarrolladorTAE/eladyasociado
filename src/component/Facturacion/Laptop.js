import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import laptopFactura from "../../assets/images/Facturacion/image1.png"; // Cambia la ruta por la de tu imagen

const IngresoComputadora = () => (
  <section className="py-5 bg-white">
    <Container>
      <Row className="align-items-center">
        {/* Imagen con círculo azul */}
        <Col md={6} className="text-center position-relative mb-4 mb-md-0">
          <div
            style={{
              width: 430,
              height: 430,
              borderRadius: "50%",
              background: "#08cfff",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-45%, -50%)",
              zIndex: 0,
            }}
          />
          <img
            src={laptopFactura}
            alt="Factura en laptop"
            style={{
              maxWidth: 550,
              width: "92%",
              borderRadius: 12,
              boxShadow: "0 10px 32px rgba(0,0,0,0.11)",
              position: "relative",
              zIndex: 1,
            }}
          />
        </Col>
        {/* Texto */}
        <Col md={6} className="ps-md-5">
          <h2
            style={{
              color: "#222",
              fontWeight: 600,
              fontSize: "2.5rem",
              marginBottom: 20,
              marginTop: 24,
            }}
          >
            Ingresa desde cualquier computadora
          </h2>
          <p style={{ fontSize: 22, color: "#222", marginBottom: 36, maxWidth: 570 }}>
            El sistema de facturación en nube Taeconta se utiliza con cualquier navegador de internet,
            se recomienda usarlo en computadora, laptop o tableta.
          </p>
          <a
            href="/politicas-privacidad"
            style={{
              color: "#555",
              fontWeight: 500,
              fontSize: 21,
              textDecoration: "none",
            }}
          >
            Políticas de Privacidad
          </a>
        </Col>
      </Row>
    </Container>
  </section>
);

export default IngresoComputadora;
