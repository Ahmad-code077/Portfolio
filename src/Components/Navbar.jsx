import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo/Logo.svg';

const Navbar = () => {
  return (
    <header className=' font-nav bg-[#1A0B2E] '>
      <nav className='flex items-center justify-evenly lg:justify-between h-20  max-w-6xl mx-auto px-4 lg:px-8'>
        <Link to={'/'}>
          <div>
            <img src={logo} alt='Logo of site' />
          </div>
        </Link>
        <ul className='flex justify-between text-white w-44 sm:w-72 '>
          <li
            className={` text-base font-semibold hover:text-[#7127BA] sm:text-xl `}
          >
            <NavLink exact={'true'} to={'/'} className='active-link'>
              Home
            </NavLink>
          </li>
          <li className='text-base font-semibold hover:text-[#7127BA] sm:text-xl '>
            <NavLink to={'/about'} className='active-link'>
              About
            </NavLink>
          </li>
          <li className='text-base font-semibold hover:text-[#7127BA] sm:text-xl '>
            <NavLink to={'/project'} className='active-link'>
              Project
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
