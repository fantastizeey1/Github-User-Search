import { useTheme } from "../hooks/ThemeProvider";

interface SearchBarProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  searchUser: (e: React.FormEvent) => void;
  isLoading: boolean;
  error: string;
}

const SearchBar = ({
  username,
  setUsername,
  searchUser,
  isLoading,
  error,
}: SearchBarProps) => {
  const { isDarkMode } = useTheme(); // Use Theme Context

  return (
    <form onSubmit={searchUser} className="relative">
      <div
        className={`p-2 flex items-center justify-between sm:p-4 rounded-[15px] lg:min-w-[729px] w-full h-[60px] md:h-[69px] shadow-md relative ${
          isDarkMode ? "bg-card-dark" : "bg-card-light"
        }`}
      >
        {/* Search Icon */}
        <img
          src="/icon-search.svg"
          alt="Search Icon"
          className="text-primary w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 ml-2"
        />

        {/* Input Field */}

        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={`flex-1 bg-transparent text-body focus:outline-none placeholder:${
            isDarkMode ? "text-dark-text" : "text-light-text"
          } ${
            isDarkMode ? "text-white" : "text-black"
          } px-4 caret-[#0079FF] focus:caret-[#0079FF] lg:max-w-[500px] pr-[120px] truncate overflow-hidden whitespace-nowrap`}
        />

        {/* Error Message inside the input bar */}
        <div className=" right-0 flex items-center">
          {error && (
            <span className="absolute right-[110px] md:right-[150px] lg:right-[140px] text-red-500 text-sm font-bold">
              {error}
            </span>
          )}
        </div>

        {/* Search Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="button-primary px-4 py-2 sm:px-6 text-[12px] sm:text-[16px] disabled:opacity-75 rounded-lg ml-2"
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
