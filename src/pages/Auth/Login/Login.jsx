import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import "./Login.scss";

const LoginComponent = () => {
  return (
    <div className="login-container">
      <div class="login-logo">
        <img
          className="login-logo-img"
          src="/assets/images/logo-dark-mode.png"
          alt="logo-dark-mode"
        />
      </div>
      <div className="login-btn-groups">
        <button className="login-btn">
          <FaGoogle className="social-icon" /> Google
        </button>
        <button className="login-btn">
          <FaGithub className="social-icon" /> GitHub
        </button>
      </div>
      <span className="login-txt">
        Log in with your account to find out more!
      </span>
    </div>
  );
};

export default LoginComponent;
