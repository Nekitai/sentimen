import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { ThemeToggle } from "./components/Tonggle"; 

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <HomePage />  

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
