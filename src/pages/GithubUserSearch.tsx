import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { searchGitHubUser } from "../utils/searchUser";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";

interface GitHubUser {
  login: string;
  name: string;
  avatar_url?: string;
  bio: string;
  location: string;
  blog: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  company: string;
  err: string;
}

const GithubUserSearch = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = await searchGitHubUser(username);
      setUser(data);
      setError("");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? "bg-dark text-dark-text" : "bg-light text-light-text"
      } p-4 sm:p-6 md:p-8`}
    >
      <div className="max-w-[730px] mx-auto space-y-6">
        <Header
          darkMode={darkMode}
          toggleTheme={() => setDarkMode(!darkMode)}
        />
        <SearchBar
          username={username}
          setUsername={setUsername}
          searchUser={searchUser}
          isLoading={isLoading}
          darkMode={darkMode}
        />
        {error && (
          <div
            className={`p-4 text-center rounded-[15px] ${
              darkMode ? "bg-card-dark" : "bg-card-light"
            }`}
          >
            <p className="text-[#F74646] font-bold">{error}</p>
          </div>
        )}
        {user && <UserCard user={user} darkMode={darkMode} />}
      </div>
    </div>
  );
};

export default GithubUserSearch;
