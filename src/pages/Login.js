import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password) {
      const user = { username };
      localStorage.setItem("user",JSON.stringify(user));
      navigate("/");
    } else {
      setError("Please enter a username and password");
    }
  };

  return (
    <div className="login-main">
    <div className="login-container">
      <h2>Login to EventPal</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin} className="form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submitbtn">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
