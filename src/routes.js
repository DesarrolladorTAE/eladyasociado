// import Layout1 from "../src/pages/Layout1/Layout1";
// import Layout2 from "../src/pages/Layout2/Layout2";
// import Layout3 from "../src/pages/Layout3/Layout3";
// import Layout4 from "../src/pages/Layout4/Layout4";
// import Layout5 from "../src/pages/Layout5/Layout5";

// const routes = [
//   { path: "/layout2", component: <Layout2 /> },
//   { path: "/layout3", component: <Layout3 /> },
//   { path: "/layout4", component: <Layout4 /> },
//   { path: "/layout5", component: <Layout5 /> },
//   { path: "/", component: <Layout1 /> },
// ];

// export default routes;

import Layout1 from "../src/pages/Layout1/Layout1";
import Servicio from "../src/pages/Layout1/Servicio";
import InicioPage from "../src/pages/Layout1/Principal"; // si ya existe tu contenido de inicio
import ConEle from "../src/pages/Layout1/ConEle";
import FacEle from "../src/pages/Layout1/Facturacion";
import Contacto from "../src/pages/Layout1/Contacto";
import Imss from "../src/pages/Layout1/AltaImss";

import Nosotros from "../src/component/ConFooter/Nosotros";
import AvisoPrivacidad from "../src/component/ConFooter/AviPri";
import TerminosCondiciones from "../src/component/ConFooter/TerCon";
// import QuienesSomos from "../../component/Footer/InicioFooter";

const routes = [
  {
    path: "/",
    element: <Layout1 />, // ✅ mantiene el Navbar
    children: [
      { path: "", element: <InicioPage /> },
      { path: "servicio", element: <Servicio /> }, // ✅ así lo haces accesible desde /Servicio
      { path: "contabilidad", element: <ConEle /> }, // ✅ así lo haces accesible desde /Servicio
      { path: "facturacion", element: <FacEle /> }, // ✅ así lo haces accesible desde /Servicio
      { path: "imss", element: <Imss /> },

      { path: "contacto", element: <Contacto /> }, // ✅ así lo haces accesible desde /Servicio

      // Rutas nuevas:
      { path: "nosotros", element: <Nosotros /> },
      { path: "aviso-privacidad", element: <AvisoPrivacidad /> },
      { path: "terminos-condiciones", element: <TerminosCondiciones /> },
    ],
  },
];

export default routes;

