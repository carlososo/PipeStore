import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Home from "../views/Home";
import { Welcome } from "../views/Welcome";
import AppRouter from "./AppRouter";

const BackHome = () => {
  return <Redirect to="/" />;
};

const ProfileRouter = () => {
  const {pathname} =useLocation()
  console.log(pathname)

  return (
    
    <Router>
      <main>
          <Switch>
            <Route exact path={`${pathname}/welcome`} >
              <Welcome pathname={pathname} />
            </Route>
            <Route exact path={`/profile/check`} />
            <Route exact path={`/profile/change`} />
            <Route exact path={`/profile/favorites`} />
            <Route exact path ="/" component={AppRouter}/>
            <Redirect to="/profile/welcome"/>
          </Switch>
      </main>
    </Router>
  );
};

export default ProfileRouter;
