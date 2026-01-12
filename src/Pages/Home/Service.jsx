import { useNavigate } from 'react-router-dom';
import './styles/Service.module.css';

const Service = ({ service }) => {
  const { _id, name, img, description, price } = service;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/services/${id}`);
  };
  return (
    <div className='service'>
      <img className='w-100' src={img} alt='' />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button
        onClick={() => navigateToServiceDetail(_id)}
        className='btn btn-primary'
      >
        Book: {name}
      </button>
    </div>
  );
};

export default Service;
