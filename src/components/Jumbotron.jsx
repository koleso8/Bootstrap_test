import { Container } from 'react-bootstrap';

const Jumbotron = () => {
  return (
    <div
      className="wrapp"
      style={{
        background:
          'url(https://vokrugsveta.ua/wp-content/uploads/2021/03/Depositphotos_2863176_s-2019.jpg) no-repeat fixed center',
        backgroundRepeat: 'no-repeat',
        WebkitBackgroundSize: 'cover',
        position: 'relative',
        zIndex: '-2',
      }}
    >
      <div
        className="overlay"
        style={{
          opacity: '0.5',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
      >
        <Container className="p-5">
          <h1 className="text-white">Jumbotrone</h1>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sunt
            veniam hic labore cupiditate odit et dicta quidem non. Odio.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Jumbotron;
