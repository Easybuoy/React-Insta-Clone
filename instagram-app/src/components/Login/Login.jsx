import React, { useState } from "react";
import "./Login.css";

import appStoreImg from "../../assets/astore.png";
import googlePlayStoreImg from "../../assets/gplay.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = e => setUsername(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  const handleLogin = () => {
    if (username !== "" && password !== "") {
      localStorage.setItem("token", username);
      window.location.reload();
    }
  };

  return (
    <>
      <div className="login">
        <h2>Instagram</h2>
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <input
              onChange={handleUsernameChange}
              type="text"
              placeholder="Username"
              required
            />
            <input
              onChange={handlePasswordChange}
              type="password"
              placeholder="Password"
              required
            />
            <button onClick={handleLogin}>Log In</button>
          </form>

          <h6>
            <a href="##">Forgot Password?</a>
          </h6>
        </div>
      </div>

      <div className="signup">
        <p>Don't have an account? </p>
        <a href="##">Sign Up</a>
      </div>

      <div className="login-footer">
          <p>Get the App</p>
        <img src={appStoreImg} alt="App Store" />
        <img src={googlePlayStoreImg} alt="Google PlayStore Store" />
      </div>
    </>
  );
}
