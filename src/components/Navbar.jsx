export const Navbar = () => {
  return (
    <div className="navbar fixed  w-full bg-gray-100 text-gray-950 dark:bg-gray-950 dark:text-white transition-all py-4 z-10">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex justify-between items-center">
          <div className="logo">
            <h1 className="text-gray-950 shadow-amber-50 dark:text-gray-100 dark:shadow-2xs text-2xl font-bold">Analisis Sentimen</h1>
          </div>
          <ul className="flex gap-4">
            <li>
              <a href="#" className="font-medium opacity-75">Home</a>
            </li>
            <li>
              <a href="#">Analisis</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <div className="social">
            <a href="/">Social Media</a>
          </div>
        </div>
      </div>
    </div>
  );
};
