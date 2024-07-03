import { Link } from 'react-router-dom';
import logo from '../assets/logo/Logo.svg';
import about from '../Path/About';
const Navbar = () => {
  return (
    <header className='drop-shadow[0_6px_22px_-3px] font-nav'>
      <nav className='flex items-center justify-evenly h-20 bg-[#1A0B2E]'>
        <div>
          <img src={logo} alt='Logo of site' />
        </div>
        <ul className='flex justify-between text-white w-44 sm:w-72 '>
          <li className='text-base font-semibold hover:text-[#7127BA] sm:text-xl '>
            <Link to={'/'}>Home</Link>
          </li>
          <li className='text-base font-semibold hover:text-[#7127BA] sm:text-xl '>
            <Link to={'/about'}>About</Link>
          </li>
          <li className='text-base font-semibold hover:text-[#7127BA] sm:text-xl '>
            <Link to={'/project'}>Project</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
