import formatDate from "../utils/formatDate";
import Stat from "./Stat";
import InfoItem from "./InfoItem";
import { useTheme } from "../hooks/ThemeProvider";

import twitterIcon from "../assets/icon-twitter.svg";
import websiteIcon from "../assets/icon-website.svg";
import locationIcon from "../assets/icon-location.svg";
import companyIcon from "../assets/icon-company.svg";

interface User {
  avatar_url: string;
  name: string | null;
  login: string;
  created_at: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  twitter_username: string | null;
  blog: string | null;
  company: string | null;
}

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`p-6 sm:py-8 sm:px-6 rounded-[15px] font-space-mono shadow-md ${
        isDarkMode ? "bg-card-dark" : "bg-card-light"
      }`}
    >
      <div className="flex flex-col gap-6 lg:gap-0 sm:gap-8">
        <div className="flex flex-row items-center lg:items-start gap-5 md:gap-10 sm:gap-8">
          {/* Avatar */}
          <div>
            <img
              src={user.avatar_url || "https://via.placeholder.com/117"}
              alt={user.name || user.login}
              className="w-[70px] h-[70px] sm:w-[117px] sm:h-[117px] rounded-full lg:mx-[20px]"
            />
          </div>

          {/* Name and Joined Date */}
          <div className="flex flex-col lg:w-[480px]  lg:items-start lg:flex-row lg:justify-between sm:items-start  gap-2 lg-gap-0">
            <div>
              <h2
                className={` text-[14px] md:text-[26px] font-bold ${
                  isDarkMode ? "text-text-h2-dark" : "text-text-h2-light"
                }`}
              >
                {user.name || user.login}
              </h2>
              <p className="text-primary">@{user.login}</p>
            </div>
            <p className="text-body  ">Joined {formatDate(user.created_at)}</p>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          {/* Bio */}
          <div className="space-y-4 ml-0 lg:ml-[202px]">
            <p className="text-body">{user.bio || "This profile has no bio"}</p>

            {/* Stats Section */}
            <div
              className={`grid grid-cols-3 gap-4 p-4 sm:p-6 rounded-[10px] ${
                isDarkMode ? "bg-dark" : "bg-light"
              }`}
            >
              <Stat label="Repos" value={user.public_repos} />
              <Stat label="Followers" value={user.followers} />
              <Stat label="Following" value={user.following} />
            </div>

            {/* Info Items */}
            <div className="grid sm:grid-cols-2 gap-4">
              <InfoItem
                icon={locationIcon}
                text={user.location || "Not Available"}
                available={!!user.location}
              />
              <InfoItem
                icon={twitterIcon}
                text={
                  user.twitter_username
                    ? `@${user.twitter_username}`
                    : "Not Available"
                }
                available={!!user.twitter_username}
                link={
                  user.twitter_username
                    ? `https://twitter.com/${user.twitter_username}`
                    : undefined
                }
              />
              <InfoItem
                icon={websiteIcon}
                text={user.blog || "Not Available"}
                link={user.blog || undefined}
                available={!!user.blog}
              />
              <InfoItem
                icon={companyIcon}
                text={user.company || "Not Available"}
                available={!!user.company}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
