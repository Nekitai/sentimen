import HeroImageLight from "../assets/img/data-analitic.png";
import HeroImageDark from "../assets/img/Data-analysis.png";
import BgLight from "../assets/img/4861242.jpg";
import BgDark from "../assets/img/6045432.jpg";
export const HomePage = ({ darkMode }) => {
  const heroImage = darkMode ? HeroImageDark : HeroImageLight;
  const bgImage = darkMode ? BgDark : BgLight;
  const features = [
    {
      title: "🧠 Cek Sentimen",
      description: "Ketik atau paste teks, lalu lihat apakah itu positif, negatif, atau netral.",
    },
    {
      title: "🎯 Cocok Buat Kamu!",
      description: "Apakah kamu seorang pelaku bisnis, peneliti, atau hanya penasaran? Analisis sentimen ini bisa membantu!",
    },
    {
      title: "🚀 Coba Sekarang!",
      description: "Cukup masukkan teks → Klik Analisis → Lihat hasilnya langsung!",
    },
  ];
  return (
    <div className="homepage pb-10 flex-grow bg-gray-100 dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto px-4 bg-cover bg-center min-h-screen min-w-screen bg-opacity-70 dark:bg-opacity-50 " style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero grid grid-cols-2 lg:grid-cols-2 gap-8 items-center pt-32">
          <div className="box">
            <h1 className="animate-typing finished text-5xl font-bold dark:text-white">
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
          <div className="box justify-center items-center">
            <img src={heroImage} alt="data analitic" className="rounded items-center justify-center" />
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center py-12 px-7">
        <h2 className="text-3xl font-bold text-gray-950 dark:text-gray-100 mb-6">📌 Apa Kegunaan Website Ini?</h2>
        <p className="text-gray-950 dark:text-gray-100 max-w-2xl mx-auto mb-8">
          Platform ini dirancang untuk <strong>menganalisis sentimen</strong> dari teks secara otomatis, membantu memahami opini atau perasaan yang terkandung dalam suatu teks.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-950 dark:bg-gray-100 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-100 dark:text-gray-950 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 dark:text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
