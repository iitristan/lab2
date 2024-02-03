import React from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaBell } from "react-icons/fa";

export default function Header({ profileImage }) {
  return (
    <header
      className="header"
      style={{
        backgroundColor: "#FFFF",
        padding: "20px",
        color: "#000",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #D9DDDC",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: "0" }}>
          Medium
        </h1>
        <input
          type="text"
          placeholder="Search"
          style={{ marginLeft: "10px", padding: "5px", borderRadius: "5px" }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <HiOutlinePencilAlt />
        <span style={{ marginRight: "15px" }}>Write</span>
        <FaBell style={{ marginRight: "20px", cursor: "click" }} />
        <img
          src={profileImage}
          alt="Profile"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
    </header>
  );
}
