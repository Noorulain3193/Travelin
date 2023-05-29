import React from "react";
import "./SendMsg.css";
import man from "../assets/man.webp";

function SendMsg(props) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <img
        src={man}
        alt={""}
        style={{
          bottom: "-34px",
          zIndex: 1,
          left: "-180px",
          position: "absolute",
          width: "140%",
        }}
      />
      <div className="man-msg">
        <div className="card-msg">
          <h1>GET IN TOUCH</h1>
          <form className="form-msg">
            <div className="flex">
              <input type="text" className="input-name" placeholder="Name" />
              <input type="text" className="input-email" placeholder="E-mail" />
            </div>
            <div>
              <input
                type="text"
                className="input-subject"
                placeholder="Subject"
              />
              <textarea
                type="text"
                rows={10}
                className="input-message"
                placeholder="Message"
              />
              <button className="input-btn">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
      <div
        style={{
          clear: "both",
        }}
      ></div>
    </div>
  );
}

export default SendMsg;
