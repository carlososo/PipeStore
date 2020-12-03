import React from 'react';
import { NavLink } from "react-router-dom";

const SideBar =({pathname})=>{
    return(
        <aside className="side-bar">
        <nav className="nav">
          <ul>
            <li className="active">
              <NavLink
                className="NavLink"
                activeClassName="selected"
                to={`${pathname}/welcome`}
              >
                {" "}
                Welcome
              </NavLink>{" "}
            </li>
            <li>
              <NavLink className="NavLink" activeClassName="selected" to={`${pathname}/check`}>
                {" "}
                Check your info
              </NavLink>{" "}
            </li>
            <li>
              <NavLink className="NavLink" activeClassName="selected" to={`${pathname}/change`}>
                {" "}
                Change Your Info
              </NavLink>
            </li>
            <li>
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