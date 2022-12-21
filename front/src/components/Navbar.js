import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaMapMarkerAlt } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";



function NavbarComponent() {
  const { signout } = useAuth();
  const navigate = useNavigate();
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="Dashboard">
          {" "}
          <FaMapMarkerAlt /> Follower
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"></Nav.Link>
            <Nav.Link href="Dashboard">Dashboard</Nav.Link>
            <Nav.Link href="Produtos">Produtos</Nav.Link>
            <Nav.Link href="Etapas">Etapas</Nav.Link>
            <Nav.Link href="Equipes">Equipes</Nav.Link>
          </Nav> 
          <Nav>   
              <Nav.Link onClick={() => [signout(), navigate("/")]}>Você está logado | Sair</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
