import React from "react";
import "./Login.scss";

const LoginComponent = () => {
  return (
    <div className="login-container">
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            // onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default LoginComponent;
