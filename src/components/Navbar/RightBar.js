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
            <AccountCircleTwoToneIcon title="Login" className="ml-1" />
            <small>Login</small>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName="selected"
            className="nav-link"
            to="/signup"
          >
            <MeetingRoomTwoToneIcon title="SignUp" className="ml-2" />
            <small>Signup</small>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName="selected"
            className="nav-link"
            to="/checkout"
          >
            <ShoppingCartIcon title="Shopping Cart" />
            <small>Cart</small>
          </NavLink>
        </li>
      </ul>
    )
}

export default RightBar
