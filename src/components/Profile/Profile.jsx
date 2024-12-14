import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";

const ProfileComponent = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="profile-container">
      {/* Auth */}
      <div className="auth-container">
        <button className="sign-in-btn" onClick={() => handleClick("/login")}>
          Sign in
        </button>
        {/* <button
          className="sign-up-btn"
          onClick={() => handleClick("/register")}
        >
          Sign up
        </button> */}
      </div>

      {/* Signed in */}
      {/* <div className="new-post">
        <button className="new-post-btn">New post</button>
      </div> */}
      {/* <MdNotifications className="notification-icon" /> */}
      {/* TODO: Add profile image */}
      {/* <div className="profile-image-container">
        <span className="profile-name">DEV</span>
      </div> */}
    </div>
  );
};

export default ProfileComponent;
