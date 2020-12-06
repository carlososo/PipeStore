import React from "react";
import SideBar from "../components/SideBar";

export const Welcome = ({ pathname, user }) => {
    const {first_name} = user;
  return (
    <>
      <SideBar active="welcome" pathname={pathname} />
      <div className="display-main">
        <h1>Welcome {first_name}</h1>
        <p>In this section, You'll be able to check your information, change it and review your favorite products, </p>
      </div>
    </>
  );
};
