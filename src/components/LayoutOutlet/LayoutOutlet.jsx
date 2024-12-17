import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../Header/Header";
import MenuComponent from "../Menu/Menu";
import "./LayoutOutlet.scss";

const LayoutOutlet = () => {
  return (
    <div className="layout">
      {/* Header */}
      <HeaderComponent></HeaderComponent>

      {/* Content */}
      <div className="content-wrapper">
        <aside className="content-wrapper__sidebar">
          <MenuComponent></MenuComponent>
        </aside>

        <main className="content-wrapper__main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutOutlet;
