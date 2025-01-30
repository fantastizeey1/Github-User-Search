import React, { useState } from "react";
import { useTheme } from "../hooks/ThemeProvider";
import { searchGitHubUser } from "../utils/searchUser";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
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
  const { isDarkMode } = useTheme(); // Get theme state from context
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
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDarkMode
          ? "bg-dark text-dark-text text-h2-dark"
          : "bg-light text-light-text text-h2-light"
      } p-4 sm:p-6 md:p-8`}
    >
      <div className="max-w-[730px] mx-auto space-y-6">
        <Header />
        <SearchBar
          username={username}
          setUsername={setUsername}
          searchUser={searchUser}
          isLoading={isLoading}
          error={error}
        />

        {user && <UserCard user={user} />}
      </div>
    </div>
  );
};

export default GithubUserSearch;
