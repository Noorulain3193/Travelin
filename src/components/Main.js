import React from "react";
import "./Main.css";
import image from "../assets/image.webp";
import { ImLocation } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { RiHotelLine } from "react-icons/ri";
import { TbBus } from "react-icons/tb";
import { TbPlane } from "react-icons/tb";
import { GiIsland } from "react-icons/gi";
import { GiSpeedBoat } from "react-icons/gi";
import { GiMountainClimbing } from "react-icons/gi";
function Main(props) {
  return (
    <div
      className="image"
      style={{
        backgroundImage: `url(${image})`,
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="backOfImage">
        {/* -----------------------
        MAIN NAV STARTS
        ----------------------- */}
        <div className="main-nav">
          <div className="main-left">
            <div className="location">
              <ImLocation />
            </div>
            <div className="title">TRAVELIN</div>
          </div>
          <div className="main-right">
            <ul className="nav-comp">
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>CONTACTS</li>
              <li>OFFERS</li>
            </ul>
          </div>
          <span className="search">
            <FiSearch />
          </span>
        </div>
        {/* -----------------------
        MAIN NAV ENDS
        ----------------------- */}
        <div className="center-text">
          <h1 className="discover"> DISCOVER</h1>
          <h1 className="the-world secondary-font">the world</h1>
          <button className="explore"> EXPLORE NOW... </button>
        </div>
        <div className="options-container">
          <ul className="option">
            <li>
              <RiHotelLine className="option-icon" />
              <span>HOTELS</span>
            </li>
            <li>
              <TbBus className="option-icon" />
              <span>RENTALS</span>
            </li>
            <li>
              <TbPlane className="option-icon" />
              <span>FLIGHTS</span>
            </li>
            <li>
              <GiIsland className="option-icon" />
              <span>TRIPS</span>
            </li>
            <li>
              <GiSpeedBoat className="option-icon" />
              <span>CRUISES</span>
            </li>
            <li>
              <GiMountainClimbing className="option-icon" />
              <span>ACTIVITIES</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
