import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

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
        <button className="login-btn" onClick={() => handleClick("/")}>
          <FaGoogle className="social-icon" /> Google
        </button>
        <button className="login-btn" onClick={() => handleClick("/")}>
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
