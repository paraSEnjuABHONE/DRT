import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <img src={logo} alt="" className='w-8 h-8 grayscale'/>
              <Link to="/" className="text-black text-xl font-semibold hover:text-gray-700 transition-colors duration-200">
                Donut Rescue Team
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                to="/data" 
                className="text-gray-700 hover:text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Data
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/data" 
              className="text-gray-700 hover:text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Data
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;