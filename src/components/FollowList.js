import React from "react";
import "./followstyles.css";
import Follow from "./Follow";

const followData = [
  {
    user: "Anish",
    followImage: "./image.JPG",
    userDescription: "Followed by Tristan One",
  },
  {
    user: "Anish",
    followImage: "./image.JPG",
    userDescription: "Followed by Tristan One",
  },
  {
    user: "Anish",
    followImage: "./image.JPG",
    userDescription: "Followed by Tristan One",
  },
];

export default function FollowList() {
  const tofollow = followData;
  return (
    <div className="followList">
      <p style={{ fontWeight: "600", fontSize: "20px" }}>Who to follow</p>
      <ul className="follow-list">
        {tofollow.map((follows) => (
          <Follow followObj={follows} key={tofollow.name} />
        ))}
      </ul>
      <div className="seeMore">
      <a href="#">See more suggestions</a>
        </div>
    </div>
  );
}
