import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../customHooks/useToken';
import auth from '../../firebase.init';
import google from '../../images/social/google.png';
import Loading from '../Shared/Loading';

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [token] = useToken(googleUser);
  const navigate = useNavigate();
  const location = useLocation();

  let errorElement;
  let from = location.state?.from?.pathname || '/';

  if (googleLoading) {
    return <Loading />;
  }

  if (googleError) {
    errorElement = <p className='text-danger'>Error: {googleError?.message}</p>;
  }

  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className='d-flex align-items-center'>
        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
        <p className='mt-2 px-2'>or</p>
        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
      </div>
      {errorElement}
      <div className=''>
        <button
          onClick={() => signInWithGoogle()}
          className='btn btn-info w-100 d-block mx-auto my-2'
        >
          <img style={{ width: '30px' }} src={google} alt='' />
          <span className='px-2'>Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
