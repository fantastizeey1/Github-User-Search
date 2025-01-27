import { Search } from "lucide-react";

const SearchBar = ({
  username,
  setUsername,
  searchUser,
  isLoading,
}: {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  searchUser: (e: React.FormEvent) => void;
  isLoading: boolean;
}) => (
  <form onSubmit={searchUser} className="relative">
    <div className="p-2 sm:p-4 rounded-[15px] shadow-md bg-card-light dark:bg-card-dark">
      <div className="flex items-center gap-2 sm:gap-4">
        <Search className="text-primary w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-4 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 bg-transparent text-body focus:outline-none placeholder:text-light-text dark:placeholder:text-dark-text dark:text-white"
        />
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
