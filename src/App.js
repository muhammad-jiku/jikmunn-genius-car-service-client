import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './Pages/About/About';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import RequireAuth from './Pages/Auth/RequireAuth';
import Experts from './Pages/Home/Experts';
import Home from './Pages/Home/Home';
import Services from './Pages/Home/Services';
import Checkout from './Pages/Orders/Checkout';
import Orders from './Pages/Orders/Orders';
import AddService from './Pages/Services/AddService';
import ManageServices from './Pages/Services/ManageServices';
import ServiceDetail from './Pages/Services/ServiceDetail';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/services/:serviceId' element={<ServiceDetail />} />
        <Route path='/services' element={<Services />} />
        <Route path='/experts' element={<Experts />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/checkout/:serviceId'
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route
          path='/addservice'
          element={
            <RequireAuth>
              <AddService />
            </RequireAuth>
          }
        />
        <Route
          path='/manage'
          element={
            <RequireAuth>
              <ManageServices />
            </RequireAuth>
          }
        />
        <Route
          path='/orders'
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
