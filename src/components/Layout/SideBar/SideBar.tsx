import "./SideBar.scss";
import React from "react";

import { dashboardRoutes, customerRoutes } from "../../../utils/routes";

import { FaSuitcase, FaHome } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import SideBarItem from "../SideBarItem/SideBarItem";

const SideBar = () => {
  return (
    <div className="sidebar-box">
      <div className="sidebar-top">
        <FaSuitcase color="#213F7D" />
        <p>Switch Organization</p>
        <RiArrowDropDownLine color="#213F7D" size={25} />
      </div>
      <div className="sidebar-dash">
        <FaHome
          color="#213F7D"
          style={{
            marginRight: "10px",
          }}
        />
        <p>Dashboard</p>
      </div>
      <div className="sidebar-list">
        <p className="sidebar-text">CUSTOMERS</p>
        {customerRoutes.map((route, index) => (
          <SideBarItem key={index} {...route} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
