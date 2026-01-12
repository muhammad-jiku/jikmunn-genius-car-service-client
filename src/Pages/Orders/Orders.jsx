/* eslint-disable no-unused-vars */
import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle';
import '../Shared/styles/page-attractive.css';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `${process.env.REACT_APP_API_URL}/api/orders?email=${email}`;
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
    <div className='page-attractive-box'>
      <PageTitle title='Orders' />
      <h2 className='page-attractive-title'>Your Orders ({orders.length})</h2>
      {orders.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#888', margin: '24px 0' }}>
          <svg
            width='80'
            height='80'
            fill='none'
            viewBox='0 0 80 80'
            style={{ marginBottom: 16 }}
          >
            <circle
              cx='40'
              cy='40'
              r='38'
              stroke='#90caf9'
              strokeWidth='4'
              fill='#e3f0ff'
            />
            <path
              d='M25 50c2-6 8-10 15-10s13 4 15 10'
              stroke='#1976d2'
              strokeWidth='3'
              strokeLinecap='round'
            />
            <circle cx='32' cy='36' r='3' fill='#1976d2' />
            <circle cx='48' cy='36' r='3' fill='#1976d2' />
          </svg>
          <p style={{ fontWeight: 500, fontSize: '1.1em' }}>No orders found.</p>
          <p style={{ marginBottom: 8 }}>
            You haven't booked any services yet. Book a service to see your
            orders here!
          </p>
          <Link to='/services'>
            <button className='page-attractive-btn'>Browse Services</button>
          </Link>
        </div>
      ) : (
        <ul style={{ padding: 0, listStyle: 'none' }}>
          {orders.map((order) => (
            <li
              key={order?._id}
              style={{
                marginBottom: '20px',
                borderBottom: '1px solid #e0e0e0',
                paddingBottom: '14px',
              }}
            >
              <div>
                <strong>Service:</strong> {order?.service}
              </div>
              <div>
                <strong>Email:</strong>{' '}
                <span style={{ color: '#1976d2' }}>{order?.email}</span>
              </div>
              {order?.address && (
                <div>
                  <strong>Address:</strong> {order.address}
                </div>
              )}
              {order?.phone && (
                <div>
                  <strong>Phone:</strong> {order.phone}
                </div>
              )}
              {order?.createdAt && (
                <div style={{ fontSize: '0.95em', color: '#888' }}>
                  <strong>Date:</strong>{' '}
                  {new Date(order.createdAt).toLocaleString()}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Orders;
