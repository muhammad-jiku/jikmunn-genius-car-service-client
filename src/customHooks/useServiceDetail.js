import { useEffect, useState } from 'react';

const useServiceDetail = (serviceId) => {
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/api/services/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.log(err));
  }, [serviceId]);

  return [service];
};

export default useServiceDetail;
