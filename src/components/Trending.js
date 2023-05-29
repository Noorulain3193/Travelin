import React from "react";
import TrendingCards from "./TrendingCards";
import "./Trending.css";
import hotel1 from "../assets/hotel1.jpg";
import hotel2 from "../assets/hotel2.jpg";
import hotel3 from "../assets/hotel3.jpg";
import hotel4 from "../assets/hotel4.jpg";
import hotel5 from "../assets/hotel5.jpg";
import hotel6 from "../assets/hotel6.jpg";
import hotel7 from "../assets/hotel7.jpg";
import hotel8 from "../assets/hotel8.jpg";

function Trending(props) {
  return (
    <div>
      <div className="text-trend">TRENDING NOW</div>
      <div className="trending-cards">
        <TrendingCards
          style={{
            backgroundImage: `url(${hotel1})`,
          }}
          name={"GRAND HOTEL"}
        />
        <TrendingCards
          style={{
            backgroundImage: `url(${hotel2})`,
          }}
          name={"BREEZE HOTEL"}
        />

        <TrendingCards
          style={{
            backgroundImage: `url(${hotel3})`,
          }}
          name={"LEVIS HOTEL"}
        />

        <TrendingCards
          style={{
            backgroundImage: `url(${hotel4})`,
          }}
          name={"BONJOUR HOTEL"}
        />
        <TrendingCards
          style={{
            backgroundImage: `url(${hotel5})`,
          }}
          name={"SAFARI HOTEL"}
        />
        <TrendingCards
          style={{
            backgroundImage: `url(${hotel6})`,
          }}
          name={"PEARL HOTEL"}
        />
        <TrendingCards
          style={{
            backgroundImage: `url(${hotel7})`,
          }}
          name={"SERENA HOTEL"}
        />
        <TrendingCards
          style={{
            backgroundImage: `url(${hotel8})`,
          }}
          name={"QUEEN HOTEL"}
        />
      </div>
    </div>
  );
}

export default Trending;
