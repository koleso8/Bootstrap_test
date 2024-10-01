import { Carousel } from 'react-bootstrap';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src="https://s8.stc.all.kpcdn.net/woman/wp-content/uploads/2023/07/k-chemu-snitsya-okean-1.jpg"
          alt="vawe"
          className="d-block w-100 "
          style={{ height: '600px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quam
            tempora hic pariatur accusamus sunt minus nihil veritatis delectus
            nesciunt!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://vokrugsveta.ua/wp-content/uploads/2021/03/Depositphotos_2863176_s-2019.jpg"
          alt="vawe"
          className="d-block w-100 "
          style={{ height: '600px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quam
            tempora hic pariatur accusamus sunt minus nihil veritatis delectus
            nesciunt!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/08-06-2020_Coral-Reef-Image_Solomon-Islands.jpg/image1170x530cropped.jpg"
          alt="vawe"
          className="d-block w-100"
          style={{ height: '600px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quam
            tempora hic pariatur accusamus sunt minus nihil veritatis delectus
            nesciunt!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
