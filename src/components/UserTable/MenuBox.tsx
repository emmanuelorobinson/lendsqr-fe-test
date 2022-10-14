import "./UserTable.scss";
import React from "react";
import { Link } from "react-router-dom";

import Eye from "../../assets/svgs/MenuBox/Eye.svg";
import Blacklist from "../../assets/svgs/MenuBox/Blacklist.svg";
import Activate from "../../assets/svgs/MenuBox/Activate.svg";

interface Props {
  id: string;
}


const MenuBox = ({id}: Props) => {


  return (
    <div className="menu">
      <Link to={`/users/${id}`} className=" item">
        <img src={Eye} alt="eye" />
        <span>View Details</span>
      </Link>
      <div className=" item">
        <img src={Blacklist} alt="blacklist" />
        <span>Blacklist User</span>
      </div>
      <div className=" item">
        <img src={Activate} alt="activate" />
        <span>Activate User</span>
      </div>
    </div>
  );
};

export default MenuBox;
