import React from "react";
import { Link } from "react-router-dom";
import LogoCompany from "../../assets/Logo/Brand-New-Logo.png";
import { useState } from "react";
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-8 ">
        <div className="flex justify-between">
          <div className="flex space-x-4 ">
            
            <div>
              <Link
                className="flex items-center py-4 px-2 text-gray-700"
                to="/"
              >
                <img className="mr-3 w-10 " src={LogoCompany} alt="logo" />
                <span className="font-bold text-xl">Sixeyes-tech</span>
              </Link>
            </div>
            
           
          </div>
          <div className="hidden md:flex items-center space-x-1">
              <Link
                className="py-4 px-3 text-gray-700 hover:text-gray-900"
                to="/"
              >
                Home
              </Link>
              <Link
                className="py-4 px-3 text-gray-700 hover:text-gray-900"
                to="/about"
              >
                About
              </Link>
           
            </div>
             {/* mobile */}
             <div className="md:hidden flex items-center">
              <button onClick={() => setNavbarOpen(!navbarOpen)}>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeEidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
        </div>

        <div
          className={
            " items-center" +
            (navbarOpen ? "block" : " hidden")
          }
        >
          <Link to='/' className="block py-2 px-4 text-sm hover:bg-gray-200">
            Home
          </Link>
          <Link to='/about' className="block py-2 px-4 text-sm hover:bg-gray-200">
            About
          </Link>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
