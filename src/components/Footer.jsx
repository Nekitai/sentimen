export const Footer = () => {
  return (
    <div className="footer bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-white mt-20 ">
      <div className="container mx-auto pl-7 px-4 py-4 items-center justify-between">
        <p className="text-center">
          &copy; <span>2025 Kelompok 3. All rights reserved.</span>
        </p>
        <div className="social-footer">
          <div>
            <a href="/">
              <i className="ri-whatsapp-line text-2xl"></i>
            </a>
            <a href="/">
              <i className="ri-twitter-line text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
