import React from 'react'
import "./Search.scss"
import {AiOutlineSearch} from "react-icons/ai"

const Search = () => {
  return (
    <div className='search-box'>
      <div className='search-input'>
        <input type="text" placeholder='Search for anything'/>
      </div>
      <div className='search-icon' >
        <AiOutlineSearch style={
          {
            color: '#fff',
          }
        }/>
      </div>
    </div>
  )
}

export default Search