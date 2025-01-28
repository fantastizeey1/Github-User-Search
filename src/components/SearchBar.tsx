const SearchBar = ({
  username,
  setUsername,
  searchUser,
  isLoading,
  darkMode,
  error,
}: {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  searchUser: (e: React.FormEvent) => void;
  isLoading: boolean;
  darkMode: boolean;
  error: string;
}) => (
  <form onSubmit={searchUser} className="relative">
    <div
      className={`p-2 flex items-center sm:p-4 rounded-[15px] w-full h-[60px] md:h-[69px] shadow-md relative ${
        darkMode ? "bg-card-dark" : "bg-card-light"
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
          darkMode ? "text-dark-text" : "text-light-text"
        } ${darkMode ? "text-white" : "text-black"} px-4`}
      />

      {/* Error Message inside the input bar */}
      {error && (
        <span className="absolute right-[110px] md:right-[150px] lg:right-[140px] text-red-500 text-sm font-bold">
          {error}
        </span>
      )}

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

export default SearchBar;
