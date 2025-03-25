import { useEffect, useState } from "react";

export const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark", "mocca");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else if (theme === "dark") {
            setTheme("mocca");
        } else {
            setTheme("light");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 mocca:bg-[#D2B48C] rounded-lg"
        >
            {theme === "dark"
                ? "🌙 Dark Mode"
                : theme === "mocca"
                ? "☕ Mocca Mode"
                : "☀️ Light Mode"}
        </button>
    );
};
