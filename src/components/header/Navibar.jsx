import { useState } from 'react';
import {
  Button,
  Container,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navibar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Modal show={show} onHide={handleClose} data-bs-theme="dark">
        <ModalHeader closeButton>
          <ModalTitle className="text-light">Log In</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup controlId="formBasicEmail">
              <FormLabel>Email Address</FormLabel>
              <FormControl type="email" placeholder="Enter email" />
              <FormText className="text-muted">
                We`ll never share ypur email with anyone else
              </FormText>
            </FormGroup>
            <FormGroup controlId="formBasicPassword" className="mb-4">
              <FormLabel>Password</FormLabel>
              <FormControl type="password" placeholder="Enter password" />
            </FormGroup>
            <FormGroup controlId="formBasicCheckbox">
              <FormCheck
                type="checkbox"
                label="Remember me"
                className="text-light"
              />
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Navibar;
