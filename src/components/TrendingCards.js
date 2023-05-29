import React from "react";
import "./Trending.css";

function TrendingCards({ style, name }) {
  return (
    <div className="trending-items">
      <div className="image-trend" style={style}></div>
      <div className="details-trend">
        <div className="name-trend"> {name}</div>
        <div className="price-trend"> FROM $180</div>
        <div className="country-trend">MADRID, SPAIN</div>
      </div>
    </div>
  );
}

export default TrendingCards;
