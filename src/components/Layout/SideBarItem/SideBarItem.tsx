import "./SideBarItem.scss";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  path: string;
  name: string;
  icon: string;
  active?: boolean;
}

const SideBarItem = ({ path, name, icon }: Props) => {
  return (
      <Link to={path} className="sidebar-item">
        <img src={icon} alt="" />
        <p>{name}</p>
      </Link>
  );
};

export default SideBarItem;
