/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import
  {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
  } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../customHooks/useToken';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import PageTitle from '../Shared/PageTitle';
import SocialLogin from './SocialLogin';
import './styles/auth-attractive.css';
import './styles/auth-responsive.css';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [token, setToken] = useToken(user);

  if (loading || sending) {
    return <Loading />;
  }

  if (token) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className='text-danger'>Error: {error?.message}</p>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);

    // navigate(from, { replace: true });
  };

  const navigateRegister = (event) => {
    navigate('/register');
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
    } else {
      toast('please enter your email address');
    }
  };

  return (
    <div className='container responsive-auth-container auth-attractive-box mx-auto my-5 p-3'>
      <PageTitle title='Login' />
      <h2 className='text-primary text-center mt-2'>Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control
            ref={emailRef}
            type='email'
            placeholder='Enter email'
            required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Control
            ref={passwordRef}
            type='password'
            placeholder='Password'
            required
          />
        </Form.Group>
        <Button variant='primary w-100 mx-auto d-block mb-2' type='submit'>
          Login
        </Button>
      </Form>
      <SocialLogin />
      {errorElement}
      <p>
        New to Genius Car?{' '}
        <Link
          to='/register'
          className='text-primary text-decoration-none'
          onClick={navigateRegister}
        >
          Register
        </Link>{' '}
      </p>
      <p>
        Forget Password?<button
          className='btn btn-link text-primary text-decoration-none'
          onClick={resetPassword}
        >Reset Now
        </button>
      </p>
    </div>
  );
};

export default Login;
