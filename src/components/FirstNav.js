import React from "react";
import "./FirstNav.css";
import { RiPinterestLine } from "react-icons/ri";
import { ImFacebook } from "react-icons/im";
import { RiTwitterFill } from "react-icons/ri";
import { FiDribbble } from "react-icons/fi";
import { BsBehance } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";

function FirstNav(props) {
  return (
    <div className="first-nav">
      <div className="fn-left ">
        <div>+43 209 3847 624567</div>
        <div className="icons">
          <span>
            <RiPinterestLine />
          </span>
          <span>
            <ImFacebook />
          </span>
          <span>
            <RiTwitterFill />
          </span>
          <span>
            <FiDribbble />
          </span>
          <span>
            <BsBehance />
          </span>
          <span>
            <RiLinkedinFill />
          </span>
        </div>
      </div>
      <div className="fn-right">
        <span>LOGIN</span> | <span>REGISTER</span>{" "}
      </div>
    </div>
  );
}

export default FirstNav;
