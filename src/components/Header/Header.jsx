import React from "react";
import "./Header.scss";
import { SearchComponent, ProfileComponent } from "../index";

const HeaderComponent = () => {
  return (
    <header>
      <div className="header">
        <div className="logo" onClick={() => console.log("go to homepage")}>
          <img className="logo_img" src="/assets/images/logo-dark-mode.png" />
        </div>
        <SearchComponent></SearchComponent>
        <ProfileComponent></ProfileComponent>
      </div>
    </header>
  );
};

export default HeaderComponent;
