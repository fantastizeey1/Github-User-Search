import { Moon, Sun } from "lucide-react";

const Header = ({
  darkMode,
  toggleTheme,
}: {
  darkMode: boolean;
  toggleTheme: () => void;
}) => (
  <header className="flex justify-between items-center">
    <h1 className="text-h1 text-[26px] font-bold">devfinder</h1>
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 uppercase text-sm font-medium tracking-widest hover:opacity-75 transition-opacity"
      aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
    >
      {darkMode ? "Light" : "Dark"}
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  </header>
);

export default Header;
