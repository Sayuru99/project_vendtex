import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4">
          <h3 className="text-2xl font-bold mb-4">VendTEx</h3>
          <p className="text-gray-400">Where convenience meets innovation.</p>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-bold mb-4">Navigation</h3>
          <ul>
            <li>
              <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; {currentYear} VendTEx. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
