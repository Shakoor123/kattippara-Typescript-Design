import React from "react";
import logo from "../../assets/logo.webp";
import profile from "../../assets/profile.jpg";

import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarBox">
          <div className="sidebarTop">
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="sidebarCenter">
            <img src={profile} alt="" className="profile" />
            <p className="about">Creating Quality Products</p>
            <p className="about">Available kasaragod Only</p>
          </div>
          <div className="sidebarBottom">
            <span>whatsapp</span>
            <span>phone</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
