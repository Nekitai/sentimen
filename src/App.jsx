import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { useState, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? true : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Tambahkan class "dark"
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark"); // Hapus class "dark"
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <HomePage  darkMode={darkMode}/>

      {/* Footer */}
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
