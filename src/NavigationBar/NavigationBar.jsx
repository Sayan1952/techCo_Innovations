import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className="bg-[#151C34] p-4 m-0">
        <div className="flex items-center justify-between pr-10">
          <div className="flex items-center space-x-4">
            <img
              src="/path/to/your/image.png"
              alt="Logo"
              className="h-8 w-8"
            />
            <span className="text-white text-lg">Company Name</span>
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link to='/' className="text-white hover:text-[#2BAD81]">
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' className="text-white hover:text-[#2BAD81]">
                About Us
              </Link>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#2BAD81]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#2BAD81]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default NavigationBar;