import React, { useState } from "react";
import {
  UserOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import "./Login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = () => {
    let valid = true;

    if (!username) {
      setUsernameError("The Username is not empty");
      valid = false;
    } else {
      setUsernameError("");
    }

    if (!password) {
      setPasswordError("The Password is not empty");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      console.log("Username:", username, "Password:", password);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  return (
    <div className="parent">
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <UserOutlined style={{ margin: "0px 30px", fontSize: "22px" }} />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          {usernameError && <div className="error">{usernameError}</div>}
          <div className="input">
            <LockOutlined style={{ margin: "0px 30px", fontSize: "22px" }} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </span>
          </div>
          {passwordError && <div className="error">{passwordError}</div>}
        </div>
        <div className="remember">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <div className="submit-container">
          <button className="submit" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
