import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="navbar fixed w-full bg-white/70 dark:bg-gray-950/80 backdrop-blur-md transition-all py-4 z-10">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex justify-between items-center">
          <div className="logo">
            <h1 className="text-2xl font-bold px-4">
              <Link to="/" className="text-gray-950 dark:text-white">
                Analisis Sentimen
              </Link>
            </h1>
          </div>

          {/* Menu untuk Desktop */}
          <ul className="hidden lg:flex lg:gap-12 gap-8">
            <li>
              <Link to="/" className="font-medium opacity-75 text-gray-950 dark:text-gray-100">
                Home
              </Link>
            </li>
            <li>
              <Link to="/analisis" className="font-medium opacity-75 text-gray-950 dark:text-gray-100">
                Analisis
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-medium opacity-75 text-gray-950 dark:text-gray-100">
                About
              </Link>
            </li>
          </ul>

          {/* Hamburger Button */}
          <div className="lg:hidden relative">
            <button onClick={toggleMenu} className="text-gray-950 dark:text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-20 mx-auto">
                <Link to="/" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Home
                </Link>
                <Link to="/analisis" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Analisis
                </Link>
                <Link to="/about" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700">
                  About
                </Link>
              </div>
            )}
          </div>
          <div className="mode-footer flex items-center">
            <p className="mr-2 text-gray-950 text-lg font-semibold dark:text-gray-100">Mode</p>
            <DarkModeToggle onChange={() => setDarkMode((prev) => !prev)} checked={darkMode} size={60} />
          </div>
        </div>
      </div>
    </div>
  );
};
