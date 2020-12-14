import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import fetchData from "../utils/fetchData";
import { ChangeInfo } from "../views/ChangeInfo";
import { CheckInfo } from "../views/CheckInfo";
import { Favorites } from "../views/Favorites";
import { Welcome } from "../views/Welcome";
import AppRouter from "./AppRouter";

const ProfileRouter = () => {
  const {pathname} =useLocation()
  
  const token = localStorage.getItem("tkn");
  const [user, setUser] = useState({});

  useEffect(() => {
    const responseUser = async () => {
      try {
        const { data } = await fetchData.get("/api/v1/user/me", {
          headers: {
            Authorization: `JWT ${token}`,
          },
        });
        const { user } = data;
        setUser(user);
      } catch (err) {
        console.log(err);
      }
    };
    responseUser();
  }, [token]);
  return (
    
    <Router>
      <main>
          <Switch>
            <Route exact path={`${pathname}/welcome`} >
              <Welcome user={user} pathname={pathname} />
            </Route>
            <Route exact path={`/profile/check`} >
              <CheckInfo user={user} pathname={pathname}/>
            </Route>
            <Route exact path={`/profile/change`} >
              <ChangeInfo setUser={setUser} user={user} token={token} pathname={pathname}/>
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
