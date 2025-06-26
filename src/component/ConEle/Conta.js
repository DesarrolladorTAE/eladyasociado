import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import logo from "../../assets/images/LogoElad.png";
import Conta from "../../assets/images/ConEle/image1.png";

const LoginContabilidad = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
    const formRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 992);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                    CONTABILIDAD ELECTRÓNICA
                </div>

                {/* Formulario HTML clásico */}
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
                                alt="Contabilidad"
                                style={{ width: 80, marginBottom: 10 }}
                            />
                            <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 4 }}>
                                <span style={{ color: "#00B8F0" }}>CONTABILIDAD</span>
                            </div>
                            <div style={{ fontWeight: 500, color: "#000", letterSpacing: 0.5 }}>
                                DESPACHO CONTABLE <span style={{ color: "#00B8F0" }}>ELAD</span> Y ASOCIADOS
                            </div>
                            <div style={{ fontWeight: 500, color: "#000", letterSpacing: 0.5 }}>
                                Sistema Taeconta <span style={{ color: "#00B8F0" }}></span>
                            </div>
                        </div>
                        {/* FORMULARIO HTML PURO */}
                        <form
                            method="POST"
                            action="https://mb.p9000/index.php"
                            autoComplete="off"
                            ref={formRef}
                        >
                            <fieldset>
                                <div className="form-group row mb-3" id="user_field">
                                    <label className="col-form-label col-sm-4" htmlFor="user">
                                        Usuario
                                    </label>
                                    <div className="col-sm-8">
                                        <input
                                            type="text"
                                            id="user"
                                            name="user"
                                            required
                                            className="form-control"
                                            placeholder="usuario"
                                            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row mb-4" id="password_field">
                                    <label className="col-form-label col-sm-4" htmlFor="password">
                                        Password
                                    </label>
                                    <div className="col-sm-8">
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            required
                                            className="form-control"
                                            placeholder="contraseña"
                                            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
                                        />
                                    </div>
                                </div>
                                <Button
                                    className="btngren"
                                    type="submit"
                                    style={{
                                        width: "100%",
                                        fontWeight: 700,
                                        letterSpacing: 1,
                                        background: "#00B8F0",
                                        border: "none",
                                        padding: "12px 0",
                                    }}
                                >
                                    Entrar
                                </Button>
                            </fieldset>
                        </form>
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

export default LoginContabilidad;
