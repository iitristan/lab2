import React from "react";
import StaffPicks from "./Staffpicks";
import RecommendedTopics from "./RecommendedTopics";
import FollowList from "./FollowList";
import Discover from "./discover";

const picksData = [
  {
    picksImage: "./image.JPG",
    picksAuthor: "Tristan One",
    picksTopic: "Rock n Heavy",
    picksTitle: "Looking at a Familiar Place From a New Angle",
  },
  {
    picksImage: "./image.JPG",
    picksAuthor: "Tristan One",
    picksTopic: "Rock n Heavy",
    picksTitle: "Looking at a Familiar Place From a New Angle",
  },
  {
    picksImage: "./image.JPG",
    picksAuthor: "Tristan One",
    picksTopic: "Rock n Heavy",
    picksTitle: "Looking at a Familiar Place From a New Angle",
  },
];

export default function Sidebar() {
  const picks = picksData;
  return (
    <div className="fullContainer">
      <div className="picksContainer">
        <h3>Staff Picks</h3>
        <ul className="staffpicksContainer">
          {picks.map((picks) => (
            <StaffPicks picksObj={picks} key={picks.name} />
          ))}
        </ul>
        <a href="#">See the full list</a>
      </div>
      <Discover />
      <RecommendedTopics />
      
      <FollowList />
      
      <div className="readingList">
      <span className="readingTitle">Reading List</span>
      <p>
        Click on any story to easily add it to your reading list or a custom
        list that you can share.
      </p>
      <a href="#">Help</a> <a href="#">Status</a> <a href="#">About</a> <a href="#">Careers</a> <a href="#">Blog</a> <a href="#">Privacy</a> <a href="#">Terms</a> <a href="#">Text to speech</a> <a href="#">Teams</a>

      </div>
    </div>
  );
}
