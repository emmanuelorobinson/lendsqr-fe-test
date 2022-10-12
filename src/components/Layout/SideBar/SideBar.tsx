import "./SideBar.scss";
import React from "react";

import { dashboardRoutes, customerRoutes } from "../../../utils/routes";

import Briefcase from '../../../assets/svgs/sidebar/Briefcase.svg';
import { RiArrowDropDownLine } from "react-icons/ri";
import SideBarItem from "../SideBarItem/SideBarItem";

const SideBar = () => {
  return (
    <div className="sidebar-box">
      <div className="sidebar-top">
        <img src={Briefcase} alt="" />
        <p>Switch Organization</p>
        <RiArrowDropDownLine color="#213F7D" size={25} />
      </div>
      <div className="sidebar-dash">
        <SideBarItem
          path={dashboardRoutes.path}
          name={dashboardRoutes.name}
          icon={dashboardRoutes.icon}
        />
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
