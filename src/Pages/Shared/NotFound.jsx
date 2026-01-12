import sleeping from '../../images/sleeping.jpg';
import PageTitle from './PageTitle';
import './styles/notfound-attractive.css';

const NotFound = () => {
  return (
    <div className='notfound-attractive'>
      <PageTitle title='404 - Page Not Found' />
      <h2 className='notfound-title'>404 - Page Not Found</h2>
      <div className='notfound-desc'>
        Oops! The page you are looking for does not exist or has been moved.
        <br />
        Our mechanic is sleeping right now. Try going back to the homepage or
        use the navigation menu.
      </div>
      <img className='notfound-img' src={sleeping} alt='Mechanic sleeping' />
      <a href='/' className='notfound-btn'>
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;
