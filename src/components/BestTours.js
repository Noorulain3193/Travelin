import React from "react";
import "./BestTours.css";
import photo from "../assets/photo-1-1.jpeg";
import photo2 from "../assets/photo-2.jpg";
import photo3 from "../assets/photo-3.jpg";
import { AiOutlineStar } from "react-icons/ai";

function BestTours(props) {
  return (
    <div className="best-tours">
      <div className="best-text">
        <h1
          style={{
            color: "#2d2c2c",
            fontWeight: "700",
            fontFamily: "sans-serif",
            marginTop: "90px",
            fontSize: "40px",
          }}
        >
          We have the best tours
        </h1>
        <p
          style={{
            color: "gray",
            fontFamily: "sans-serif",
            fontSize: "26px",
            fontStyle: "italic",
            fontWeight: "lighter",
            marginTop: "-6px",
            marginLeft: "34px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit odio. <br />
          magnam quos similique eligendi nisi officia alias incidunt dolor?
        </p>
      </div>
      <div className="best-cards">
        <div
          className="card-item"
          style={{
            backgroundImage: `url(${photo})`,
            backgroundSize: "400px, 100px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="card-cover">
            <div className="cover-content">
              <p className="best-date">May 25th - June 01st</p>
              <h1 className="country-name">Mauritius</h1>
              <p className="price">From $1450</p>
              <span className="stars">
                <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />{" "}
                <AiOutlineStar /> <AiOutlineStar />
              </span>
            </div>
            <button className="see-more">SEE MORE...</button>
          </div>
        </div>

        <div
          className="card-item"
          style={{
            backgroundImage: `url(${photo2})`,
            backgroundSize: "400px, 100px",
          }}
        >
          <div className="card-cover">
            <div className="cover-content">
              <p className="best-date">May 25th - June 01st</p>
              <h1 className="country-name">Greece</h1>
              <p className="price">From $1450</p>
              <span className="stars">
                <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />{" "}
                <AiOutlineStar /> <AiOutlineStar />
              </span>
              <button className="see-more">SEE MORE...</button>
            </div>
          </div>
        </div>

        <div
          className="card-item"
          style={{
            backgroundImage: `url(${photo3})`,
            backgroundSize: "400px, 100px",
          }}
        >
          <div className="card-cover">
            <div className="cover-content">
              <p className="best-date">May 25th - June 01st</p>
              <h1 className="country-name">Scotland</h1>
              <p className="price">From $1450</p>
              <span className="stars">
                <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />{" "}
                <AiOutlineStar /> <AiOutlineStar />
              </span>
              <button className="see-more">SEE MORE...</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestTours;
