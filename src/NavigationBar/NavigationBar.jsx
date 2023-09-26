import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/TCInno.png";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#151C34] p-4 m-0">
      <div className="flex items-center justify-between  md:pr-10">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-16 md:pl-28" />
          </Link>
        </div>
        {/* Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        {/* Navigation Menu */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex-row md:flex flex-col flex-nowrap gap-7 text-base md:pr-10 mt-4 md:mt-0 absolute pr-2 top-12 right-2 text-right`}
        >
          <li>
            <Link to="/" className="text-white hover:text-[#4682a9]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-[#4682a9]">
              About Us
            </Link>
          </li>
          <li>
            <a href="#" className="text-white hover:text-[#4682a9]">
              Services
            </a>
          </li>
          <li>
            <Link
              to="/contact"
              href="#"
              className="text-white hover:text-[#4682a9]"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
