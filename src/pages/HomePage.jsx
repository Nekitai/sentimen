import HeroImageLight from "../assets/img/data-analitic.png";
import HeroImageDark from "../assets/img/Data-analysis.png";
import BgLight from "../assets/img/4861242.jpg";
import BgDark from "../assets/img/6045432.jpg";
export const HomePage = ({ darkMode }) => {
  const heroImage = darkMode ? HeroImageDark : HeroImageLight;
  const bgImage = darkMode ? BgDark : BgLight;
  return (
    <div className="homepage pb-10 flex-grow">
      <div className="container mx-auto px-4 bg-cover bg-center min-h-screen min-w-screen bg-opacity-70 dark:bg-opacity-50 " style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero grid grid-cols-2 lg:grid-cols-2 gap-8 items-center pt-32">
          <div className="box">
            <h1 className="animate-typing finished text-5xl font-bold dark:text-white ">
              Analisis Sentimen
              <span className="animate-blink"></span>
            </h1>
            <p className="text-lg/tight text-gray-500 dark:text-gray-300 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deserunt at facere reiciendis ratione sapiente dolorem ullam molestias animi temporibus voluptas consequuntur voluptatibus unde, et quod alias eius vitae sunt.
            </p>
            <br />
            <a href="/" className="bg-gray-950 text-white py-2 px-4 rounded-2xl dark:bg-white dark:text-gray-950">
              Ayo coba <i className="ri-arrow-right-line"></i>
            </a>
          </div>
          <div className="box">
            <img src={heroImage} alt="data analitic" className="rounded items-center justify-center" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        
      </div>
    </div>
  );
};
