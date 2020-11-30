import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/Navbar";
import Home from "../views/Home";
import Login from "../views/Login";
import Product from "../views/Product";
import Signup from "../views/Signup";

const AppRouter = () => {
    
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/product/:productId" component={Product}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
