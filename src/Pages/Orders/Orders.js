import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate('/');

  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `https://rocky-ravine-73760.herokuapp.com/orders?email=${email}`;
      try {
        const response = await axiosPrivate.get(url);
        // console.log(response)
        const { data } = response;
        setOrders(data);
      } catch (error) {
        console.log(error);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate('/login');
        }
      }
    };
    getOrders();
  }, [user, navigate]);
  return (
    <div>
      {console.log(orders)}
      <h1>Orders added : {orders.length} </h1>
      {orders.map((order) => (
        <div key={order?._id}>
          <p>
            {order?.service} is checked out by {order?.email}{' '}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Orders;
