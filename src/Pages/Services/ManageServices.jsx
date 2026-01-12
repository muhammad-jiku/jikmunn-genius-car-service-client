import useServices from '../../customHooks/useServices';
import PageTitle from '../Shared/PageTitle';
import '../Shared/styles/page-attractive.css';

function ManageServices() {
  const [services, setServices] = useServices();
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure want to delete?');
    if (proceed) {
      console.log('Deleted id is ', id);
      const url = `${process.env.REACT_APP_API_URL}/api/services/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remainingService = services.filter(
            (service) => service._id !== id
          );
          setServices(remainingService);
        })

        .catch((err) => console.log(err));
    }
  };
  return (
    <div className='page-attractive-box'>
      <PageTitle title='Manage Services' />
      <h2 className='page-attractive-title'>Manage Services</h2>
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {services.map((service) => (
          <li
            key={service?._id}
            style={{
              marginBottom: '16px',
              borderBottom: '1px solid #e0e0e0',
              paddingBottom: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>
              <strong>{service?.name}</strong>
            </span>
            <button
              onClick={() => handleDelete(service?._id)}
              className='page-attractive-btn'
              style={{
                padding: '6px 18px',
                fontSize: '1rem',
                marginLeft: '12px',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageServices;
