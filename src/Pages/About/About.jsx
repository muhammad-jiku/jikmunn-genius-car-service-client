import PageTitle from '../Shared/PageTitle';
import '../Shared/styles/page-attractive.css';

const About = () => {
  return (
    <div
      className='page-attractive-box'
      style={{ maxWidth: 700, margin: '40px auto', textAlign: 'center' }}
    >
      <PageTitle title='About' />
      <h2 className='page-attractive-title'>About Genius Car Service</h2>
      <p
        style={{
          fontSize: '1.1em',
          color: '#1976d2',
          fontWeight: 500,
          marginBottom: 18,
        }}
      >
        Welcome to Genius Car Service! We are dedicated to providing top-notch
        car maintenance and repair services with a focus on quality,
        transparency, and customer satisfaction.
      </p>
      <div style={{ marginBottom: 18 }}>
        <h4 style={{ color: '#1565c0', fontWeight: 600 }}>Our Mission</h4>
        <p style={{ margin: 0 }}>
          To deliver reliable, affordable, and expert car care solutions that
          keep you safe and your vehicle running smoothly. We believe in
          building trust through honest service and skilled professionals.
        </p>
      </div>
      <div style={{ marginBottom: 18 }}>
        <h4 style={{ color: '#1565c0', fontWeight: 600 }}>Why Choose Us?</h4>
        <ul
          style={{
            textAlign: 'left',
            maxWidth: 500,
            margin: '0 auto 18px auto',
            color: '#333',
            fontSize: '1em',
          }}
        >
          <li>Certified and experienced mechanics</li>
          <li>Modern diagnostic tools and equipment</li>
          <li>Transparent pricing and no hidden fees</li>
          <li>Fast, friendly, and reliable service</li>
          <li>Customer-first approach and satisfaction guarantee</li>
        </ul>
      </div>
      <div style={{ marginBottom: 18 }}>
        <h4 style={{ color: '#1565c0', fontWeight: 600 }}>Contact Us</h4>
        <p style={{ margin: 0 }}>
          Have questions or need help? Reach out to our support team:
          <br />
          <strong>Email:</strong> support@geniuscar.com
          <br />
          <strong>Phone:</strong> +1 (800) 123-4567
        </p>
      </div>
      <div style={{ fontSize: '0.98em', color: '#888' }}>
        Thank you for choosing Genius Car Service. We look forward to serving
        you!
      </div>
    </div>
  );
};

export default About;
