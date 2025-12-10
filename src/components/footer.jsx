import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        color: "#cbd5e1",
        padding: "60px 20px 20px",
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
        borderTop: "1px solid rgba(56,189,248,0.2)",
      }}
    >
      {/* Brand Section */}
      <h2
        style={{
          color: "#38bdf8",
          fontSize: "1.8rem",
          marginBottom: "15px",
          fontWeight: "700",
        }}
      >
        Leon Dreams<span style={{ color: "#f472b6" }}>.AI</span>
      </h2>
      <p
        style={{
          maxWidth: "600px",
          margin: "0 auto 40px",
          color: "#94a3b8",
          fontSize: "1rem",
          lineHeight: "1.6",
        }}
      >
        Blending the worlds of <b>Artificial Intelligence</b>, <b>Art</b>, and
        <b> Code</b> — one creative project at a time.
      </p>
      <section>
        <form action="">
          <div className="row d-flex justify-content-center">
            <div className="col-auto">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>

            <div className="col-md-5 col-12">
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form5Example2"
                  className="form-control"
                  placeholder="  Email address"
                />
              </div>
            </div>

            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-4">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </section>
      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "25px",
          marginBottom: "30px",
        }}
      >
        <Link to="/About" style={footerLinkStyle}>
          About
        </Link>
        <Link to="/Blog" style={footerLinkStyle}>
          Blog
        </Link>
        <Link to="/Contact" style={footerLinkStyle}>
          Contact
        </Link>
      </div>

      {/* Social Icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <a
          href="https://www.instagram.com/leondreams.ai"
          target="_blank"
          rel="noopener noreferrer"
          style={socialIconStyle}
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={socialIconStyle}
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={socialIconStyle}
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      {/* Copyright */}
      <p
        style={{
          fontSize: "0.9rem",
          color: "#64748b",
          borderTop: "1px solid rgba(56,189,248,0.1)",
          paddingTop: "15px",
        }}
      >
        © {new Date().getFullYear()} LeonDreams.AI — Created with 💙 & AI
      </p>
    </footer>
  );
}

const footerLinkStyle = {
  color: "#cbd5e1",
  textDecoration: "none",
  fontWeight: "500",
  transition: "0.3s ease",
};

const socialIconStyle = {
  color: "#38bdf8",
  fontSize: "1.5rem",
  transition: "0.3s ease",
};
