import React from "react";
import { useNavigate } from "react-router-dom";

export default function BlogPost() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "#f1f5f9",
        minHeight: "100vh",
        padding: "60px 20px",
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Go Back Button */}
      <button
        onClick={() => navigate("/Blog")}
        style={{
          backgroundColor: "#38bdf8",
          color: "#0f172a",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        ← Back to Blogs
      </button>

      {/* Blog Title */}
      <div style={{ maxWidth: "800px" }}>
        <h1
          style={{
            color: "#38bdf8",
            fontSize: "2.5rem",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          How I Started My AI Art Journey 🎨
        </h1>
        <p
          style={{
            color: "#94a3b8",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Published on October 25, 2025 • by LeonDreams.AI
        </p>

        {/* Hero Image (optional placeholder) */}
        <div
          style={{
            width: "100%",
            height: "300px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "1.5rem",
            marginBottom: "40px",
          }}
        >
          AI Art Beginnings ✨
        </div>

        {/* Blog Content */}
        <div
          style={{ lineHeight: "1.8", fontSize: "1.1rem", color: "#e2e8f0" }}
        >
          <p>
            My journey into AI art began with curiosity. I was fascinated by how
            technology could blend creativity and logic — two worlds that once
            seemed separate. I started experimenting with simple prompts,
            turning my imagination into visuals.
          </p>

          <p>
            The first few results were rough — but magical. I realized that
            crafting the right prompt was an art itself. Each detail, word, and
            emotion changed the entire artwork’s feeling.
          </p>

          <p>
            Over time, I started developing my own aesthetic — calm tones,
            dreamy moods, and human-like simplicity. That’s how{" "}
            <strong>LeonDreams.AI</strong> was born — a space where imagination
            meets AI’s endless possibilities.
          </p>

          <p>
            Today, I combine my love for <strong>coding</strong> and{" "}
            <strong>digital art</strong> to explore new creative dimensions. My
            goal? To inspire others to create, experiment, and express — without
            limits.
          </p>
        </div>

        {/* Share / End Section */}
        <div
          style={{
            marginTop: "60px",
            textAlign: "center",
            color: "#94a3b8",
          }}
        >
          <p>✨ Thanks for reading — keep dreaming, keep creating.</p>
        </div>
      </div>
    </div>
  );
}
