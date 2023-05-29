import React from "react";
import "./Deluxe.css";
import photo from "../assets/deluxe.jpg";
import { RiStarSFill } from "react-icons/ri";

function Deluxe(props) {
  return (
    <div>
      <div
        className="deluxe"
        style={{
          backgroundImage: `url(${photo})`,
          height: "700px",
          width: "100%",
          position: "relative",
        }}
      >
        <div className="cover-deluxe">
          <div className="content-deluxe">
            <h1>MALDIVES DELUXE PACKAGE</h1>
            <span className="deluxe-star">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </span>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              quo. Laudantium quod adipisci voluptas ullam dolorum <br />
              ipsam, commodi eos odit perspiciatis necessitatibus praesentium
              facilis hic. Ducimus quia fugit modi nesciunt?
            </p>
            <button>BOOK NOW...</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deluxe;
