import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <h1 className="text-gray-950">Hello Word</h1>
      {/* Content */}
      <HomePage />  

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
