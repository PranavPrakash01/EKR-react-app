import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"
import logo from "../images/logo.png"
import menubtn from "../images/mobile_menu_btn.png"
import { useState } from 'react'

const NavBar = () => {

    const [isMobile,setIsMobile] = useState(false)
    const handleClick=()=>{
        console.log(isMobile);
        setIsMobile(!isMobile)
        console.log(isMobile);
    };
    
    return (
       <nav className="navbar" >
           <div className="nav-container">
                <NavLink exact to="/" className="nav-logo">
                 <img width="65px" height="75px" src={logo} alt="img"/>
                </NavLink>

                <ul className={isMobile? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                     <NavLink exact to="#" className="nav-links">
                        About
                     </NavLink>
                    </li>
                    <li className="nav-item">
                       
                     <NavLink exact to="#" className="nav-links">
                        Contact Us
                     </NavLink>
                    </li>
                  

                </ul>
                <button className="mobile-menu-button" onClick={handleClick}>
                     <img width="40px" height="40px" src={menubtn} alt="img"/>
                </button>
           </div>
       </nav>
    )
}

export default NavBar
