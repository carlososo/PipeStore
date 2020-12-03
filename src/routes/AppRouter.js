import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
// import NavBar from "../components/Navbar";
import Home from "../views/Home";
import Login from "../views/Login";
import Product from "../views/Product";
import Profile from "../views/Profile";
import Signup from "../views/Signup";

const AppRouter = () => {

  const Logout=()=>{
    localStorage.removeItem("tkn");
    return <Redirect to="/"/>
  }

    
  return (
    <Router>
      <div>
        
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/product/:productId" component={Product}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/logout" component={Logout}/>
            <Route exact path="/profile" component={Profile}/>
            <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
