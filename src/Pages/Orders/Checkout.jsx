/* eslint-disable no-unused-vars */
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useServiceDetail from '../../customHooks/useServiceDetail';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle';
import '../Shared/styles/page-attractive.css';

const Checkout = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  if (user) {
    console.log(user);
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      email: user?.email,
      service: service?.name,
      serviceId,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/orders`, order)
      .then((res) => {
        const { data } = res;
        if (data?.insertedId) {
          toast('Your order is booked!');
          e.target.reset();
        }
        res.json();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='page-attractive-box'>
      <PageTitle title='Checkout' />
      <h2 className='page-attractive-title'>
        Checkout your booking for {service?.name}
      </h2>
      <form onSubmit={handlePlaceOrder} className='d-flex flex-column'>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={user?.displayName}
          className='mb-2'
          required
          readOnly
          disabled
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={user?.email}
          className='mb-2'
          required
          readOnly
          disabled
        />
        <input
          type='text'
          name='service'
          placeholder='Service'
          value={service?.name}
          className='mb-2'
          required
          readOnly
          disabled
        />
        <input
          type='text'
          name='address'
          placeholder='Address'
          className='mb-2'
          required
        />
        <input
          type='text'
          name='phone'
          placeholder='Phone Number'
          className='mb-2'
          required
        />
        <Button type='submit' className='page-attractive-btn'>
          Place Order
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
