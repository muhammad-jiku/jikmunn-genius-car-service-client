import React from 'react';
import useServices from '../../customHooks/useServices/useServices';

function ManageServices() {
  const [services, setServices] = useServices();
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure   want to delete?');
    if (proceed) {
      console.log('Deleted id is ', id);
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remainingService = services.filter(
            (serve) => serve?._id !== id
          );
          setServices(remainingService);
        })

        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <h2>Manage services:</h2>
      <ul>
        {services.map((service) => (
          <li key={service?._id}>
            <h5>{service?.name} </h5>
            <button onClick={() => handleDelete(service?._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageServices;
