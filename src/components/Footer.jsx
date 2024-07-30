import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">FOODFLY</h3>
            <p className="text-sm">
              Your go-to platform for delicious and healthy meals delivered at
              your doorstep.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/menu" className="text-sm hover:underline">
                  Menu
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-sm hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-sm hover:underline">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-sm">
            © 2024 FOODFLY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
