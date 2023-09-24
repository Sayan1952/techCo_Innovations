import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom for routing
import logo from "../assets/TCInno.png";

function Footer() {
  // Function to generate a random address in Dhaka

  return (
    <footer className="bg-black text-white px-8 pb-16 pt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* 1st Column: Logo */}
        <div className="text-center">
          <img src={logo} alt="Logo" className=" h-24" />
        </div>

        {/* 2nd Column: Navigation */}
        <div className="text-left text-md">
          <ul className="grid grid-cols-1 gap-y-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* 3rd Column: Random Address */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2 text-[#487a78] font-bold text-xl">
            Address:
          </h3>
          <p>
            92 Mohandas Drive, Markham, ON L3S 0E4 (Canada) 80/12 Mymensingh
            Road, Rahat Tower, Suite-1102 (Level - 11), Dhaka-1000 (Bangladesh)
          </p>
        </div>

        {/* 4th Column: Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="/facebook-icon.png"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="/twitter-icon.png"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="/instagram-icon.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
