import React from "react";
import "./picksstyles.css";
import { useTheme } from "./ThemeContext";

export default function StaffPicks({ picksObj }) {
  const { theme } = useTheme(); // Destructure theme from context
  const { picksImage, picksAuthor, picksTopic, picksTitle } = picksObj;

  return (
    <div className={`picksContainer ${theme}`}>
      <div className="picksInfo">
        <img className="picksImage" src={picksImage} alt="authorImage" />
        <span>
          <span className="picksAuthor">{picksAuthor}</span>
          {" in "}
          <span className="picksTopic">{picksTopic}</span>
        </span>
      </div>
      <span className="picksTitle">{picksTitle}</span>
    </div>
  );
}
