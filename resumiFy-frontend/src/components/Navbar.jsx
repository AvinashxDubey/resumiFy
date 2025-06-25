import { NavLink, Link } from 'react-router-dom'
import ProfileDropdown from './ProfileDropdown';

const linkClass = " hover:text-red-700 dark:hover:text-gray-300 transition-colors duration-300 font-semibold";


const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-100 text-red-500 shadow dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">
        {/* Logo - Left */}
        <Link to='/' className="text-3xl font-bold">ResumiFy</Link>

        {/* Center Navigation Links */}
        <div className="space-x-24 sm:text-base">
          <NavLink to="/home" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
          <NavLink to="/contact-us" className={linkClass}>ContactUs</NavLink>
        </div>

        <ProfileDropdown />
      </div>
    </nav>
  )
}

export default Navbar
