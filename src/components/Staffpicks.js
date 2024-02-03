import React from "react";
import "./picksstyles.css";

export default function StaffPicks({ picksObj }) {
  const { picksImage, picksAuthor, picksTopic, picksTitle } = picksObj;

  return (
    <div className="picksContainer">
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
