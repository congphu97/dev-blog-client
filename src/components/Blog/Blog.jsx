import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import BlogListComponent from "../BlogList/BlogList";
import "./Blog.scss";

const BlogComponent = () => {
  const [shortcutList, setShortcutList] = useState([]);

  const addShortcut = () => {
    const newShortCut = {
      id: shortcutList.length + 1,
      img: "https://th.bing.com/th/id/R.0a4bd0c65bd43b55d60bf1bc730aedb6?rik=xEd2WYn6TGoZTA&pid=ImgRaw&r=0",
      text: "Title",
    };

    setShortcutList([...shortcutList, newShortCut]);
  };

  const removeShortcut = (idx) => {
    setShortcutList((prevList) => prevList.filter((_, index) => index !== idx));
  };

  return (
    <div className="blog">
      <div className="blog__extension-list">
        {shortcutList?.length > 0 &&
          shortcutList.map((item, idx) => (
            <div key={item?.id} className="blog__extension">
              <button className="blog__extension-btn">
                <img
                  className="blog__extension-btn-img"
                  src={item?.img}
                  alt="logo-dark-mode"
                />
              </button>
              <div className="blog__extension-btn-remove">
                <TiDelete onClick={() => removeShortcut(idx)} />
              </div>
              <span className="blog__extension-btn-text">
                {item?.text} - {idx}
              </span>
            </div>
          ))}
        {shortcutList?.length < 6 && (
          <div className="blog__extension">
            <button className="blog__extension-btn" onClick={addShortcut}>
              <FaPlus className="blog__extension-btn-icon" />
            </button>
            <span className="blog__extension-btn-text">Shortcuts</span>
          </div>
        )}
      </div>
      <BlogListComponent />
    </div>
  );
};

export default BlogComponent;
