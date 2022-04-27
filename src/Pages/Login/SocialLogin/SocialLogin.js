import React from 'react';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../customHooks/useToken/useToken';

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [token] = useToken(googleUser || githubUser);
  const navigate = useNavigate();
  const location = useLocation();

  let errorElement;
  let from = location.state?.from?.pathname || '/';

  if (googleLoading || githubLoading) {
    return <Loading></Loading>;
  }

  if (googleError || githubError) {
    errorElement = (
      <p className="text-danger">
        Error: {googleError?.message} {githubError?.message}
      </p>
    );
  }

  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: '1px' }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: '1px' }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto my-2"
        >
          <img style={{ width: '30px' }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-50 d-block mx-auto"
        >
          <img style={{ width: '30px' }} src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
