import { Col, Container, Row } from 'react-bootstrap';

const Benefits = () => {
  return (
    <Container className="py-5">
      <Row className="">
        <Col md={7} className="object-fit-cover overflow-hidden">
          <img
            src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/08-06-2020_Coral-Reef-Image_Solomon-Islands.jpg/image1170x530cropped.jpg"
            alt=""
            height="400"
          />
        </Col>
        <Col md={5} className="py-5 px-4">
          <h2>Sunshine</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            asperiores sapiente quod rem earum, a veritatis minima ipsa, beatae
            vero non unde? Fugit exercitationem sit, harum omnis dignissimos
            quos quia cupiditate alias neque reprehenderit assumenda aliquid
            suscipit quasi impedit. Pariatur reprehenderit, iure consequatur
            expedita, nemo similique ipsa eum unde sint voluptas harum at
            voluptatum ipsum dolorem est debitis. Praesentium, ratione!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Benefits;
