import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from './index';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-6xl mx-auto px-4'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
