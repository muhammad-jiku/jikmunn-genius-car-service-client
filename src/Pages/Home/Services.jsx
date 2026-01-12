import { useEffect, useState } from 'react';
import Service from './Service';
import './styles/Services.module.css';
import './styles/services-responsive.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id='services' className='container my-5'>
      <div className='row'>
        <h1 className='text-primary text-center my-5'> Our Services</h1>
        <div className='services-flex-container w-100'>
          {services.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
