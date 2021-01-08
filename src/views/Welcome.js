import React from "react";
import SideBar from "../components/SideBar";

export const Welcome = ({ pathname, user }) => {
    const {first_name} = user;
  return (
    <div className="">
      <SideBar active="welcome" pathname={pathname} />
      <div className="display-main animate__animated animate__fadeIn">
        <h1>Welcome <span style={{fontWeight:'bold'}}>{first_name}</span></h1>
        <p>In this section, You'll be able to check your information, change it and review your favorite products, </p>
      </div>
    </div>
  );
};
