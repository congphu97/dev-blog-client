import React from "react";
import { FaPlus } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { ListsComponent } from "../index";
import "./Content.scss";

const ContentComponent = () => {
  return (
    <div className="content-main">
      {/* TODO: Will change another UI */}
      <div className="content-extension">
        <button className="extension-btn">
          <HiAdjustmentsHorizontal className="extension-icon" />
          <span className="text">Feed settings</span>
        </button>
        <button className="extension-btn">
          <FaPlus className="extension-icon" />
          <span className="extension-text">Shortcuts</span>
        </button>
      </div>
      <ListsComponent></ListsComponent>
    </div>
  );
};

export default ContentComponent;
