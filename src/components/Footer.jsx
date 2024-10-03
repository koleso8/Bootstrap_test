import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-white">
      <Container className="p-4 flex-column align-items-center justify-content-center">
        <p className="m-0 d-block text-center">Web Bootstrap</p>
      </Container>
    </Container>
  );
};

export default Footer;
