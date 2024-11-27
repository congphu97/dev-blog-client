import React from "react";
import {
  GrBookmark,
  GrGlobe,
  GrHistory,
  GrHomeRounded,
  GrMoney,
} from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import "./Menu.scss";
const MenuComponent = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const isActive = (path) => {
    return window.location && window.location.pathname === path ? "active" : "";
  };

  return (
    <div className="menu-container">
      <div className="menu-channel">
        <div
          className={`menu-item ${isActive("/")}`}
          onClick={() => handleClick("/")}
        >
          <div className="menu-item__icon">
            <GrHomeRounded />
          </div>
          Home
        </div>
        <div
          className={`menu-item ${isActive("/popular")}`}
          onClick={() => handleClick("/popular")}
        >
          <div className="menu-item__icon">
            <GrGlobe />
          </div>
          Popular
        </div>
        <div
          className={`menu-item ${isActive("/bookmarks")}`}
          onClick={() => handleClick("/bookmarks")}
        >
          <div className="menu-item__icon">
            <GrBookmark />
          </div>
          Bookmarks
        </div>
        <div
          className={`menu-item ${isActive("/history")}`}
          onClick={() => handleClick("/history")}
        >
          <div className="menu-item__icon">
            <GrHistory />
          </div>
          History
        </div>
        <div
          className={`menu-item ${isActive("/donate")}`}
          onClick={() => handleClick("/donate")}
        >
          <div className="menu-item__icon">
            <GrMoney />
          </div>
          Donate
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
