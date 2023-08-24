import React from "react";
import Logo from "../../images/logo.png";
import "./Sidebar.css";
import { SidebarData } from "../../SidebarData/Data";
import { useState } from "react";

// import { UilEstate } from "@iconscout/react-unicons";
const SideBar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="Sidebar">
      {/*logo*/}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      {/*menu*/}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItems active" : "menuItems"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <span>{item.icon}</span>
              <span>{item.heading}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SideBar;
