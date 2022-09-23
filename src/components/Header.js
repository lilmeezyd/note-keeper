import React from 'react'
import { useState } from 'react'

const Header = ({ onSearch }) => {

   const onChange = (e) => {
        onSearch(e.target.value)
   } 

    return (
        <div className="nav">
           <div className="nav-container">
               <div className="menu-btn" >
                   <div className="menu-btn_burger"></div>
               </div>
               <form className="search">
                   <input type="text"
                        placeholder="Search your notes"
                        onChange={onChange} />
               </form>
           </div>
        </div>
    )
}

export default Header
