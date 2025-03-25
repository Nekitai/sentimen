export const Footer = () => {
  return (
    <div className="footer bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-white mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
        {/* Bagian social media */}
        <div className="social-footer mb-6 lg:mb-0">
          <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold">Social Media</p>
          <div className="flex space-x-4 mt-2">
            <a href="/" className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-500">
              <i className="ri-whatsapp-line text-2xl"></i>
            </a>
            <a href="/" className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-500">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="/" className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-500">
              <i className="ri-whatsapp-line"></i>
            </a>
          </div>
        </div>
        {/* Bagian Link */}
        <div className="link-footer mb-6 lg:mb-0">
          <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold">Link</p>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-gray-500">Home</a></li>
            <li><a href="/" className="hover:text-gray-500">About</a></li>
            <li><a href="/" className="hover:text-gray-500">Contact</a></li>
          </ul>
        </div>

        {/* Google Maps */}
        <div className="map w-full lg:w-1/2 h-64"></div>
      </div>

      {/* Copyright */}
      <p className="text-center mt-6 text-gray-600 dark:text-gray-400">&copy; 2025 Kelompok 3. All rights reserved.</p>
    </div>
  );
};
