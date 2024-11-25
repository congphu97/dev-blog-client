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

      {/* Sidebar and Main Content */}
      <div className="content-wrapper">
        <div className="left-sidebar">
          <MenuComponent></MenuComponent>
        </div>

        {/* Main Content */}
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
