import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { ChangeInfo } from "../views/ChangeInfo";
import { CheckInfo } from "../views/CheckInfo";
import { Favorites } from "../views/Favorites";
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
            <Route exact path={`/profile/check`} >
              <CheckInfo pathname={pathname}/>
            </Route>
            <Route exact path={`/profile/change`} >
              <ChangeInfo pathname={pathname}/>
            </Route>
            <Route exact path={`/profile/favorites`} >
              <Favorites pathname={pathname}/>
            </Route>
            <Route exact path ="/" component={AppRouter}/>
            <Redirect to="/profile/welcome"/>
          </Switch>
      </main>
    </Router>
  );
};

export default ProfileRouter;
