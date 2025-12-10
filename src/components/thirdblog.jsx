import React from "react";
import { useNavigate } from "react-router-dom";

export default function ThirdBlog() {
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
          AI + Creativity: The Future of Digital Expression 🤖✨
        </h1>
        <p
          style={{
            color: "#94a3b8",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Published on September 15, 2025 • by LeonDreams.AI
        </p>

        {/* Hero Section */}
        <div
          style={{
            width: "100%",
            height: "300px",
            borderRadius: "16px",
            background:
              "linear-gradient(135deg, #6d28d9 0%, #38bdf8 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "1.5rem",
            marginBottom: "40px",
          }}
        >
          When Art Meets Intelligence 🎨🤖
        </div>

        {/* Blog Content */}
        <div style={{ lineHeight: "1.8", fontSize: "1.1rem", color: "#e2e8f0" }}>
          <p>
            We live in an extraordinary era — one where art and artificial
            intelligence merge into something new, something infinite. What was
            once limited by brush, canvas, or software is now limitless through
            prompts, models, and imagination.
          </p>

          <p>
            AI doesn’t replace creativity — it **enhances** it. It’s like having
            a digital muse that can visualize your thoughts instantly. The
            artist’s role evolves from manual creation to *concept direction* —
            crafting the vision, emotion, and style.
          </p>

          <p>
            For me, AI art isn’t about perfection. It’s about **expression**. I
            use it to explore feelings, worlds, and moods that would take weeks
            to paint manually. Through platforms like LeonDreams.AI, I’m able to
            bring emotions to pixels in seconds.
          </p>

          <p>
            The future belongs to those who collaborate with machines, not fear
            them. Artists who adapt — who see AI as a partner rather than a
            rival — will define the next creative generation.
          </p>

          <p>
            Creativity has always been about transformation — from cave art to
            digital design, and now, from human mind to AI imagination. The
            tools may evolve, but the soul of creativity remains the same:
            **to express what words can’t**.
          </p>
        </div>

        {/* End Section */}
        <div
          style={{
            marginTop: "60px",
            textAlign: "center",
            color: "#94a3b8",
          }}
        >
          <p>
            ✨ The future of art is not AI. It’s *AI + Human* — a collaboration
            that redefines what’s possible.
          </p>
        </div>
      </div>
    </div>
  );
}