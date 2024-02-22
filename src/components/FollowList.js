import React from "react";
import "./followstyles.css";
import Follow from "./Follow";

const followData = [
  {
    user: "Anish",
    followImage:
      "https://i.pinimg.com/736x/6e/23/3e/6e233e4312051000ed896c1cad631857.jpg",
    userDescription: "Followed by Tristan",
  },
  {
    user: "Luna",
    followImage:
      "https://i.pinimg.com/originals/b5/75/c1/b575c1796e44952970104b1650861464.jpg",
    userDescription: "Followed by Tristan",
  },
  {
    user: "Joma",
    followImage:
      "https://i.pinimg.com/736x/24/e4/5b/24e45bb5201861e9a7079c1e5f4fbf33.jpg",
    userDescription: "Followed by Tristan",
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
