import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import PageTitle from '../Shared/PageTitle';
import '../Shared/styles/page-attractive.css';

function AddService() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `${process.env.REACT_APP_API_URL}/api/services`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast('Service created successfully!');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='page-attractive-box'>
      <PageTitle title='Add Service' />
      <h2 className='page-attractive-title'>Add a New Service</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column'>
        <input
          placeholder='Name'
          {...register('name', { required: true, maxLength: 20 })}
          className='mb-2'
        />
        <input
          placeholder='Description'
          {...register('description')}
          className='mb-2'
        />
        <input
          placeholder='Price'
          type='number'
          {...register('price')}
          className='mb-2'
        />
        <input
          placeholder='Photo URL'
          type='text'
          {...register('img')}
          className='mb-2'
        />
        <input
          type='submit'
          value='Add Service'
          className='page-attractive-btn'
        />
      </form>
    </div>
  );
}

export default AddService;
