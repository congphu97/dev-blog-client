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
          <span className="menu-item__text">Home</span>
        </div>
        <div
          className={`menu-item ${isActive("/popular")}`}
          onClick={() => handleClick("/popular")}
        >
          <div className="menu-item__icon">
            <GrGlobe />
          </div>
          <span className="menu-item__text">Popular</span>
        </div>
        <div
          className={`menu-item ${isActive("/bookmarks")}`}
          onClick={() => handleClick("/bookmarks")}
        >
          <div className="menu-item__icon">
            <GrBookmark />
          </div>
          <span className="menu-item__text">Bookmarks</span>
        </div>
        <div
          className={`menu-item ${isActive("/history")}`}
          onClick={() => handleClick("/history")}
        >
          <div className="menu-item__icon">
            <GrHistory />
          </div>
          <span className="menu-item__text">History</span>
        </div>
        <div
          className={`menu-item ${isActive("/donate")}`}
          onClick={() => handleClick("/donate")}
        >
          <div className="menu-item__icon">
            <GrMoney />
          </div>
          <span className="menu-item__text">Donate</span>
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
