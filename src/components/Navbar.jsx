import React, { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="navbar fixed w-full bg-white/70 dark:bg-gray-900/80 backdrop-blur-md transition-all py-4 z-10">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex justify-between items-center">
          <div className="logo">
            <h1 className="text-2xl font-bold px-4">
              <a href="#" className="text-gray-950 dark:text-white">Analisis Sentimen</a>
            </h1>
          </div>
          
          {/* Menu untuk Desktop */}
          <ul className="hidden lg:flex lg:gap-12 gap-8 ">
            <li><a href="#" className="font-medium opacity-75 text-gray-950 dark:text-gray-100">Home</a></li>
            <li><a href="#" className="font-medium opacity-75 text-gray-950 dark:text-gray-100">Analisis</a></li>
            <li><a href="#" className="font-medium opacity-75 text-gray-950 dark:text-gray-100">About</a></li>
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
                <a href="#" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700">Home</a>
                <a href="#" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700">Analisis</a>
                <a href="#" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700">About</a>
              </div>
            )}
          </div>
          
          <div className="social px-8">
            <a href="/" className="flex items-center justify-center w-10 h-10 bg-gray-950 text-white rounded-full hover:bg-gray-800 transition-all dark:bg-gray-100 dark:text-gray-950">
              <svg className="w-6 h-6  text-white dark:text-gray-950" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
