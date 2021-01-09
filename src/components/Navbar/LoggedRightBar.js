import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import MeetingRoomTwoToneIcon from "@material-ui/icons/MeetingRoomTwoTone";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { ProductContext } from '../../context/ProductContex';

const RightBar = ({user, setisLogged}) => {
  const {product} =useContext(ProductContext)
    return (
        <ul className="navbar-nav ml-5">
        <li className="nav-item " title="Login">
          <NavLink
            activeClassName="selected"
            className="nav-link "
            to="/profile"
          >
            <small>{user.first_name}</small>
            <AccountCircleTwoToneIcon title="Login" className="ml-1" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName="selected"
            className="nav-link"
            to="/logout"
          >
            <small>Logout</small>
            <MeetingRoomTwoToneIcon title="SignUp" className="ml-2" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName="selected"
            className="nav-link"
            to="/checkout"
          >
          <div className="__navBar_cart_badge_container">
            <small>Cart</small>
          <ShoppingCartIcon title="Shopping Cart" />
            {product.length>0 &&<span className="__navBar_cart_badge">{product.length}</span>}
          </div>
            
          </NavLink>
        </li>
      </ul>
    )
}

export default RightBar
