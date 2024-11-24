import React from "react";
import "./Profile.scss";
import { MdNotifications } from "react-icons/md";

const ProfileComponent = () => {
  return (
    <div className="profile-container">
      {/* Auth */}
      <div className="auth-container">
        <button className="sign-in-btn">Sign in</button>
        <button className="sign-up-btn">Sign up</button>
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
