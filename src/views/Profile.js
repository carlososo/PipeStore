import React from "react";
import { useLocation } from "react-router-dom";
import "../index.scss";

import ProfileRouter from "../routes/ProfileRouter";
const Profile = () => {
    const {pathname} =useLocation()
  
  return (
    <main>
          <ProfileRouter pathname={pathname}/>
    </main>
  );
};

export default Profile;
