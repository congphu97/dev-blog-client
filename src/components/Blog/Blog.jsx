import React from "react";
import { FaPlus } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import "./Blog.scss";
import BlogListComponent from "../BlogList/BlogList";

const BlogComponent = () => {
  return (
    <div className="blog-wrapper">
      {/* TODO: Will change another UI */}
      <div className="blog-extension">
        <button className="extension-btn">
          <HiAdjustmentsHorizontal className="extension-icon" />
          <span className="text">Feed settings</span>
        </button>
        <button className="extension-btn">
          <FaPlus className="extension-icon" />
          <span className="extension-text">Shortcuts</span>
        </button>
      </div>
      <BlogListComponent></BlogListComponent>
    </div>
  );
};

export default BlogComponent;
