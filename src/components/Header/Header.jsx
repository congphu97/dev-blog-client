import React from "react";
import { useNavigate } from "react-router-dom";
import { ProfileComponent, SearchComponent } from "../index";
import "./Header.scss";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <header>
      <div className="header">
        <div className="header__logo" onClick={() => handleClick("/")}>
          <img
            className="header__logo-img"
            src="/assets/images/logo-dark-mode.png"
            alt="logo-dark-mode"
          />
        </div>
        <div className="header-actions">
          <SearchComponent />
          <ProfileComponent />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
