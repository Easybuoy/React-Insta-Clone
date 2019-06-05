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
        <p>Get the app</p>
        <a href="https://itunes.apple.com/app/instagram/id389801252?mt=8&vt=lo">
          <img src={appStoreImg} alt="App Store" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DXPe6hgAEAAFR2AlNrnhoGhFAsqoP%26utm_content%3Dlo%26utm_medium%3Dbadge">
          <img src={googlePlayStoreImg} alt="Google PlayStore Store" />
        </a>
      </div>
    </>
  );
}
