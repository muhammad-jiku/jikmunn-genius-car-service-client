const { useState, useEffect } = require('react');

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://rocky-ravine-73760.herokuapp.com/services')
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return [services, setServices];
};

export default useServices;
