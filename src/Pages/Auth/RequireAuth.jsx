/* eslint-disable no-unused-vars */
import {
  useAuthState,
  useSendEmailVerification,
} from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  if (user?.providerData[0]?.providerId === 'password' && !user.emailVerified) {
    return (
      <div
        className='container responsive-auth-container auth-attractive-box mx-auto my-5 p-4'
        style={{ maxWidth: 500, textAlign: 'center' }}
      >
        <h3 className='text-danger mb-3'>Your Email is not verified!</h3>
        <p className='mb-3' style={{ color: '#1976d2', fontWeight: 500 }}>
          For your security and to access all features, please verify your email
          address.
          <br />
          We have sent a verification link to your email. If you did not receive
          it, you can resend below.
        </p>
        <button
          className='btn btn-primary page-attractive-btn mb-2'
          style={{ minWidth: 220 }}
          onClick={async () => {
            await sendEmailVerification();
            toast('Verification email sent! Please check your inbox.');
          }}
        >
          Resend Verification Email
        </button>
        <div className='mt-3' style={{ fontSize: '0.98em', color: '#888' }}>
          <span>
            Didn't get the email? Check your spam folder or update your email
            address in your profile settings.
          </span>
        </div>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
