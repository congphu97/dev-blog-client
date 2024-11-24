import React from "react";
import BlogComponent from "../../components/Blog/Blog";
import HeaderComponent from "../../components/Header/Header";
import PopularBlogsComponent from "../../components/PopularBlogs/PopularBlogs";
import "./Home.scss";

const HomeComponent = () => {
  return (
    <div className="home-container">
      <div className="sticky-header">
        <HeaderComponent></HeaderComponent>
      </div>
      <div className="blog-container">
        <div className="left-sidebar">left sidebar</div>
        <div className="blog-list">
          <BlogComponent></BlogComponent>
          <PopularBlogsComponent></PopularBlogsComponent>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
