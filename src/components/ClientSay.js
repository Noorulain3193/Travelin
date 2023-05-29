import React from "react";
import "./ClientSay.css";
import ClientCard from "./ClientCard";
import client1 from "../assets/client-1.jpg";
import client2 from "../assets/client-2.jpg";
import client3 from "../assets/client-3.jpg";
import { GiBackpack } from "react-icons/gi";
import { GiIsland } from "react-icons/gi";
import { GiWaveSurfer } from "react-icons/gi";

function ClientSay(props) {
  return (
    <div>
      <div className="text-client">WHAT OUR CLIENTS SAY ABOUT US</div>
      <div className="client-cards">
        <ClientCard
          style={{
            backgroundImage: `url(${client2})`,
            backgroundSize: "cover",
          }}
          icon={<GiBackpack />}
        />
        <ClientCard
          style={{
            backgroundImage: `url(${client1})`,
            backgroundSize: "cover",
          }}
          icon={<GiIsland />}
        />
        <ClientCard
          style={{
            backgroundImage: `url(${client3})`,
            backgroundSize: "cover",
          }}
          icon={<GiWaveSurfer />}
        />
      </div>
      <hr className="hr-client"></hr>
    </div>
  );
}

export default ClientSay;
