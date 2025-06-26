import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarToggler,
  NavItem,
  Collapse,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";

// Import Logos
import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";
import LogoElad from "../../assets/images/LogoElad.png";

// Icons
import FeatherIcon from "feather-icons-react";

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
    };
  }

  toggle = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  // // --- AGREGADO: Manejar scroll para nav-sticky
  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll, true);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll, true);
  // }

  // handleScroll = () => {
  //   const scrollTop = window.scrollY;
  //   if (scrollTop > 50) {
  //     this.setState({ navSticky: true });
  //   } else {
  //     this.setState({ navSticky: false });
  //   }
  // };

  closeMenu = () => {
    this.setState({ isOpenMenu: false });
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Navbar
            expand="lg"
            fixed={this.props.top === true ? "top" : ""}
            className={
              (this.props.navClass ? this.props.navClass + " " : "") +
              "fixed-top navbar-custom sticky sticky-dark align-items-center"
            }
            id="navbar"
            container
          >

            <Link className="logo me-3" to="/">
              {this.props.imglight === true ? (
                <img src={logolight} alt="logo" height="26" />
              ) : (
                <img src={LogoElad} alt="logo" height="45" />
              )}
            </Link>
            {/* <NavbarToggler onClick={this.toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler> */}
            <NavbarToggler onClick={this.toggle} style={{ border: "none", background: "transparent" }}>
              <FeatherIcon icon="menu" size={32} />
            </NavbarToggler>

            <Collapse
              id="navbarCollapse"
              isOpen={this.state.isOpenMenu}
              className="navbar-collapse"
            >
              {/* <Nav className="navbar-nav navbar-center" id="navbar-navlist">
                {this.props.navItems.map((item, key) => {
                  // Si NO está sticky, pone gris claro, si sí, no pone estilo (usa CSS)
                  const isTransparent = !(this.props.navClass || '').includes("nav-sticky");
                  return (
                    <NavItem key={key}>
                      <Link
                        className="nav-link"
                        to={item.path}
                        style={isTransparent ? { color: "#e4e4e4", transition: "color .2s" } : {}}
                      >
                        {item.navheading}
                      </Link>
                    </NavItem>
                  );
                })}
              </Nav> */}

              <Nav className="navbar-nav navbar-center" id="navbar-navlist">
                {this.props.navItems.map((item, key) => {
                  const isTransparent = !(this.props.navClass || '').includes("nav-sticky");
                  return (
                    <NavItem key={key}>
                      <Link
                        className="nav-link"
                        to={item.path}
                        style={isTransparent ? { color: "#e4e4e4", transition: "color .2s" } : {}}
                        onClick={this.closeMenu}
                      >
                        {item.navheading}
                      </Link>
                    </NavItem>
                  );
                })}
              </Nav>


              {/* <ul className="list-inline ml-auto menu-social-icon mb-0 py-2 py-lg-0">
                <li className="list-inline-item ml-0">
                  <Link to="#" className="menu-social-link">
                    <FeatherIcon icon="facebook" className="icon-xs sw_1-5" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="menu-social-link">
                    <FeatherIcon icon="twitter" className="icon-xs sw_1-5" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="menu-social-link">
                    <FeatherIcon icon="instagram" className="icon-xs sw_1-5" />
                  </Link>
                </li>
                <li className="list-inline-item mr-0">
                  <Link to="#" className="menu-social-link">
                    <FeatherIcon icon="linkedin" className="icon-xs sw_1-5" />
                  </Link>
                </li>
              </ul> */}
            </Collapse>
          </Navbar>
        </Container>
      </React.Fragment>
    );
  }
}

export default NavbarPage;
