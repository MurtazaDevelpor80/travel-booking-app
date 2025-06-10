/*import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">TravelEase</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>
  );
}*/

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { getCurrentUser, logoutUser } from "../utils/auth";

export default function Navbar() {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">TravelEase</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        {user ? (
          <>
            <li>Hello, {user.name}</li>
            <li><button onClick={handleLogout} style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

