import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import "./Search.scss";

const SearchComponent = () => {
  const [width, setWidth] = useState(0);
  const [searchKeywords, setSearchKeywords] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const keywords = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Eggplant",
    "Fig",
    "Grape",
    "Honeydew Melon",
    "Indian Fig",
    "Jackfruit",
    "Kiwi",
    "Lemon",
    "Mango",
  ];

  const filteredKeywords = keywords.filter((keyword) =>
    keyword.toLowerCase().includes(searchKeywords.toLowerCase())
  );

  // Handle click on a result item
  const handleItemClick = (item) => {
    // TODO: Add logic to handle item click
    setSearchKeywords(""); // Update the search bar with the clicked item
    setSelectedItem(item);
    console.log("selected item:", selectedItem);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial width
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const isTablet = width >= 768 && width <= 1024;
  const isDesktop = width > 1024;

  return (
    <>
      <div className="search-container">
        <button
          className={isDesktop || isTablet ? "search-bar" : "search-bar-icon"}
        >
          <FaSearch className="search-icon" />
          {(isDesktop || isTablet) && (
            <input
              type="text"
              placeholder="Search"
              className="search-input-field"
              value={searchKeywords}
              onChange={(e) => setSearchKeywords(e.target.value)}
            />
          )}
          {searchKeywords && (
            <TiDelete
              className="clear-icon"
              onClick={() => setSearchKeywords("")}
            />
          )}
        </button>

        {searchKeywords && (
          <ul className="search-suggestions">
            {filteredKeywords.length > 0 ? (
              filteredKeywords.map((item, idx) => (
                <li
                  key={idx}
                  className="search-suggestion"
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </li>
              ))
            ) : (
              <li className="search-no-results">No results found</li>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchComponent;
