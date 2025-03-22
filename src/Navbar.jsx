import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"; // Import CSS

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo" onClick={() => navigate("/")}>DeepSync</div>

      {/* About Button */}
      <button className="about-btn" onClick={() => navigate("/about")}>
        About
      </button>
    </nav>
  );
};

export default Navbar;
