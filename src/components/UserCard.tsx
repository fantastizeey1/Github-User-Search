import formatDate from "../utils/formatDate";
import Stat from "./Stat";
import InfoItem from "./InfoItem";

import twitterIcon from "../assets/icon-twitter.svg";
import websiteIcon from "../assets/icon-website.svg";
import locationIcon from "../assets/icon-location.svg";
import companyIcon from "../assets/icon-company.svg";

const UserCard = ({ user, darkMode }: { user: any; darkMode: boolean }) => (
  <div
    className={`p-6 sm:p-8 rounded-[15px] shadow-md ${
      darkMode ? "bg-card-dark" : "bg-card-light"
    }`}
  >
    <div className="flex gap-6 sm:gap-8">
      <img
        src={user.avatar_url}
        alt={user.name}
        className="w-[70px] h-[70px] sm:w-[117px] sm:h-[117px] rounded-full"
      />
      <div className="flex-1 space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <div>
            <h2 className="text-h2 text-[26px] font-bold">
              {user.name || user.login}
            </h2>
            <p className="text-primary">@{user.login}</p>
          </div>
          <p className="text-body opacity-75">
            Joined {formatDate(user.created_at)}
          </p>
        </div>
        <p className="text-body">{user.bio || "This profile has no bio"}</p>
        <div
          className={`grid grid-cols-3 gap-4 p-4 sm:p-6 rounded-[10px] ${
            darkMode ? "bg-dark" : "bg-light"
          }`}
        >
          <Stat label="Repos" value={user.public_repos} />
          <Stat label="Followers" value={user.followers} />
          <Stat label="Following" value={user.following} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <InfoItem
            icon={locationIcon}
            text={user.location}
            available={!!user.location}
          />
          <InfoItem
            icon={twitterIcon}
            text={`@${user.twitter_username}`}
            available={!!user.twitter_username}
            link={
              user.twitter_username
                ? `https://twitter.com/${user.twitter_username}`
                : undefined
            }
          />
          <InfoItem
            icon={websiteIcon}
            text={user.blog}
            link={user.blog}
            available={!!user.blog}
          />

          <InfoItem
            icon={companyIcon}
            text={user.company}
            available={!!user.company}
          />
        </div>
      </div>
    </div>
  </div>
);

export default UserCard;
