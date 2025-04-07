import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export const Footer = ({ darkMode, setDarkMode }) => {
  // State untuk mode gelap/terang
  return (
    <div className="footer bg-gray-150 text-gray-950 dark:bg-gray-950 dark:text-gray-200 min-w-screen ">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8 py-8">
        {/* Bagian singkat tentang kami */}
        <div className="about-footer mb-6 lg:mb-0">
          <h1 className="text-2xl font-bold">Analisis Sentimen</h1>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae</p>
        </div>

        {/* Bagian social media */}
        <div className="social-footer mb-6 lg:mb-0">
          <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold">Social Media</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="hover:text-gray-500">
                <i className="ri-whatsapp-line text-2xl"></i> Whatsapp
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-500">
                <i className="ri-instagram-line text-2xl"></i> Instagram
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-500">
                <i className="ri-github-line text-2xl"></i> Github
              </a>
            </li>
          </ul>
        </div>

        {/* Bagian Link */}
        <div className="link-footer mb-6 lg:mb-0">
          <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold">Link</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="hover:text-gray-500">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-500">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Bagian Mode Dark/Light */}
        <div className="mode-footer flex items-center">
          <p className="mr-2 text-lg font-semibold">Mode</p>
          <DarkModeToggle onChange={() => setDarkMode((prev) => !prev)} checked={darkMode} size={60} />
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center mt-6 text-gray-600 dark:text-gray-400">&copy; 2025 Kelompok 3. All rights reserved.</p>
    </div>
  );
};
