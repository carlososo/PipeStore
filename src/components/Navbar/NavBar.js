import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchForm } from "./SearchForm";
import fetchData from "../../utils/fetchData";
import RightBar from "./RightBar";
import LoggedRightBar from './LoggedRightBar';
import { UserContext } from "../../context/UserContext";

import "../../styles/index.scss";

const NavBar = () => {
  
  const [user, setUser] =useState();
  const { setisLogged} =useContext(UserContext)  
  const token = localStorage.getItem('tkn');
  useEffect(() => {
    
    if(token){
        fetchData.get("/api/v1/user/me",{
            headers:{
                Authorization: `JWT ${token}`
            }
        }).then(({data}) =>{
            const {user} = data;
            setUser(user);
        })
        }
  }, [token])
  useEffect(()=>{
    if(token){
      setisLogged(true);
    }else{      setisLogged(false);
    }
  },[token, setisLogged])
  
    return (
    <nav className="navbar-expand-md navbar-light bg-custom-blue">
     <div
        className="collapse navbar-collapse container-custom __container_Navbar"
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
        {user ?<LoggedRightBar user={user} setisLogged={setisLogged}/>:<RightBar />}
        
      </div>
    </nav>
  );
};

export default NavBar;
