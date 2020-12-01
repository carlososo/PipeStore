import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { SearchForm } from "./SearchForm";
import fetchData from "../../utils/fetchData";
import NavBarSelector from "../../HOC/NavBarSelector";


import "../../index.scss";
import MeetingRoomTwoToneIcon from "@material-ui/icons/MeetingRoomTwoTone";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import usePayload from "../../utils/usePayload";

const LoggedBar = () => {
    const payload =usePayload()
    const [flag, setFlag]= useState(false)
    
    useEffect(()=>{
        console.log(payload);
        setFlag(!flag);
    },[])
    
    const token = localStorage.getItem("tkn")
    


    

  return (
    <nav className="navbar-expand-md navbar-dark bg-custom-blue mb-5">
      {/* <Link className="navbar-brand" to="/">
        Pipe'Store
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}

      <div
        className="collapse navbar-collapse container-custom "
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-5 my-3">
          <li className="nav-item ">
            <NavLink activeClassName="selected" className="nav-link" to="/">
              Home
            </NavLink>
          </li>
        </ul>
        <div className="col-8">
          <SearchForm />
        </div>
        <ul className="navbar-nav ml-5">
          <li className="nav-item " title="Login">
            <NavLink
              activeClassName="selected"
              className="nav-link "
              to="/logout"
            >
              <AccountCircleTwoToneIcon title="Login" className="ml-1" />
              <small>Logout</small>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="selected"
              className="nav-link"
              to="/signup"
            >
              <MeetingRoomTwoToneIcon title="SignUp" className="ml-2" />
              <small>{payload?.first_name}</small>
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
      </div>
    </nav>
  );
};

export default NavBarSelector (LoggedBar);
