import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import Slider from '../components/Slider';

const HomePage = () => {
  return (
    <div>
      <Slider />
      <Container style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <Row>
          <Col>
            <Card style={{ width: '260px' }}>
              <CardImg
                style={{ height: '160px', objectFit: 'cover' }}
                variant="top"
                src="https://s8.stc.all.kpcdn.net/woman/wp-content/uploads/2023/07/k-chemu-snitsya-okean-1.jpg"
              />
              <CardBody>
                <CardTitle>Card 1</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </CardText>
                <Button variant="secondary" className="w-100">
                  Learn more
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '260px' }}>
              <CardImg
                style={{ height: '160px', objectFit: 'cover' }}
                variant="top"
                src="https://vokrugsveta.ua/wp-content/uploads/2021/03/Depositphotos_2863176_s-2019.jpg"
              />
              <CardBody>
                <CardTitle>Card 1</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </CardText>
                <Button variant="secondary" className="w-100">
                  Learn more
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '260px' }}>
              <CardImg
                style={{ height: '160px', objectFit: 'cover' }}
                variant="top"
                src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/08-06-2020_Coral-Reef-Image_Solomon-Islands.jpg/image1170x530cropped.jpg"
              />
              <CardBody>
                <CardTitle>Card 1</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </CardText>
                <Button variant="secondary" className="w-100">
                  Learn more
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
