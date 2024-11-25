import React from "react";
import BlogComponent from "../../components/Blog/Blog";
import "./Home.scss";

const HomeComponent = () => {
  return (
    <div className="blog-container">
      <div className="blog-list">
        <BlogComponent></BlogComponent>
      </div>
    </div>
  );
};

export default HomeComponent;
