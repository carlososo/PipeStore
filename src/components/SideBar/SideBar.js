import React from 'react';
import { NavLink } from "react-router-dom";

const SideBar =({pathname, active})=>{
  

  return(
        <aside className="side-bar">
        <nav className="nav">
          <ul>
            <li className={`${active==="welcome"&&"active"}`}>
              <NavLink
                className="NavLink"
                activeClassName="selected"
                to={`${pathname}/welcome`}
              >
                {" "}
                Welcome
              </NavLink>{" "}
            </li>
            <li className={`${active==="checkinfo"&&"active"}`}>
              <NavLink className={ "NavLink"} activeClassName="selected" to={`${pathname}/check`}>
                {" "}
                Check your info
              </NavLink>{" "}
            </li>
            <li className={`${active==="changeinfo"&&"active"}`}>
              <NavLink className="NavLink" activeClassName="selected" to={`${pathname}/change`}>
                {" "}
                Change Your Info
              </NavLink>
            </li>
            <li className={`${active==="favorites"&&"active"}`}>
              <NavLink className="NavLink" activeClassName="selected" to={`${pathname}/favorites`}>
                {" "}
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" activeClassName="selected" to="/">
                {" "}
                Go back to the store
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    )
}

export default SideBar;