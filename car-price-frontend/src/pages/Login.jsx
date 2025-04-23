import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ Allows navigation after login

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // ✅ Dummy login check (replace with actual authentication later)
    if (email === "test@example.com" && password === "password123") {
      alert("Login successful! 🚀");
      navigate("/predict"); // ✅ Redirects to Predict page after login
    } else {
      alert("Invalid credentials. Try again!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login to T⛭pGear.AI</h1>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
