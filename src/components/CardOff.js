import React from "react";
import "./Offers.css";
import { AiOutlineStar } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import { BsBicycle } from "react-icons/bs";
import { TbSailboat } from "react-icons/tb";
import { BsSignpostSplit } from "react-icons/bs";

function CardOff({ style, destination }) {
  return (
    <div className="offer-card-container">
      <div className="image-off" style={style}>
        <div>{destination}</div>
      </div>
      <div className="detail-off">
        <h1>$90</h1>
        <span>per night</span>
        <div>
          <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />{" "}
          <AiOutlineStar /> <AiOutlineStar />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde libero
          doloremque, non rerum iste ipsum minus consectetur!
        </p>
        <span>
          <BsSignpostSplit />
          <BsStopwatch />
          <BsBicycle />
          <TbSailboat />
        </span>
        <div>READ MORE</div>
      </div>
    </div>
  );
}

export default CardOff;
