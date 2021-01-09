import React from 'react'
import { NavLink } from "react-router-dom";
import MeetingRoomTwoToneIcon from "@material-ui/icons/MeetingRoomTwoTone";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const RightBar = () => {
    return (
        <ul className="navbar-nav ml-5">
        <li className="nav-item " title="Login">
          <NavLink
            activeClassName="selected"
            className="nav-link "
            to="/login"
          >
            <small>Login</small>
            <AccountCircleTwoToneIcon title="Login" className="ml-1" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName="selected"
            className="nav-link"
            to="/signup"
          >
            <small>Signup</small>
            <MeetingRoomTwoToneIcon title="SignUp" className="ml-2" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName="selected"
            className="nav-link"
            to="/checkout"
          >
            <small>Cart</small>
            <ShoppingCartIcon title="Shopping Cart" />
          </NavLink>
        </li>
      </ul>
    )
}

export default RightBar
