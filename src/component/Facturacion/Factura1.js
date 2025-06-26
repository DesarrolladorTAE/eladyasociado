import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import logo from "../../assets/images/LogoElad.png";
import Conta from "../../assets/images/Facturacion/image2.png";

const LoginFactura = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [loading, setLoading] = useState(false);

  // Detecta si es móvil para cambiar el layout
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://taeconta.com/api/public/api/iniciar-sesion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, contrasena }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Error al iniciar sesión");

      // Abre el panel en otra ventana y pasa los datos
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
    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${Conta}) center center / cover no-repeat`,
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(20,30,40,0.45)",
          zIndex: 1,
        }}
      />
      {/* Contenedor flexible */}
      <div
        className="login-flex-wrap"
        style={{
          zIndex: 2,
          width: "100%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          maxWidth: 1280,
          position: "relative",
          padding: "32px 8px",
        }}
      >
        {/* Título */}
        <div
          className="titulo-login-ce"
          style={{
            color: "#fff",
            fontSize: isMobile ? "7vw" : "2.8vw",
            fontWeight: 700,
            letterSpacing: 2,
            textShadow: "0 3px 18px rgba(0,0,0,0.38)",
            whiteSpace: "pre-line",
            minWidth: isMobile ? "0" : 320,
            maxWidth: isMobile ? "98vw" : 420,
            padding: isMobile ? "32px 8px 8px 8px" : "16px 8px",
            margin: isMobile ? "0 0 18px 0" : "0 24px 0 0",
            textAlign: "center",
          }}
        >
          FACTURACIÓN ELECTRÓNICA
        </div>

        {/* Formulario */}
        <div
          style={{
            margin: "0 auto",
            width: "100%",
            maxWidth: 420,
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 20,
              boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
              padding: "48px 36px",
              minWidth: 260,
            }}
          >
            <div className="text-center mb-4">
              <img
                src={logo}
                alt="Facturación"
                style={{ width: 80, marginBottom: 10 }}
              />
              <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 4 }}>
                <span style={{ color: "#00B8F0" }}>FACTURACIÓN</span>
              </div>
              <div style={{ fontWeight: 500, color: "#000", letterSpacing: 0.5 }}>
                DESPACHO CONTABLE <span style={{ color: "#00B8F0" }}>ELAD</span> Y ASOCIADOS
              </div>
              <div style={{ fontWeight: 500, color: "#000", letterSpacing: 0.5 }}>
                Sistema Taeconta <span style={{ color: "#00B8F0" }}></span>
              </div>
            </div>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="correo">
                <Form.Label style={{ fontWeight: 500, letterSpacing: 2 }}>Usuario (Correo)</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="contrasena">
                <Form.Label style={{ fontWeight: 500, letterSpacing: 2 }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="contraseña"
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                  required
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
                />
              </Form.Group>
              <Button
                type="submit"
                variant="info"
                style={{
                  width: "100%",
                  fontWeight: 700,
                  letterSpacing: 1,
                  background: "#00B8F0",
                  border: "none",
                  padding: "12px 0",
                }}
                disabled={loading}
              >
                {loading ? "Entrando..." : "ENTRAR"}
              </Button>
            </Form>
            <p className="text-muted mt-4 text-center">
              <span className="text-dark fw-bold">¿No tienes cuenta?</span>{" "}
              <a
                href="https://taeconta.com/autenticacion/crear-cuenta"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#00B8F0", fontWeight: 600 }}
              >
                Regístrate aquí
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFactura;
