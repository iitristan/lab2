import React from "react";
import "./followstyles.css";

export default function Follow({ followObj }) {
  const { user, followImage, userDescription } = followObj;

  return (
    <div className="followContainer">
      <div className="followImage">
        <img src={followImage} alt="User" className="follow-list-image" />
      </div>
      <div className="followInfo">
      <span className="follow-list-user">{user}</span>
        <span className="follow-list-description">{userDescription}</span>
      </div>
      <div className="fButton">
        <a className="followButton">Follow</a>
      </div>
    </div>
  );
}
