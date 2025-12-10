import React from "react";
import { Link } from "react-router";

export default function hfollow() {
  return (
    <>
      {/* Instagram Follow Section */}
      <section
        style={{
          background:
            "linear-gradient(135deg, rgba(21, 3, 122, 0.15), rgba(27, 30, 194, 0.1))",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "#a472f4ff",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          Let’s Connect on Instagram 💫
        </h2>
        <p
          style={{
            color: "#cbd5e1",
            fontSize: "1.1rem",
            maxWidth: "600px",
            margin: "0 auto 40px",
            lineHeight: "1.6",
          }}
        >
          I post AI-generated artworks, creative experiments, and
          behind-the-scenes process on{" "}
          <span style={{ color: "#38bdf8", fontWeight: "600" }}>
            @LeonDreams.AI
          </span>
          . Follow me to stay inspired and explore the fusion of art and code.
        </p>

        {/* Instagram Button */}
        <a
          href="https://www.instagram.com/leondreams.ai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#f472b6",
            color: "#0f172a",
            padding: "14px 36px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.1rem",
            boxShadow: "0 0 20px rgba(244,114,182,0.4)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#f00e83ff")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#f472b6")}
        >
          Follow on Instagram 🌸
        </a>
      </section>
    </>
  );
}
