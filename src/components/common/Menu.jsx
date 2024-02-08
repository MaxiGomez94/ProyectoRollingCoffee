import { Navbar, Nav, Container } from "react-bootstrap";
import { Link,NavLink } from "react-router-dom";
import logo from "../../assets/Coffee_Logo.png";


const Menu = () => {
  return (
    <div className="bg-nav sticky-top">
      <Navbar expand="lg" className=" bg-body-tertiary fw-bold">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="RollingCode Logo nav"
              className="img-fluid"
              width={200}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mb-2 ms-auto me-5">
              <NavLink end to="/" className="nav-link">
                Inicio
              </NavLink>
              <NavLink end to="/admin" className="nav-link">
                Administrador
              </NavLink>
              <NavLink end to="/registro" className="nav-link">
                Registro
              </NavLink>
              <NavLink end to="/login" className="nav-link">
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
