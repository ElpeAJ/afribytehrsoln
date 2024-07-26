import React from 'react'
import { Link } from "react-router-dom";
import style from "./Navigation.module.css";
import { navlinks } from '../navdetails';


export default function Navigation() {
  return (
    <div className={style.links}>
      {navlinks.map((navlink) => (
        <div key={navlink.page} className={style.pair}>
          {navlink.icon && <i className={style.fontawesome}>{navlink.icon}</i>}
          {/* Add check for icon existence */}
          <Link to={`/${navlink.page}`} className={style.navLink}>{navlink.page}</Link>
        </div>
      ))}
    </div>
  );
}

// export default Navigation;