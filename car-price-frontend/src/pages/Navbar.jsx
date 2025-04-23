import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">T<span className="gear-icon">⛭</span>pGear.AI</div>



      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/predict">Predict</Link></li>
        <li><Link to="/about">About</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;

