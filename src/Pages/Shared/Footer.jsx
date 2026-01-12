import './styles/Footer.module.css';
import './styles/footer-attractive.css';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className='footer-attractive'>
      <div className='container footer-content'>
        <div className='footer-section'>
          <h5>About Us</h5>
          <ul>
            <li>
              <a href='/about'>Company Info</a>
            </li>
            <li>
              <a href='/services'>Our Services</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='footer-section'>
          <h5>Quick Links</h5>
          <ul>
            <li>
              <a href='/login'>Login</a>
            </li>
            <li>
              <a href='/register'>Register</a>
            </li>
            <li>
              <a href='/orders'>Orders</a>
            </li>
          </ul>
        </div>
        <div className='footer-section'>
          <h5>Follow Us</h5>
          <ul>
            <li>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <small>
          copyright &copy; {year} Genius Car Service. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
