import React from "react";
import CardOff from "./CardOff";
import island from "../assets/island.jpg";
import turkey from "../assets/turkey.jpg";
import travel from "../assets/travel.jpg";
import grand from "../assets/grand.jpg";

function Offers(props) {
  return (
    <div style={{ backgroundColor: "#EEE9F3 ", paddingTop: "30px" }}>
      <div>
        <h1 className="text-off">THE BEST OFFERS WITH ROOM</h1>
        <div className="offers">
          <CardOff
            style={{
              backgroundImage: `url(${grand})`,
            }}
            destination={"GRAND CASTLE"}
          />
          <CardOff
            style={{
              backgroundImage: `url(${island})`,
            }}
            destination={"ISLAND DREAM"}
          />
          <CardOff
            style={{
              backgroundImage: `url(${turkey})`,
            }}
            destination={"TURKEY HILLS"}
          />
          <CardOff
            style={{
              backgroundImage: `url(${travel})`,
            }}
            destination={"TRAVEL LIGHT"}
          />
        </div>
      </div>
    </div>
  );
}

export default Offers;
