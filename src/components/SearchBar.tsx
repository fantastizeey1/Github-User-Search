import { Search } from "lucide-react";

const SearchBar = ({
  username,
  setUsername,
  searchUser,
  isLoading,
  darkMode,
}: {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  searchUser: (e: React.FormEvent) => void;
  isLoading: boolean;
  darkMode: boolean;
}) => (
  <form onSubmit={searchUser} className="relative">
    <div
      className={`p-2 flex  items-center sm:p-8 rounded-[15px] w-full h-[69px] shadow-md ${
        darkMode ? "bg-card-dark" : "bg-card-light"
      }`}
    >
      <div className="flex items-center gap-4 w-full">
        {/* Search Icon */}
        <Search className="text-primary w-6 h-6 sm:w-6 sm:h-6 flex-shrink-0" />

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={`flex-1 bg-transparent text-body focus:outline-none placeholder:${
            darkMode ? "text-dark-text" : "text-light-text"
          } ${darkMode ? "text-white" : "text-black"}`}
        />

        {/* Search Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="button-primary px-4 py-3 sm:px-6 text-[14px] sm:text-[16px] disabled:opacity-75"
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </div>
    </div>
  </form>
);

export default SearchBar;
