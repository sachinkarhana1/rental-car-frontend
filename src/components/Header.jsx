import React from "react";
import "./css/Header.css"; // Create a CSS file for styling
import logo from "../assets/seatac_rental_logo.png";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="rental car logo" />
        </div>

        <div className="navbarbox">
          <HiMiniBars3BottomRight className="headerMenuBars" size={20} />

          <FaUserCircle className="headerMenuUserOption" size={32} />

          <div className="headerMenuHostOption">
            CREATE AN ACCOUNT FOR GUEST
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
