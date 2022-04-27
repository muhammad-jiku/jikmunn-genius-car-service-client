import React from 'react';
import { useForm } from 'react-hook-form';

function AddService() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/services`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Please add service:</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <input
          placeholder="Name"
          {...register('name', { required: true, maxLength: 20 })}
          className="mb-2"
        />
        <input
          placeholder="Description"
          {...register('description')}
          className="mb-2"
        />
        <input
          placeholder="Price"
          type="number"
          {...register('price')}
          className="mb-2"
        />
        <input
          placeholder="Photo URL"
          type="text"
          {...register('img')}
          className="mb-2"
        />
        <input type="submit" value="Add Service" />
      </form>
    </div>
  );
}

export default AddService;
