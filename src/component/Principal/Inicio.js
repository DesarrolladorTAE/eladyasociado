import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Card } from "react-bootstrap";
// import Foto1 from "../../assets/images/Principal/image1.png";
// import Foto2 from "../../assets/images/Principal/image2.png";
import Fondo from "../../assets/images/Principal/Fondo.png"; // <-- Pon aquí tu fondo
import VideoConta from "../../assets/videos/contadores.mp4";

const About = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://taeconta.com/api/public/api/iniciar-sesion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, contrasena }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Error al iniciar sesión");
      const newWindow = window.open("https://taeconta.com/panel", "_blank");
      if (newWindow) {
        setTimeout(() => {
          newWindow.postMessage({ type: "loginResponse", data }, "*");
          console.log("Mensaje enviado:", data);
        }, 1000);
      } else {
        alert("No se pudo abrir la ventana del panel");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <section
      className="py-5 position-relative"
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(to bottom, rgba(36, 88, 115, 0.65), rgba(0,0,0,0.5)), url(${Fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="about"
    >
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xl={9} lg={10}>
            <Card className="shadow-lg border-0 rounded-4" style={{ background: "rgba(255,255,255,0.93)", backdropFilter: "blur(8px)" }}>
              <Row className="g-0">
                {/* Info + fotos */}
                <Col md={7} className="d-flex flex-column justify-content-center p-5">
                  {/* <h2 className="fw-bold mb-3 text-primary" style={{ fontSize: "2.2rem" }}>
                    1 mes de <span className="bg-danger text-white px-3 py-1 rounded-pill ms-2">Contabilidad GRATIS</span>
                  </h2> */}
                  {/* <ul className="ps-3 mb-4" style={{ fontSize: "1.15rem" }}>
                    <li>Registro digital de pólizas</li>
                    <li>Precálculo de impuestos</li>
                    <li>Informativas automáticas</li>
                    <li>Panel fácil y seguro</li>
                  </ul> */}
                  <div className="mt-3 d-flex justify-content-center">
                    <video
                      src={VideoConta}
                      className="rounded-3 shadow"
                      style={{
                        maxHeight: 700,         // Limita la altura máxima
                        maxWidth: 570,          // Limita el ancho máximo para que no se deforme
                        width: "100%",          // Que se adapte, pero nunca pase el maxWidth
                        objectFit: "contain",   // Para que no recorte nada del video
                        background: "#000"      // Fondo negro para que se vea bien el video vertical
                      }}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    />
                  </div>

                </Col>
                {/* Login */}
                <Col
                  md={5}
                  className="d-flex flex-column justify-content-center align-items-center bg-light rounded-end-4 p-5"
                  style={{ borderLeft: "1px solid #eef1f4" }}
                >
                  <h4 className="fw-bold mb-4 text-secondary text-center">Ingresa a tu cuenta de Taeconta</h4>
                  <Form className="w-100" style={{ maxWidth: 320 }} onSubmit={handleLogin}>
                    <Form.Group controlId="correo_field" className="mb-3">
                      <Form.Label>Correo</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="correo"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="contrasena_field" className="mb-3">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="contraseña"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Button type="submit" className="w-100 btn btn-info text-white fw-bold shadow-sm">
                      Entrar
                    </Button>
                  </Form>
                  <p className="text-muted mt-4 text-center">
                    <span className="fw-semibold">¿No tienes cuenta?</span>{" "}
                    <a
                      href="https://api.whatsapp.com/send?phone=5212216919071&text=Gracias%20por%20contactarnos%2C%20%C2%BFQu%C3%A9%20asesor%C3%ADa%20necesitas%20para%20tu%20negocio%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fw-bold"
                      style={{ color: "#25D366", textDecoration: "none" }}
                    >
                      Manda un WhatsApp para recibir asesoría
                    </a>
                  </p>

                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
