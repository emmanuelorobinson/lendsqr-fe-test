import "./NavUser.scss";

import React from 'react'
import { AiOutlineBell} from "react-icons/ai"
import DefaultProfile from "../../../assets/imgs/DefaultProfile.png"

const NavUser = () => {
  return (
    <div className="navuser-box">
      <div className="nav-left">
        <p>
          Docs
        </p>
        <AiOutlineBell size={25}></AiOutlineBell>
      </div>
      <div className="nav-right">
        <img src={DefaultProfile} alt="profile" />
        <p>
          Adedeji
        </p>
      </div>
    </div>
  )
}

export default NavUser