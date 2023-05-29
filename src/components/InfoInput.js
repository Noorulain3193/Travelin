import React from "react";
import "./InfoInput.css";

function InfoInput(props) {
  return (
    <div>
      <div className="input-container">
        <div className="input-1">
          <label>DESTINATION</label> <br />
          <input type="text" className="destination"></input>
        </div>
        <div className="input-2">
          <label>CHECK IN</label> <br />
          <input
            type="date"
            placeholder="MM/DD/YYYY"
            className="check-in"
          ></input>
        </div>
        <div className="input-3">
          <label>CHECK OUT</label> <br />
          <input
            type="date"
            placeholder="MM/DD/YYYY"
            className="check-out"
          ></input>
        </div>
        <div className="input-4">
          <label>ADULTS</label> <br />
          <select className="adults">
            <option disabled selected>
              01
            </option>

            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="input-5">
          <label>CHILDREN</label> <br />
          <select className="children">
            <option disabled selected>
              0
            </option>
            <option>0</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <button className="search-btn">SEARCH...</button>
      </div>
    </div>
  );
}

export default InfoInput;
