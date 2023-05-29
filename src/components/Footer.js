import React from "react";
import "./Footer.css";
import { FaRegAddressBook } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GoMailRead } from "react-icons/go";
import { IoIosGlobe } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { RiPinterestLine } from "react-icons/ri";
import { ImFacebook } from "react-icons/im";
import { RiTwitterFill } from "react-icons/ri";
import { FiDribbble } from "react-icons/fi";
import { BsBehance } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import photo1 from "../assets/footer1.jpg";
import photo2 from "../assets/footer2.jpg";
import photo3 from "../assets/footer3.jpg";
import FooterBlog from "./FooterBlog";

function Footer(props) {
  return (
    <div>
      <div className="main-ftr">
        <div className="container1-ftr">
          <div className="title-ftr">
            <ImLocation className="locator-ftr" />

            <div className="name-ftr">TRAVELIN</div>
          </div>
          <div className="text-ftr">
            Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
            Deserunt ad ullam, illo veniam aliquam reiciendis voluptate illum
            accusamus fuga porr atque nihil consequatur.
          </div>
          <div className="icons-ftr">
            <div className="icon-items">
              <RiPinterestLine />
            </div>
            <div className="icon-items">
              <ImFacebook />
            </div>
            <div className="icon-items">
              <RiTwitterFill />
            </div>
            <div className="icon-items">
              <FiDribbble />
            </div>
            <div className="icon-items">
              <BsBehance />
            </div>
            <div className="icon-items">
              <RiLinkedinFill />
            </div>
          </div>
        </div>
        <div className="container2-ftr">
          <div className="blog-ftr">BLOG POSTS</div>
          <FooterBlog
            style={{
              backgroundImage: `url(${photo1})`,
            }}
            text={"Travel with us this year"}
          />
          <FooterBlog
            style={{
              backgroundImage: `url(${photo2})`,
            }}
            text={"New destinations for you"}
          />
          <FooterBlog
            style={{
              backgroundImage: `url(${photo3})`,
            }}
            text={"Visit the best places in the world"}
          />
        </div>
        <div className="container3-ftr">
          <div className="text-tag">TAGS</div>
          <div className="tags">
            <div>design</div>
            <div>fashion</div>
            <div>music</div>
            <div>video</div>
            <div>party</div>
            <div>photography</div>
            <div>adventure</div>
            <div>travel</div>
          </div>
        </div>
        <div className="container4-ftr">
          <div className="text-info">CONTACT INFO</div>
          <div className="item-info">
            <div>
              <FaRegAddressBook className="icon-info" />
              <div className="item-text">
                4127 Raoul Wallenber 45b-c <br /> Gibraltar
              </div>
            </div>
            <div>
              <FiPhoneCall className="icon-info" />
              <div className="item-text">2556-808-8613</div>{" "}
            </div>
            <div>
              <GoMailRead className="icon-info" />
              <div className="item-text">contactme@gmail.com</div>
            </div>
            <div>
              <IoIosGlobe className="icon-info" />
              <div className="item-text">www.colorlib.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="left">
          Copyright ©2022 All rights reserved | This template is made with by
          Colorlib
        </div>
        <ul className="right">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>OFFERS</li>
          <li>NEWS</li>
          <li>CONTACTS</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
