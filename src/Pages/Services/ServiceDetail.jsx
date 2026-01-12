import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../customHooks/useServiceDetail';
import PageTitle from '../Shared/PageTitle';
import './styles/service-detail-attractive.css';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  return (
    <div className='service-detail-attractive'>
      <PageTitle title='Service Details' />
      <h2 className='service-detail-title'>Service Details</h2>
      <h3 className='service-detail-title'>{service?.name}</h3>
      {service?.img && (
        <img
          src={service.img}
          alt={service?.name}
          style={{
            maxWidth: '100%',
            borderRadius: '12px',
            marginBottom: '18px',
            boxShadow: '0 2px 8px rgba(60,80,120,0.10)',
          }}
        />
      )}
      <div className='service-detail-desc'>
        {service?.description || 'No description available.'}
      </div>
      <div className='service-detail-desc'>
        <strong>Price:</strong> {service?.price ? `$${service.price}` : 'N/A'}
      </div>
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <Link to={`/checkout/${serviceId}`}>
          <button className='service-detail-btn'>Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
