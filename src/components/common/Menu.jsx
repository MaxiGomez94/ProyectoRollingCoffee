import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/Coffee_Logo.png";

const Menu = () => {
  return (
    <div className="">
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container fluid>
          <Navbar.Brand href="">
            <img src={logo} alt="RollingCode Logo nav" className="img-fluid " width={200}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="  mb-2 ms-auto me-5 ">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Administrador</Nav.Link>
              <Nav.Link href="#link">Registro</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
