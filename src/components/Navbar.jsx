export const Navbar = () => {
  return (
    <div className="navbar fixed  w-full bg-gray-100 text-gray-950 dark:bg-gray-950 dark:text-white transition-all py-4 z-10">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex justify-between items-center">
          <div className="logo">
            <h1 className="text-2xl font-bold">
              <a href="#">Analisis Sentimen</a>
            </h1>
          </div>
          <ul className="flex gap-4">
            <li>
              <a href="#" className="font-medium opacity-75">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="font-medium opacity-75">
                Analisis
              </a>
            </li>
            <li>
              <a href="#" className="font-medium opacity-75 ">
                About
              </a>
            </li>
          </ul>
          <div className="social">
            <a href="/" className="font-Bold bg-gray-950 text-white px-4 py-2 rounded-full hover:bg-gray-800 hover:text-gray-50 transition-all dark:bg-gray-100 dark:text-gray-950">
              Social Media
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
