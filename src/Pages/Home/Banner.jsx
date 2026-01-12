import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/banner1.jpg';
import banner2 from '../../images/banner/banner2.jpg';
import banner3 from '../../images/banner/banner3.jpg';
import './styles/carousel-attractive.css';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className='custom-carousel my-4'
    >
      <Carousel.Item>
        <img className='d-block w-100' src={banner1} alt='First slide' />
        <Carousel.Caption>
          <h3>Expert Car Care, Anytime</h3>
          <p>
            Drive with confidence. Our certified mechanics keep your vehicle
            running smoothly and safely.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={banner2} alt='Second slide' />
        <Carousel.Caption>
          <h3>Modern Diagnostics & Fast Service</h3>
          <p>
            We use the latest technology to diagnose and fix your car quickly,
            so you can get back on the road.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={banner3} alt='Third slide' />
        <Carousel.Caption>
          <h3>Customer-First Approach</h3>
          <p>
            Transparent pricing, honest advice, and a satisfaction
            guarantee—your car is in good hands with us.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
