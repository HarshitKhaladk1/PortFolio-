import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
export default function hpage1() {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "#f8fafc",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "left",
          padding: "100px 20px 80px",
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(56,189,248,0.1))",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Text Content */}
        <div style={{ maxWidth: "600px" }}>
          <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
         
         
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              color: "#38bdf8",
              marginBottom: "20px",
            }}
          >
            Welcome to <span style={{ color: "#f472b6" }}>LeonDreams.AI</span>
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#cbd5e1",
              marginBottom: "40px",
            }}
          >
            Exploring the fusion of <b>Artificial Intelligence</b> and{" "}
            <b>Creative Art</b> — where imagination meets innovation. Dive into
            my journey of coding, digital art, and AI-powered design.
          </p>
          <div>
            <Link
              to="/About"
              style={{
                backgroundColor: "#38bdf8",
                color: "#0f172a",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                marginRight: "15px",
              }}
            >
              Learn More
            </Link>
            <Link
              to="/Contact"
              style={{
                backgroundColor: "transparent",
                color: "#38bdf8",
                padding: "12px 24px",
                border: "2px solid #38bdf8",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Contact Me
            </Link>
          </div>
          </motion.div>
          </Col>
        </div>

        {/* Image */}
        <img
          src="https://files.catbox.moe/wavv91.jpg"
          alt="Creativity"
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "12px",
            objectFit: "cover",
            boxShadow: "0 0 20px rgba(96,165,250,0.3)",
          }}
        />

      </section>
    </div>
  );
}
