import React from "react";
import "./recommended.css";

export default function RecommendedTopics() {
  return (
    <div className="topicsContainer">
      <p>Recommended topics</p>
      <ul>
        <li>Software Engineering</li>
        <li>JavaScript</li>
        <li>Web Development</li>
        <li>Programming</li>
        <li>React</li>
        <li>Python</li>
      </ul>
      <a href="#">See more topics</a>
    </div>
  );
}
