import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import useServiceDetail from '../../../customHooks/useServiceDetail/useServiceDetail';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const Checkout = () => {
  const navigate = useNavigate();
  // const [user, setUser] = useState({
  //   name: 'Akbar the great',
  //   email: 'muhammadjiku@gmail.com',
  //   address: '155/4, Nazir Road, Feni',
  //   phone: '01855613783',
  // });
  const [user, loading, error] = useAuthState(auth);
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  if (user) {
    console.log(user);
  }

  // const handleAddressChange = (e) => {
  //   console.log(e.target.value);
  //   const { address, ...rest } = user;
  //   const newAddress = e.target.value;
  //   const newUser = { address: newAddress, ...rest };
  //   console.log(newUser);
  //   setUser(newUser);
  // };

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
      .post('https://rocky-ravine-73760.herokuapp.com/order', order)
      // fetch('https://rocky-ravine-73760.herokuapp.com/order', {
      //   method: 'POST',
      //   headers: {
      //     'content-type': 'application/json',
      //   },
      //   body: JSON.stringify(order),
      // })
      .then((res) => {
        const { data } = res;
        if (data?.insertedId) {
          toast('Your order is booked!');
          e.target.reset();
        }
        // res.json();
      })
      // .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Please Checkout your booking for {service?.name} </h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user?.displayName}
          className="w-100 mb-2"
          required
          readOnly
          disabled
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user?.email}
          className="w-100 mb-2"
          required
          readOnly
          disabled
        />
        <br />
        <input
          type="text"
          name="service"
          placeholder="Service"
          value={service?.name}
          className="w-100 mb-2"
          required
          readOnly
          disabled
        />
        <br />
        <input
          type="text"
          name="address"
          placeholder="Address"
          // value={user?.address}
          // onChange={handleAddressChange}
          className="w-100 mb-2"
          required
          autoComplete="off"
        />
        <br />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          // value={user?.phone}
          className="w-100 mb-2"
          required
          autoComplete="off"
        />
        <br />
        <input
          type="submit"
          value="Place Order"
          className="btn btn-dark me-2"
        />
        <Button onClick={() => navigate('/addservice')}>Add Service</Button>
      </form>
    </div>
  );
};

export default Checkout;
