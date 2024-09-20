import React from "react";
import Img from '../assets/men.jpg'
import "./sidenav.css"; // Importing the CSS file for styling
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="sidenav">
  <div className="profile">
    <img src={Img} alt="Profile" className="profile-image" />
    <h3>Username</h3>
  </div>
      <ul className="sidenav-menu">
        <li>
          <Link to="/dashboard">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/messages">
            <i className="fas fa-envelope"></i> Message
          </Link>
        </li>
        <li>
          <Link to="/comments">
            <i className="fas fa-comment"></i> Comment
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="fas fa-info-circle"></i> About
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <i className="fas fa-cog"></i> Setting
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <i className="fas fa-sign-out-alt"></i> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
