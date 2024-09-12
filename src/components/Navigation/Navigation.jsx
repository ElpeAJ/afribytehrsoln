import React from 'react'
import { Link } from "react-router-dom";
import style from "./Navigation.module.css";
import { navlinks } from '../navdetails';
import { useState } from "react";


export default function Navigation() {
  const [selectedLink, setSelectedLink] = useState(navlinks[0].page);
  const handleLinkClick = (page) => {
    setSelectedLink(page);
  };

  const [isEmployeeDropdownOpen, setIsEmployeeDropdownOpen] = useState(true);
  const handleEmployeeMenuHover = () => {
    setIsEmployeeDropdownOpen(!isEmployeeDropdownOpen);
  };

  const [isInputVisible, setIsInputVisible] = useState(false);
  const handleButtonClick = () => {
    setIsInputVisible(!isInputVisible);
  };

  return (
    <div className={style.links}>
      {navlinks.map((navlink) => (
        <div key={navlink.page} 
        // className={style.pair}
          className={`${style.pair} ${selectedLink === navlink.page ? style.selectedLink : ""}`}
          onClick={() => handleLinkClick(navlink.page)}>
          {navlink.icon && <i className={style.fontawesome}>{navlink.icon}</i>}
          {navlink.page === "employees" ? (
            <>
              <Link
                to={`/${navlink.page}`}
                className={style.navLink}
                // className={`${style.navLink} ${selectedLink === navlink.page ? style.selectedLink : ""}`}
                // onClick={() => handleLinkClick(navlink.page)}
                onMouseEnter={handleEmployeeMenuHover}
                onMouseLeave={handleEmployeeMenuHover}
              >
                {navlink.page}
              </Link>
              {isEmployeeDropdownOpen && (
                <ul className={`${style.dropdownMenu} ${isEmployeeDropdownOpen ? "show": ""}`}>
                  {/* Add your employee dropdown options here */}
                  {/* <li>
                    <Link to="/employees/list">Employee List</Link>
                  </li>
                  <li>
                    <Link to="/employees/chart">Org Chart</Link>
                  </li>
                  <li>
                    <Link to="/employees/timeline">Timeline View</Link>
                  </li> */}
                </ul>
              )}
            </>
          ) : (navlink.page === "search" ? (
            <Link
                to={`/${navlink.page}`}
                className={style.navLink}
                onClick={handleButtonClick}
              >
                {navlink.page}
              </Link>
          ):( 
            // {/* Add check for icon existence */}
            <Link to={`/${navlink.page}`} className={style.navLink}>
              {navlink.page}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

// export default Navigation;