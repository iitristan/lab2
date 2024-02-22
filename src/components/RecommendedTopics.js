import React from "react";
import "./recommended.css";
import { useTheme } from "./ThemeContext";

export default function RecommendedTopics() {
  const { theme } = useTheme();
  // Dynamically set the class for the <p> tag based on the current theme
  const pClass = `recommendedTitle ${theme}`;

  return (
    <div className="topicsContainer">
      <p className={pClass}>Recommended topics</p>{" "}
      {/* Apply dynamic class here */}
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
