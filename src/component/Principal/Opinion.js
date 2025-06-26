import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Manuel from "../../assets/images/Principal/image4.png";
import Eduardo from "../../assets/images/Principal/image5.png";
import Jorge from "../../assets/images/Principal/image6.png";
import Cesar from "../../assets/images/Principal/image7.png";
import Alberto from "../../assets/images/Principal/image8.png";
import Marcelino from "../../assets/images/Principal/image9.png";

// 6 comentarios reales
const googleReviews = [
  {
    name: "Manuel Herrera",
    comment: "Estoy alegre porque logre conseguir mi proyecto a mi gusto , hay una buena comunicacion contratar sus seevicios es una buena atención donde puedes hablar con toda confianza y libertad para que los detalles sean proyectados.",
    rating: 5,
    photo: Manuel,
  },
  {
    name: "Eduardo Bautista",
    comment: "Excelente, muy atentos al cliente, resolvieron mis dudas y me apoyaron en el sitio web a mi negocio.",
    rating: 5,
    photo: Eduardo,
  },
  {
    name: "Cesar Hernández",
    comment: "Excelente su trabajo muy profesionales y puntual para la entrega. Los recomiendo ampliamente",
    rating: 5,
    photo: Cesar,
  },
  {
    name: "Jorge Gerardo Díaz Martinez",
    comment: "Excelente servicio recomendable",
    rating: 5,
    photo: Jorge,
  },
  {
    name: "Alberto Medina",
    comment: "Excelente atención, excelente seguimiento a la solicitud de servicio. Variedad de alternativas y si re todo seguridad de que estás tratando con personal establecido. Satisfecho y recomendado al 100%",
    rating: 5,
    photo: Alberto,
  },
  {
    name: "Marcelino Chambor",
    comment: "Excelente atención y es muy atento en todo momento",
    rating: 5,
    photo: Marcelino,
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2, // Cambia a 1 o 2 según tu diseño
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

const Testimonial = () => (
  <section className="section bg-light" id="testimonial">
    <Container>

      <Row className="justify-content-center mb-5">
        <Col md={8} lg={6} className="text-center">
          <h6 className="subtitle text-primary">Testimonios</h6>
          <h2 className="title">Lo que dicen nuestros clientes</h2>
          <p className="text-muted">
            Opiniones reales de personas que ya usan nuestros servicios.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center mb-4">
        <Col md={6} className="mb-3 d-flex justify-content-center">
          <iframe
            src="https://www.tiktok.com/embed/v2/7245690166256389382"
            width="325"
            height="580"
            allowFullScreen
            allow="encrypted-media"
            style={{ border: 0, borderRadius: '16px' }}
            title="TikTok Video 1"
          ></iframe>
        </Col>
        <Col md={6} className="mb-3 d-flex justify-content-center">
          <iframe
            src="https://www.tiktok.com/embed/v2/7242392939161275653"
            width="325"
            height="580"
            allowFullScreen
            allow="encrypted-media"
            style={{ border: 0, borderRadius: '16px' }}
            title="TikTok Video 2"
          ></iframe>
        </Col>
      </Row>


      <Row>
        <Col>
          <Slider {...sliderSettings}>
            {googleReviews.map((review, idx) => (
              <div key={idx}>
                <div className="bg-white p-4 shadow-sm rounded m-3">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={review.photo}
                      alt={review.name}
                      className="rounded-circle me-3"
                      width="50"
                      height="50"
                    />
                    <div>
                      <h6 className="mb-0 fw-bold">{review.name}</h6>
                      <div className="text-warning">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <FaStar key={i} className="me-1" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted fst-italic">
                    “{review.comment}”
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Testimonial;
