import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    role: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setUser(formData.name); // ✅ Update user in Navbar
        navigate("/"); // ✅ Redirect to Home
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} required />
        <select name="role" onChange={handleChange} required>
          <option value="">Select Role</option>
          <option value="Buyer">Buyer</option>
          <option value="Seller">Seller</option>
          <option value="Dealer">Dealer</option>
        </select>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
