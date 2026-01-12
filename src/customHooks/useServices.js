const { useState, useEffect } = require('react');

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/services`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return [services, setServices];
};

export default useServices;
