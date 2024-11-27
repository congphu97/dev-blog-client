import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../Header/Header";
import MenuComponent from "../Menu/Menu";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <div className="sticky-header">
        <HeaderComponent></HeaderComponent>
      </div>

      {/* Left Sidebar and Main Content */}
      <div className="content-wrapper">
        <div className="left-sidebar">
          <MenuComponent></MenuComponent>
        </div>

        {/* Main Content */}
        <main className="main-content">
          {/* Renders the matching child route of a parent route or nothing if no child route matches. */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
