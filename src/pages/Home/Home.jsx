import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import BlogListComponent from "../../components/BlogList/BlogList";
import "./Home.scss";

const HomeComponent = () => {
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
    <div className="home">
      <div className="home__extensions">
        {shortcutList.map((item, idx) => (
          <div key={item.id} className="home-extension">
            <button className="home-extension__btn">
              <img
                className="home-extension__btn-img"
                src={item.img}
                alt="logo-dark-mode"
              />
            </button>
            <div className="home-extension__btn-remove">
              <TiDelete onClick={() => removeShortcut(idx)} />
            </div>
            <span className="home-extension__btn-text">
              {item.text} - {idx}
            </span>
          </div>
        ))}
        {shortcutList.length < 6 && (
          <div className="home-extension">
            <button className="home-extension__btn" onClick={addShortcut}>
              <FaPlus className="home-extension__btn-icon" />
            </button>
            <span className="home-extension__btn-text">Shortcuts</span>
          </div>
        )}
      </div>
      <BlogListComponent />
    </div>
  );
};

export default HomeComponent;
