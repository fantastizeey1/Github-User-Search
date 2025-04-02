import { useTheme } from "../hooks/ThemeProvider";

import sunIcon from "../assets/icon-sun.svg";
import moonIcon from "../assets/icon-moon.svg";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between w-full items-center">
      <h1 className="text-h1 text-[26px] tracking-tighter font-bold">
        devfinder
      </h1>
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 uppercase text-sm font-bold tracking-widest hover:opacity-75 transition-opacity"
        aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      >
        {isDarkMode ? "Light" : "Dark"}
        <img
          src={isDarkMode ? sunIcon : moonIcon}
          alt={`${isDarkMode ? "Sun" : "Moon"} Icon`}
          className="w-5 h-5"
        />
      </button>
    </header>
  );
};

export default Header;
