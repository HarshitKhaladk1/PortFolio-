import React from "react";
import { useNavigate } from "react-router-dom";

export default function Blogsecond() {
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
      {/* Back Button */}
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
          Building My First React Portfolio ⚛️
        </h1>
        <p
          style={{
            color: "#94a3b8",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Published on November 2, 2025 • by LeonDreams.AI
        </p>

        {/* Hero Section */}
        <div
          style={{
            width: "100%",
            height: "300px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "1.5rem",
            marginBottom: "40px",
          }}
        >
          Coding Dreams Into Reality 💻
        </div>

        {/* Blog Content */}
        <div
          style={{ lineHeight: "1.8", fontSize: "1.1rem", color: "#e2e8f0" }}
        >
          <p>
            When I first discovered React, it felt like a superpower — a way to
            turn imagination into fully functional web experiences. I didn’t
            come from a professional coding background, but I had curiosity and
            creativity.
          </p>

          <p>
            The early days were tough. JSX looked weird, props confused me, and
            components felt like puzzles. But once I understood the flow — how
            small pieces come together to build something big — everything
            clicked.
          </p>

          <p>
            My goal wasn’t just to code — it was to **create art through
            logic**. I wanted to design a website that represents both sides of
            me:
            <strong> AI Art and Code.</strong> That’s how this portfolio began —
            a mix of beauty, function, and storytelling.
          </p>

          <p>
            Every React project I build now carries a part of my journey.
            Learning, experimenting, and designing — step by step, project by
            project. And the best part? There’s still so much more to explore.
          </p>

          <p>
            If you’re a beginner like me once — remember this:
            <em> every pro was once a learner.</em> Don’t compare your start to
            someone’s middle. Just keep coding.
          </p>
        </div>

        {/* Ending */}
        <div
          style={{
            marginTop: "60px",
            textAlign: "center",
            color: "#94a3b8",
          }}
        >
          <p>✨ Keep learning. Keep building. Keep dreaming in code.</p>
        </div>
      </div>
    </div>
  );
}
