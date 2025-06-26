import React, { Component, Suspense } from "react";
import { Outlet } from "react-router-dom";

// Lazy imports
const Navbar = React.lazy(() => import("../../component/Navbar/NavBar"));
const Footer = React.lazy(() => import("../../component/Footer/Footer"));
const InicioFooter = React.lazy(() => import("../../component/Footer/InicioFooter"));
const Flechita = React.lazy(() => import("../../component/Tools/Flechita"));
const Sapito = React.lazy(() => import("../../component/Whatsapp"));

class Layout1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, path: "/", navheading: "Inicio" },
        { id: 2, path: "/servicio", navheading: "Servicio Contable" },
        { id: 3, path: "/contabilidad", navheading: "Contabilidad Electónica" },
        { id: 4, path: "/facturacion", navheading: "Facturación Electrónica" },
        { id: 5, path: "/imss", navheading: "Dar de alta en el IMSS" },
        { id: 6, path: "/contacto", navheading: "Contacto" },
      ],
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: "",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  // scrollNavigation = () => {
  //   const scrollup = document.documentElement.scrollTop;
  //   this.setState({
  //     navClass: scrollup > this.state.pos ? "nav-sticky" : "",
  //   });
  // };

  scrollNavigation = () => {
    const scrollup = document.documentElement.scrollTop;
    // Aquí cambia por un valor fijo, por ejemplo 50
    this.setState({
      navClass: scrollup > 50 ? "nav-sticky" : "",
    });
  };

  PreLoader = () => (
    <div id="preloader">
      <div id="status">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    </div>
  );

  render() {
    return (
      <Suspense fallback={this.PreLoader()}>
        <Navbar
          navItems={this.state.navItems}
          navClass={this.state.navClass}
          imglight={this.state.imglight}
        />
        <Outlet />
        <InicioFooter />
        <Flechita />
        <Sapito />

      </Suspense>
    );
  }
}

export default Layout1;
