import React, { useState, useEffect } from "react";
import { useTheme } from "../hooks/ThemeProvider";
import { searchGitHubUser } from "../utils/searchUser";
import { useNavigate, useParams } from "react-router-dom";
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
}

const GithubUserSearch = () => {
  const { isDarkMode } = useTheme();
  const { username: urlUsername } = useParams(); // Get username from URL
  const navigate = useNavigate(); // Used to update URL
  const [username, setUsername] = useState(urlUsername || "");
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (urlUsername) {
      fetchUser(urlUsername);
    }
  }, [urlUsername]); // Runs when the URL username changes

  const fetchUser = async (searchUsername: string) => {
    setIsLoading(true);
    try {
      const data = await searchGitHubUser(searchUsername);
      setUser(data);
      setError("");
      localStorage.setItem("githubUser", JSON.stringify(data));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const searchUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) return;
    navigate(`/${username}`); // Update URL
    fetchUser(username); // Fetch user data
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDarkMode
          ? "bg-dark text-dark-text text-h2-dark"
          : "bg-light text-light-text text-h2-light"
      } p-4 sm:p-6 md:p-8`}
    >
      <div className="max-w-[730px]  lg:min-w-[720px] mx-auto mt-[7%]  space-y-5 ">
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
