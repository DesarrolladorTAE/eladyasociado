import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdCalendarToday, MdPhone } from "react-icons/md";
import contableHeader from "../../assets/images/Contacto/Fondo.png"; // <--- Ajusta la ruta según tu proyecto

const ExpertosContables = () => (
  <>
    {/* CABECERA CON IMAGEN DE FONDO */}
    <div
      style={{
        width: "100%",
        minHeight: 210, // más alto para que luzca bien
        background: `linear-gradient(rgba(12,34,62,.7),rgba(12,34,62,.4)), url(${contableHeader}) center/cover`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        marginBottom: 24,
        borderRadius: "0 0 18px 18px",
        paddingTop: 110, // AJUSTA este valor, más grande = más abajo el texto
      }}
    >
      <h1 style={{
        fontWeight: 800,
        fontSize: 38,
        letterSpacing: 2,
        textShadow: "0 2px 8px #123",
        marginBottom: 8,
        marginTop: 0,
      }}>
        Expertos Contables
      </h1>
      <div style={{
        fontSize: 20,
        maxWidth: 480,
        textAlign: "center",
        opacity: .95,
        marginBottom: 4,
      }}>
        Soluciones integrales para tu empresa, agenda una consulta hoy mismo.
      </div>
    </div>

    {/* SECCIÓN PRINCIPAL */}
    <section style={{ padding: "64px 0", background: "#fff" }}>
      <Container>
        <h1
          className="text-center"
          style={{
            fontSize: "4vw",
            fontWeight: 700,
            marginBottom: 60,
            letterSpacing: 1,
          }}
        >
          Expertos Contables
        </h1>
        <Row className="justify-content-center align-items-start">
          {/* Horario */}
          <Col xs={12} md={6} className="text-center mb-5 mb-md-0">
            <MdCalendarToday size={68} color="#08cfff" style={{ marginBottom: 20 }} />
            <h3
              style={{
                fontWeight: 700,
                marginBottom: 20,
                letterSpacing: 1,
                fontSize: "2vw",
                textTransform: "uppercase",
              }}
            >
              Horario de Atención
            </h3>
            <div style={{ fontSize: 26, fontWeight: 500, marginBottom: 12 }}>
              LUNES A VIERNES
              <br />
              <span style={{ fontSize: 22, fontWeight: 400 }}>8am – 5:00pm</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 500, marginBottom: 6 }}>
              SABADO: <span style={{ fontWeight: 400 }}>8:30am – 2pm</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 500 }}>
              DOMINGO: <span style={{ fontWeight: 400 }}>Cerrado</span>
            </div>
          </Col>
          {/* Teléfono */}
          <Col xs={12} md={6} className="text-center">
            <MdPhone size={68} color="#08cfff" style={{ marginBottom: 20 }} />
            <h3
              style={{
                fontWeight: 700,
                marginBottom: 36,
                letterSpacing: 1,
                fontSize: "2vw",
                textTransform: "uppercase",
              }}
            >
              Comunicate con Nosotros
            </h3>
            <div style={{ fontSize: 30, fontWeight: 500, marginBottom: 12 }}>
              (744) 134-0051
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
);

export default ExpertosContables;
