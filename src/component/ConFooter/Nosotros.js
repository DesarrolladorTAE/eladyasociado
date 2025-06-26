import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdCalculate, MdCheckCircle } from "react-icons/md";
import fondoNosotros from "../../assets/images/Footer/image1.png"; // Ajusta la ruta si es necesario

const misionText = `En ELAD & ASOCIADOS CONSULTORES, nuestra misión es brindar soluciones integrales en contabilidad, cumplimiento fiscal y gestión administrativa, con un enfoque personalizado, ético y estratégico, que ayude a nuestros clientes —personas físicas y morales— a cumplir con sus obligaciones fiscales, optimizar sus recursos y crecer de manera sostenible.

Complementamos nuestros servicios contables tradicionales con herramientas digitales innovadoras como facturación electrónica, sistemas de punto de venta, plataformas de e-commerce, automatización vía chatbots y estrategias de marketing digital, generando así valor agregado a cada negocio que confía en nosotros.

Nos comprometemos con la puntualidad, la transparencia y la capacitación constante, para garantizar decisiones acertadas y la tranquilidad fiscal de nuestros clientes.`;

const visionText = `Ser en 2030 uno de los despachos contables y administrativos más reconocidos en México, por nuestra capacidad de integrar tecnología, asesoría fiscal especializada y soluciones administrativas prácticas que impulsen el desarrollo de emprendedores, pequeñas y medianas empresas.

Buscamos consolidarnos como un aliado estratégico confiable, innovador y cercano, que no solo cumple, sino que acompaña y transforma la manera en que nuestros clientes gestionan su negocio y cumplen con el SAT.

Nuestra visión es construir una comunidad empresarial más profesional, digitalizada y libre de preocupaciones contables, con base en la confianza, la eficiencia y el conocimiento.`;

const Nosotros = () => (
  <section>
    {/* Header con fondo y overlay */}
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: 260,
        background: `url(${fondoNosotros}) center center / cover no-repeat`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(20,20,20,0.35)",
          zIndex: 1,
        }}
      />
      <h1
        style={{
          zIndex: 2,
          color: "#fff",
          fontWeight: 900,
          fontSize: "5vw",
          letterSpacing: 2,
          textAlign: "center",
        }}
      >
        NOSOTROS
      </h1>
    </div>

    {/* Sección Misión & Visión */}
    <div style={{ background: "#fff", padding: "64px 0" }}>
      <Container>
        <Row>
          {/* Misión */}
          <Col md={6} className="text-center mb-5 mb-md-0">
            <MdCalculate size={88} style={{ marginBottom: 24 }} />
            <h2
              style={{
                fontWeight: 700,
                fontSize: "2.6vw",
                marginBottom: 24,
                letterSpacing: 1,
              }}
            >
              Misión
            </h2>
            <div
              style={{
                fontSize: 22,
                fontWeight: 400,
                maxWidth: 550,
                margin: "0 auto",
                lineHeight: 1.35,
                textAlign: "justify",
                whiteSpace: "pre-line",
              }}
            >
              {misionText}
            </div>
          </Col>
          {/* Visión */}
          <Col md={6} className="text-center">
            <MdCheckCircle size={88} style={{ marginBottom: 24 }} />
            <h2
              style={{
                fontWeight: 700,
                fontSize: "2.6vw",
                marginBottom: 24,
                letterSpacing: 1,
              }}
            >
              Visión
            </h2>
            <div
              style={{
                fontSize: 22,
                fontWeight: 400,
                maxWidth: 550,
                margin: "0 auto",
                lineHeight: 1.35,
                textAlign: "justify",
                whiteSpace: "pre-line",
              }}
            >
              {visionText}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);

export default Nosotros;
