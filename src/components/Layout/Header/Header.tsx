import React from 'react'
import "./Header.scss"

import { Link } from "react-router-dom";

import Search from '../Search/Search'
import NavUser from '../NavUser/NavUser'

import Union from "../../../assets/svgs/Union.svg"
import Lendsqr from "../../../assets/svgs/Lendsqr.svg"

const Header = () => {
  return (
    <Link to="/">
    <div className='header-box'>
      <div className='header-logo'>
        <img src={Union} alt="union" />
        <img src={Lendsqr} alt="lendsqr" />
      </div>
      <div>
        <Search></Search>
      </div>
      <div>
        <NavUser></NavUser>
      </div>
    </div>
    </Link>
  )
}

export default Header