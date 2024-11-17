import React from "react";
import "./Profile.scss";
import { MdNotifications } from "react-icons/md";

const ProfileComponent = () => {
  return (
    <div className="profile-container">
      <div className="new-post">
        <button className="new-post-btn">New post</button>
      </div>
      <MdNotifications className="notification-icon" />
      {/* TODO: Add profile image */}
      <div className="profile-image-container">
        <span className="profile-name">DEV</span>
      </div>
    </div>
  );
};

export default ProfileComponent;
