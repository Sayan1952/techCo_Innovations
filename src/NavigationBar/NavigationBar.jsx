import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/TCInno.png";
const NavigationBar = () => {
  return (
    <nav className="bg-[#151C34] p-4 m-0">
      <div className="flex items-center justify-between pr-10">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-16 pl-28" />
        </div>
        <ul className="flex gap-7 text-base pr-10">
          <li>
            <Link to="/" className="text-white hover:text-[#2BAD81]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-[#2BAD81]">
              About Us
            </Link>
          </li>
          <li>
            <a href="#" className="text-white hover:text-[#2BAD81]">
              Services
            </a>
          </li>
          <li>
            <Link
              to="/contact"
              href="#"
              className="text-white hover:text-[#2BAD81]"
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
