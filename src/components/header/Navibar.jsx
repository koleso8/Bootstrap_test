import {
  Button,
  Container,
  Modal,
  ModalHeader,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navibar = () => {
  return (
    <>
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <NavLink to="/" className="navbar-brand">
            WebLogo
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-md-auto gap-4 text-white-50">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/users" className="nav-link">
                Users
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </Nav>
            <Nav className="gap-3">
              <Button variant="secondary" onClick={handleShow}>
                Log In
              </Button>
              <Button variant="secondary" onClick={handleShow}>
                Sign Out
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader></ModalHeader>
      </Modal>
    </>
  );
};

export default Navibar;
