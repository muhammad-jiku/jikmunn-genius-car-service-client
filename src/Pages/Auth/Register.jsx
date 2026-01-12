/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../customHooks/useToken';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import PageTitle from '../Shared/PageTitle';
import SocialLogin from './SocialLogin';
import './styles/auth-attractive.css';
import './styles/auth-responsive.css';

const Register = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(user);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/login');
  };

  if (loading || updating) {
    return <Loading />;
  }

  if (token) {
    navigate('/home');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log('Updated profile');
  };

  return (
    <div className='container responsive-auth-container auth-attractive-box mx-auto my-5 p-3'>
      <PageTitle title='Register' />
      <h2 className='text-primary text-center mt-2'>Please Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Control
            ref={nameRef}
            type='text'
            name='name'
            placeholder='Enter Name'
            required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control
            ref={emailRef}
            type='email'
            name='email'
            placeholder='Enter email'
            required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Control
            ref={passwordRef}
            type='password'
            name='password'
            placeholder='Password'
            required
          />
        </Form.Group>
        <input
          onClick={() => setAgree(!agree)}
          type='checkbox'
          name='terms'
          id='terms'
        />
        {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
        <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor='terms'>
          Accept Genius Car Terms and Conditions
        </label>
        <Button
          disabled={!agree}
          variant='primary w-100 mx-auto d-block my-2'
          type='submit'
        >
          Register
        </Button>
      </Form>
      <SocialLogin />
      <p>
        Already have an account?{' '}
        <Link
          to='/login'
          className='text-primary pe-auto text-decoration-none'
          onClick={navigateLogin}
        >
          Login
        </Link>{' '}
      </p>
    </div>
  );
};

export default Register;
