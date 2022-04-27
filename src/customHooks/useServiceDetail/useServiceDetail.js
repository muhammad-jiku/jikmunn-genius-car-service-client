import { useEffect, useState } from 'react';

const useServiceDetail = (serviceId) => {
  const [service, setService] = useState([]);

  useEffect(() => {
    const url = `https://rocky-ravine-73760.herokuapp.com/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.log(err));
  }, [serviceId]);

  return [service];
};

export default useServiceDetail;
