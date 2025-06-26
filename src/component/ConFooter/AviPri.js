import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import fondoAviso from "../../assets/images/Footer/image3.png"; // Ajusta la ruta según tu estructura

const AvisoPrivacidad = () => (
    <>

    <div
  style={{
    position: "relative",
    width: "100%",
    minHeight: 240,
    background: `url(${fondoAviso}) center center / cover no-repeat`,
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
      fontSize: "4vw",
      letterSpacing: 2,
      textAlign: "center",
      padding: "30px 0",
      margin: 0,
    }}
  >
    Aviso de Privacidad
  </h1>
</div>

  <section style={{ background: "#f8fafc", minHeight: "100vh", padding: "60px 0" }}>
    <Container>
      <Row className="justify-content-center">
        <Col md={11} lg={9}>
          <div
            style={{
              background: "#fff",
              borderRadius: 14,
              boxShadow: "0 2px 10px rgba(24,54,122,0.10)",
              padding: "2.5rem 2rem",
            }}
          >
            <h1 className="fw-bold mb-4 text-primary" style={{ fontSize: "2.1rem" }}>
              Aviso de privacidad integral
            </h1>
            <div style={{ color: "#222", fontSize: "1.05rem", lineHeight: 1.85 }}>
              <p>
                <strong>ELAD Y ASOCIADOS CONSULTORES</strong> mejor conocido como <strong>ELAD®️ y asociados</strong>,
                con domicilio en Carr. Cayaco – Puerto Marqués, Piedra Roja, El Coloso, 39810 Acapulco de Juárez, Gro. y portal de internet
                <a href="https://eladyasociados.com/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 5 }}>https://eladyasociados.com/</a>,
                es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
              </p>
              <h5 className="mt-4 mb-2 text-primary" style={{ fontWeight: 700 }}>¿Para qué fines utilizaremos sus datos personales?</h5>
              <p>
                Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
              </p>
              <ul>
                <li>Servicios contables</li>
                <li>Servicios fiscales</li>
                <li>Servicios Administrativos</li>
                <li>Servicio REPSE</li>
              </ul>

              <h5 className="mt-4 mb-2 text-primary" style={{ fontWeight: 700 }}>¿Qué datos personales utilizaremos para estos fines?</h5>
              <p>
                Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
              </p>
              <ul>
                <li>Datos de identificación y contacto</li>
                <li>Datos laborales</li>
              </ul>

              <h5 className="mt-4 mb-2 text-primary" style={{ fontWeight: 700 }}>
                ¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso o ejercer la revocación de consentimiento?
              </h5>
              <p>
                Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
              </p>
              <p>
                Para el ejercicio de cualquiera de los derechos ARCO, debe enviar una petición vía correo electrónico a&nbsp;
                <a href="https://eladyasociados.com/" target="_blank" rel="noopener noreferrer">https://eladyasociados.com/</a> y deberá contener:
              </p>
              <ul>
                <li>Nombre completo del titular.</li>
                <li>Domicilio.</li>
                <li>Teléfono.</li>
                <li>Correo electrónico usado en este sitio web.</li>
                <li>Copia de una identificación oficial adjunta.</li>
                <li>Asunto «Derechos ARCO»</li>
                <li>
                  Descripción el objeto del escrito, los cuales pueden ser de manera enunciativa más no limitativa los siguientes: Revocación del consentimiento para tratar sus datos personales; y/o Notificación del uso indebido del tratamiento de sus datos personales; y/o Ejercitar sus Derechos ARCO, con una descripción clara y precisa de los datos a Acceder, Rectificar, Cancelar o bien, Oponerse. En caso de Rectificación de datos personales, deberá indicar la modificación exacta y anexar la documentación soporte; es importante en caso de revocación del consentimiento, que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.
                </li>
              </ul>
              <p>
                <strong>¿En cuántos días le daremos respuesta a su solicitud?</strong> 5 días<br />
                <strong>a) ¿Por qué medio le comunicaremos la respuesta a su solicitud?</strong><br />
                Al mismo correo electrónico de dónde se envió la petición.
              </p>

              <h5 className="mt-4 mb-2 text-primary" style={{ fontWeight: 700 }}>El uso de tecnologías de rastreo en nuestro portal de internet</h5>
              <p>
                Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página. Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes:
              </p>
              <ul>
                <li>Identificadores, nombre de usuario y contraseñas de sesión</li>
                <li>Región en la que se encuentra el usuario</li>
              </ul>
              <p>
                Estas cookies, web beacons y otras tecnologías pueden ser deshabilitadas. Para conocer cómo hacerlo, consulte el menú de ayuda de su navegador. Tenga en cuenta que, en caso de desactivar las cookies, es posible que no pueda acceder a ciertas funciones personalizadas en nuestros sitio web.
              </p>

              <h5 className="mt-4 mb-2 text-primary" style={{ fontWeight: 700 }}>¿Cómo puede conocer los cambios en este aviso de privacidad?</h5>
              <p>
                El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas. Nos comprometemos a mantener actualizado este aviso de privacidad sobre los cambios que pueda sufrir y siempre podrá consultar las actualizaciones que existan en el sitio web&nbsp;
                <a href="https://eladyasociados.com/" target="_blank" rel="noopener noreferrer">https://eladyasociados.com/</a>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
    </>
);

export default AvisoPrivacidad;
