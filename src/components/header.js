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
      <img src='./Medium.SVG' alt="Medium" style={{width: '42px', height: '42px', objectFit: 'cover', margin: '0'}} /> 
      <input
  type="text"
  placeholder="Search"
  className="searchBar"
  style={{
    border: '1px solid #F2F2F2',
    borderRadius: '33px',
    fontSize: '16px',
    backgroundColor: '#F2F2F2',
    padding: '10px 20px',
    display: 'flex',
    marginRight: '10px',
    marginLeft: '10px',
  }}
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
