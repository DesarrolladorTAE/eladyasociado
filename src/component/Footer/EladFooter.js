import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaInstagram,
    FaPinterestP,
    FaTiktok,
} from "react-icons/fa";

import logoElad from "../../assets/images/LogoElad.png";

const TaeFooter = () => {
    const year = new Date().getFullYear().toString();

    return (
        <footer className="footer bg-dark text-white pt-5">
            <Container>
                <Row className="align-items-start">
                    {/* Logo y marca */}
                    <Col lg={4} className="mb-4 text-center text-lg-start">
                        <img src={logoElad} alt="Logo" className="mb-3" style={{ maxWidth: "160px" }} />
                        <p className="text-white-50">ELAD</p>
                    </Col>

                    {/* Nosotros */}
                    <Col lg={2} md={4} sm={6} className="mb-4">
                        <h6 className="text-uppercase small fw-bold border-bottom border-light pb-2">Nosotros</h6>
                        <ul className="list-unstyled small">
                            <li><Link to="/nosotros" className="text-white-50">Nosotros</Link></li>
                            <li><Link to="/aviso-privacidad" className="text-white-50">Aviso de privacidad</Link></li>
                            <li><Link to="/terminos-condiciones" className="text-white-50">Términos y Condiciones</Link></li>
                            <li><Link to="/quienes-somos" className="text-white-50">¿Quiénes somos?</Link></li>
                        </ul>
                    </Col>

                    {/* Redes sociales */}
                    <Col lg={4} className="mb-4 text-center text-lg-start">
                        <h6 className="text-uppercase small fw-bold border-bottom border-light pb-2">Redes</h6>
                        <div className="d-flex gap-3 justify-content-lg-start justify-content-center mt-3">
                            <a
                                href="https://www.facebook.com/TAELADTI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-2 rounded text-dark shadow-sm"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="fs-5" />
                            </a>
                            <a
                                href="https://x.com/i/flow/login?redirect_after_login=%2FTAELAD2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-2 rounded text-dark shadow-sm"
                                aria-label="Twitter"
                            >
                                <FaTwitter className="fs-5" />
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCZqj4INBI_M6b8b9O3Y3H5w"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-2 rounded text-dark shadow-sm"
                                aria-label="YouTube"
                            >
                                <FaYoutube className="fs-5" />
                            </a>
                            <a
                                href="https://mx.pinterest.com/taeladmx/_created/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-2 rounded text-dark shadow-sm"
                                aria-label="Pinterest"
                            >
                                <FaPinterestP className="fs-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/taeladmx/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-2 rounded text-dark shadow-sm"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="fs-5" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@taelad?"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-2 rounded text-dark shadow-sm"
                                aria-label="TikTok"
                            >
                                <FaTiktok className="fs-5" />
                            </a>
                        </div>
                    </Col>
                </Row>

                <hr className="border-light opacity-25" />

                <Row className="justify-content-between py-3 small">
                    <Col className="text-center">
                        <p className="text-white-50 mb-0">
                            © {year} TAE ContA — Todos los derechos reservados.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default TaeFooter;
