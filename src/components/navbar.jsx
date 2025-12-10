import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      style={{
        backgroundColor: "#0f172a",
        color: "#f8fafc",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 999,
        boxShadow: "0 4px 20px rgba(56,189,248,0.1)",
      }}
    >
      {/* Brand / Logo */}
      <Link
        to="/"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#38bdf8",
          textDecoration: "none",
          letterSpacing: "1px",
        }}
      >
        Leon Dreams<span style={{ color: "#f472b6" }}>.AI</span>
      </Link>

      {/* Desktop Menu */}
      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
        className="nav-links"
      >
        <Link to="/" style={navLinkStyle}>
          Home
        </Link>
        <Link to="/About" style={navLinkStyle}>
          About
        </Link>
        <Link to="/Blog" style={navLinkStyle}>
          Blog
        </Link>
        <Link to="/Contact" style={navLinkStyle}>
          Contact
        </Link>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div
        onClick={toggleMenu}
        style={{
          display: "none",
          flexDirection: "column",
          cursor: "pointer",
        }}
        className="hamburger"
      >
        <div style={barStyle}></div>
        <div style={barStyle}></div>
        <div style={barStyle}></div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "65px",
            right: "20px",
            backgroundColor: "#1e293b",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 0 15px rgba(56,189,248,0.2)",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Link to="/" style={mobileLinkStyle} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            to="/About"
            style={mobileLinkStyle}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/Blog"
            style={mobileLinkStyle}
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/Contact"
            style={mobileLinkStyle}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

/* 🔹 Common Styles */
const navLinkStyle = {
  color: "#cbd5e1",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "1.05rem",
  transition: "0.3s ease",
};

const barStyle = {
  width: "25px",
  height: "3px",
  backgroundColor: "#38bdf8",
  margin: "4px 0",
  borderRadius: "2px",
};

const mobileLinkStyle = {
  color: "#f1f5f9",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "0.3s ease",
};
