import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  createBrowserRoute, RouterProvider, Route,
} from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
      <img
              src="/icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        <Navbar.Brand href="App">Follower</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"></Nav.Link>
            <Nav.Link href="Dashboard">Dashboard</Nav.Link>
            <NavDropdown title="Produtos" id="basic-nav-dropdown">
              <NavDropdown.Item href="Produtos">Todos os Produtos</NavDropdown.Item>
              <NavDropdown.Item href="NovoProduto">Novo Produto</NavDropdown.Item>
              </NavDropdown>
            <Nav.Link href="Cadeias">Cadeias Produtivas</Nav.Link>
            <Nav.Link href="Etapas">Etapas</Nav.Link>
            <Nav.Link href="Equipes">Equipes</Nav.Link>
            <Nav.Link href="Relatorios">Relatórios</Nav.Link>
            <Nav.Link href="Acesso">Entrar / Registrar-se</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;