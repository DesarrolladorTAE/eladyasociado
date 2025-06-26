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
                    {/* Mapa + Logo */}
                    <Col lg={4} className="mb-4 text-center text-lg-start">
                        <div className="mb-3">
                            <iframe
                                title="Ubicación Elad"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.5723024095105!2d-99.8141532248472!3d16.847560883950475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca59e1bb794c7b%3A0xdf944a853b7b8e17!2sTecnolog%C3%ADas%20Administrativas%20Elad%20%7C%20Dise%C3%B1o%20Web%20%7C%20Marketing%20%7C%20E-Commerce%20%7C%20CRM%20%7C!5e0!3m2!1ses-419!2smx!4v1749235367451!5m2!1ses-419!2smx"
                                width="100%"
                                height="200"
                                style={{ border: 0, borderRadius: "10px" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <img src={logoElad} alt="Logo Elad" className="mb-2" style={{ maxWidth: "160px" }} />
                        <p className="text-white-50">ELAD</p>
                    </Col>

                    {/* Nosotros */}
                    <Col lg={2} md={4} sm={6} className="mb-4">
                        <h6 className="text-uppercase small fw-bold border-bottom border-light pb-2 fs-5">Nosotros</h6>
                        <ul className="list-unstyled small fs-5">
                            <li><Link to="/nosotros" className="text-white-50">Nosotros</Link></li>
                            <li><Link to="/aviso-privacidad" className="text-white-50">Aviso de privacidad</Link></li>
                            <li><Link to="/terminos-condiciones" className="text-white-50">Términos y Condiciones</Link></li>
                            {/* <li><Link to="/quienes-somos" className="text-white-50">¿Quiénes somos?</Link></li> */}
                        </ul>
                    </Col>

                    {/* Redes sociales */}
                    <Col lg={4} className="mb-4 text-center text-lg-start">
                        <h6 className="text-uppercase small fw-bold border-bottom border-light pb-2 fs-6">Redes</h6>
                        <div className="d-flex gap-3 justify-content-lg-start justify-content-center mt-3">
                            <a href="https://www.facebook.com/TAELADTI" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded text-dark shadow-sm">
                                <FaFacebookF className="fs-5" />
                            </a>
                            <a href="https://x.com/i/flow/login?redirect_after_login=%2FTAELAD2" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded text-dark shadow-sm">
                                <FaTwitter className="fs-5" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCZqj4INBI_M6b8b9O3Y3H5w" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded text-dark shadow-sm">
                                <FaYoutube className="fs-5" />
                            </a>
                            <a href="https://mx.pinterest.com/taeladmx/_created/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded text-dark shadow-sm">
                                <FaPinterestP className="fs-5" />
                            </a>
                            <a href="https://www.instagram.com/taeladmx/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded text-dark shadow-sm">
                                <FaInstagram className="fs-5" />
                            </a>
                            <a href="https://www.tiktok.com/@taelad?" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded text-dark shadow-sm">
                                <FaTiktok className="fs-5" />
                            </a>
                        </div>
                    </Col>
                </Row>

                <hr className="border-light opacity-25" />

                {/* <Row className="justify-content-between py-3 small">
                    <Col className="text-center">
                        <p className="text-white-50 mb-0">
                            © {year} TAE ContA — Todos los derechos reservados.
                        </p>
                    </Col>
                </Row> */}
            </Container>
        </footer>
    );
};

export default TaeFooter;
