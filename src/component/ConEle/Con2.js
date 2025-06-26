import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imagenContabilidad from "../../assets/images/ConEle/image2.png"; // Cambia la ruta y nombre a la de tu imagen real

const ContabilidadElectronica = () => (
  <section style={{ padding: "48px 0" }}>
    <Container>
      <Row className="align-items-center justify-content-center">
        {/* Imagen a la izquierda */}
        <Col md={6} className="text-center">
          <img
            src={imagenContabilidad}
            alt="Contabilidad Electrónica"
            style={{
              width: "100%",
              maxWidth: 540,
              boxShadow: "0 4px 18px rgba(40,40,40,0.15)",
              borderRadius: 6,
            }}
          />
        </Col>
        {/* Texto a la derecha */}
        <Col md={6}>
          <h2
            style={{
              color: "#08cfff",
              fontWeight: 700,
              fontSize: "2.5rem",
              marginBottom: 24,
            }}
          >
            Contabilidad Electrónica
          </h2>
          <div
            style={{
              fontSize: 20,
              color: "#2a2a2a",
              fontWeight: 400,
              lineHeight: 1.6,
              marginBottom: 12,
            }}
          >
            TAEConta es el software contable que te permite llevar los registros,
            los catálogos, libros, documentos, la preparación y envío de los datos
            contables, reportes contables (Balanza, Balance general, Estados de
            resultados, Libros) todo queda resguardado en la nube.
            <br />
            <br />
            Olvídate de excel y comienza a usar TAEConta.
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default ContabilidadElectronica;
