import PageTitle from '../Shared/PageTitle';
import Banner from './Banner';
import Experts from './Experts';
import Services from './Services';

const Home = () => {
  return (
    <>
      <PageTitle title='Home' />
      <Banner />
      <Services />
      <Experts />
    </>
  );
};

export default Home;
