import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bgImg from "../../assets/images/Footer/image2.png";

// Navbar y footer
// import { Navbar1 } from "../../components/navbar";
// import TaeFooter from "../../components/TaeFooter";
// import BackToTop from "../../components/BackToTop";
// import Login from "../auth/Login";
// import Signin from "../auth/Signin";

const TerminosCondiciones = () => (
    <>
    
        {/* navbar */}
        {/* <Navbar1 classname="navbar-light" isLogoDark={false} /> */}

        {/* Banner superior */}
        <div
            style={{
                background: `linear-gradient(rgba(24,54,122,0.7),rgba(24,54,122,0.7)), url('${bgImg}') center/cover no-repeat`,
                minHeight: 250,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <h1
                className="text-white fw-bold"
                style={{ fontSize: "2.3rem", letterSpacing: 1, textAlign: "center" }}
            >
                Términos y Condiciones
            </h1>
        </div>

        {/* Contenido principal */}
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={11} lg={10}>
                    <div
                        style={{
                            background: "#f8fafc",
                            borderRadius: 12,
                            boxShadow: "0 2px 8px rgba(24,54,122,0.06)",
                            padding: "2.5rem 2rem",
                        }}
                    >
                        <div style={{ whiteSpace: "pre-line", fontSize: "1.08rem" }}>
                            {`INFORMACIÓN GENERAL
📄 Términos y Condiciones de Servicios Contables
ELAD & ASOCIADOS CONSULTORES

Última actualización: 9 de junio de 2025

1. Objeto del Servicio
Los presentes Términos y Condiciones regulan la prestación de servicios contables y fiscales por parte de ELAD & ASOCIADOS CONSULTORES (en adelante "ELAD") a personas físicas con actividad empresarial, RIF, RESICO y personas morales.

Los servicios incluyen, según el paquete contratado:

Contabilidad mensual (ingresos, egresos, conciliaciones bancarias)

Cálculo y presentación de declaraciones (mensuales, provisionales, anuales)

Envío de contabilidad electrónica al SAT

Gestión de nómina y timbrado de recibos

Emisión de CFDI (facturas electrónicas)

Asesoría fiscal general

2. Requisitos para la Prestación del Servicio
Para que ELAD preste los servicios de forma adecuada y oportuna, el cliente se compromete a:

Entregar su información fiscal y financiera completa y a tiempo: incluyendo ingresos, gastos, movimientos bancarios, nóminas y demás documentos necesarios antes del día 5 de cada mes.

Realizar el pago puntual de los honorarios contables, conforme al plan contratado, a más tardar el día 10 de cada mes.

3. Pago de Honorarios
Los honorarios contables se cobran de forma mensual, y su importe depende del régimen fiscal, número de comprobantes, empleados y servicios adicionales requeridos.

El servicio se brindará únicamente cuando el pago mensual esté al corriente.

Si el cliente omite el pago en el periodo correspondiente, se suspenderá la atención contable hasta regularizarse.

En caso de requerir atención en un periodo no cubierto, se cobrará una cuota adicional por regularización, según el volumen de trabajo pendiente y las fechas límite fiscales.

4. Requerimientos y Multas del SAT
Si durante un mes el cliente no ha cubierto el pago de sus honorarios y se presenta un requerimiento, carta invitación, auditoría, o requerimiento de cumplimiento por parte del SAT, se aplicará un cargo adicional por regularización y atención especial.

ELAD no se hace responsable por multas, recargos o sanciones fiscales ocasionadas por omisión de información o falta de pago de los servicios.

5. Responsabilidad del Cliente
Verificar que la información proporcionada sea veraz, completa y entregada en tiempo.

Atender en tiempo y forma las observaciones o requerimientos de ELAD para continuar con los procesos contables.

Pagar en tiempo todos los impuestos determinados por ELAD. El despacho no realiza pagos a nombre del cliente, salvo convenio expreso.

6. Alcance del Servicio
El servicio contable es mensual y cubre los meses que estén pagados y documentados.

Las declaraciones extemporáneas, correcciones o aclaraciones ante el SAT no están incluidas y se cotizarán por separado.

Los servicios de defensa fiscal, atención de auditorías o juicios fiscales son independientes y se ofrecerán mediante cotización especial.

7. Vigencia y Cancelación
Este acuerdo se considera vigente mientras el cliente mantenga sus pagos al corriente y entregue su documentación de forma regular.

El cliente puede cancelar el servicio en cualquier momento, notificando por escrito. Sin embargo, no se harán devoluciones por servicios ya iniciados o presentaciones realizadas.

8. Confidencialidad
ELAD se compromete a manejar con total confidencialidad la información fiscal, contable y financiera del cliente, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.

9. Modificaciones
Estos términos podrán ser actualizados en cualquier momento por ELAD. Las modificaciones se notificarán al cliente por medios electrónicos con al menos 7 días naturales de anticipación.

10. Jurisdicción
Este contrato se rige bajo las leyes fiscales y civiles mexicanas. Cualquier controversia será atendida en los tribunales competentes de Cuernavaca, Morelos, renunciando las partes a cualquier otro fuero.
Preguntas acerca de los Términos de Servicio deben ser enviadas a raul.alvarez@tecnologiasadministrativas.com`}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

        {/* footer */}
        {/* <TaeFooter /> */}
        {/* back to top, login y signin */}
        {/* <BackToTop /> */}
        {/* <Login /> */}
        {/* <Signin /> */}
    </>
);

export default TerminosCondiciones;
