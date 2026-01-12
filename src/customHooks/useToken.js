import axios from 'axios';
import { useEffect, useState } from 'react';

const useToken = (user) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const getToken = async () => {
      console.log(user);
      const email = user?.user?.email;
      if (email) {
        const { data } = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/auth/login`,
          {
            email,
          }
        );
        console.log(data);
        setToken(data.accessToken);
        localStorage.setItem('accessToken', data.accessToken);
      }
    };
    getToken();
  }, [user]);
  return [token, setToken];
};

export default useToken;
