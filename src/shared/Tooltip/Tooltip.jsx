import React, { useState } from "react";
import "./Tooltip.scss";

const Tooltip = ({ children, text, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`tooltip__box tooltip__box--${position}`}>
          {text}
          <span className={`tooltip__arrow tooltip__arrow--${position}`}></span>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
