import React from 'react'
import { Link } from "react-router-dom";
import style from "./Navigation.module.css";
import { navlinks } from '../navdetails';
import { useState } from "react";


export default function Navigation() {
  const [isEmployeeDropdownOpen, setIsEmployeeDropdownOpen] = useState(true);

  const handleEmployeeMenuHover = () => {
    setIsEmployeeDropdownOpen(!isEmployeeDropdownOpen);
  };
  return (
    <div className={style.links}>
      {navlinks.map((navlink) => (
        <div key={navlink.page} className={style.pair}>
          {navlink.icon && <i className={style.fontawesome}>{navlink.icon}</i>}
          {navlink.page === "employees" ? (
            <>
              <Link
                to={`/${navlink.page}`}
                className={style.navLink}
                onMouseEnter={handleEmployeeMenuHover}
                onMouseLeave={handleEmployeeMenuHover}
              >
                {navlink.page}
              </Link>
              {isEmployeeDropdownOpen && (
                <ul className={`${style.dropdownMenu} ${isEmployeeDropdownOpen ? "show": ""}`}>
                  {/* Add your employee dropdown options here */}
                  <li>
                    <Link to="/employees/list">Employee List</Link>
                  </li>
                  <li>
                    <Link to="/employees/chart">Org Chart</Link>
                  </li>
                  <li>
                    <Link to="/employees/timeline">Timeline View</Link>
                  </li>
                </ul>
              )}
            </>
          ) : (
            // {/* Add check for icon existence */}
            <Link to={`/${navlink.page}`} className={style.navLink}>
              {navlink.page}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

// export default Navigation;