import React from "react";
import "./followstyles.css";
import { useTheme } from "./ThemeContext";

export default function Follow({ followObj }) {
  const { theme } = useTheme();
  const { user, followImage, userDescription } = followObj;

  const containerClass = `followContainer ${theme}`;
  const buttonClass = `followButton ${theme}`;

  return (
    <div className={containerClass}>
      <div className="followContainer">
        <div className="followImage">
          <img src={followImage} alt="User" className="follow-list-image" />
        </div>
        <div className="followInfo">
          <span className="follow-list-user">{user}</span>
          <span className="follow-list-description">{userDescription}</span>
        </div>
        <div className="fButton">
          <a className={buttonClass}>Follow</a>
        </div>
      </div>
    </div>
  );
}
