// LoginForm.js
import React, { useState } from "react";
import "../styles/form.css";
import axios from "axios";
const url = 'http://localhost:8085/api/kwye';

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, {
        username: username,
        password:password,
      });
      console.log("Login successful:", response.data);
      // Handle successful login, such as setting user authentication token
      const isConfirmed = window.confirm(
        "Account created!proceed to the home page?"
      );
      if (isConfirmed) {
        window.location.href = "/";
        setUserName(" ");
        setPassword(" ");
      }
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure, such as displaying error message to the user
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
