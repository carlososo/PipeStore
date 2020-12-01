import React from 'react';
import NavBar from '../components/Navbar';

const NavBarSelector =(Component)=>{
    const token = localStorage.getItem("tkn");
    
    console.log(token);
    const WrappedComponent =(props)=>{
        return token? <Component {...props}/>: <NavBar {...props}/>
    }
    return WrappedComponent
}

export default NavBarSelector;