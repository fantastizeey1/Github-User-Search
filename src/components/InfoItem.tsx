import React from "react";

const InfoItem = ({
  icon,
  text,
  link,
  available = true,
}: {
  icon: React.ReactNode;
  text: string;
  link?: string;
  available?: boolean;
}) => (
  <div className={`flex items-center gap-2 ${!available && "opacity-50"}`}>
    <span className="w-5">{icon}</span>
    {link ? (
      <a
        href={link.startsWith("http") ? link : `https://${link}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-body hover:underline truncate"
      >
        {text || "Not Available"}
      </a>
    ) : (
      <span className="text-body truncate">{text || "Not Available"}</span>
    )}
  </div>
);

export default InfoItem;
