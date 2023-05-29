import React from "react";

function ClientCard({ style, icon }) {
  return (
    <div>
      <div className="image-client" style={style}>
        <div className="name-client">
          <div>CARLA SMITH</div>
          <div>May 24, 2017</div>
        </div>
        <div className="logo-client"> {icon}</div>
        <div className="back-client">
          <h1>"Best Holiday Ever"</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos neque
            veniam nobis fugiat repellat numquam perferendis distinctio.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClientCard;
