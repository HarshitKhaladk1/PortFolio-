import React from "react";
import { Link } from "react-router";

// Remove this if BlogPost is unused
// import BlogPost from "./BlogPost"; // Adjust path if needed

export default function Blog() {
  const blogPosts = [
    {
      title: "How I Started My AI Art Journey 🎨",
      date: "October 25, 2025",
      description:
        "A story of how I began creating AI-generated art — from experimenting with prompts to building a unique visual identity for LeonDreams.AI.",
      link: "/blogpost",
    },
    {
      title: "Building My First React Portfolio ⚛️",
      date: "November 2, 2025",
      description:
        "How I learned React, designed my portfolio layout, and connected it with my art and creative projects — all from scratch.",
      link: "/blogsecond",
    },
    {
      title: "AI + Creativity: The Future of Digital Expression 🤖✨",
      date: "September 15, 2025",
      description:
        "Exploring how generative AI is changing the creative world, and how artists can adapt, innovate, and thrive in this new era.",
      link: "/thirdblog",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "#f1f5f9",
        minHeight: "100vh",
        padding: "50px 20px",
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header */}
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "10px",
          color: "#38bdf8",
          textAlign: "center",
        }}
      >
        My Blog ✍️
      </h1>
      <p
        style={{
          color: "#94a3b8",
          textAlign: "center",
          marginBottom: "50px",
          maxWidth: "700px",
        }}
      >
        Thoughts, experiments, and lessons from my creative & coding journey. I
        share what I learn — from AI art to front-end development.
      </p>

      {/* Blog Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {blogPosts.map((post, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1e293b",
              borderRadius: "16px",
              padding: "25px",
              boxShadow: "0 0 15px rgba(56, 189, 248, 0.2)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(56, 189, 248, 0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 0 15px rgba(56, 189, 248, 0.2)";
            }}
          >
            <h2 style={{ color: "#38bdf8", marginBottom: "10px" }}>
              {post.title}
            </h2>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.9rem",
                marginBottom: "15px",
              }}
            >
              {post.date}
            </p>
            <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>
              {post.description}
            </p>
            <Link
              to={post.link}
              style={{
                backgroundColor: "#38bdf8",
                color: "#0f172a",
                padding: "10px 18px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#7dd3fc")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#38bdf8")}
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
