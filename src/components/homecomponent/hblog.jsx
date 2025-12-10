import React from "react";
import { Link } from "react-router-dom";

export default function hblog() {
  return (
    <>
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "#38bdf8",
            marginBottom: "30px",
          }}
        >
          Latest Blogs 📝
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {[
            { title: "How I Started My AI Art Journey", link: "/blogpost" },
            {
              title: "Building My First React Portfolio ⚛️",
              link: "/blogsecond",
            },
            {
              title: "AI + Creativity: The Future of Digital Expression 🤖✨",
              link: "/thirdblog",
            },
          ].map((blog, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#1e293b",
                padding: "30px",
                borderRadius: "12px",
                width: "280px",
                boxShadow: "0 0 20px rgba(56,189,248,0.2)",
              }}
            >
              <h3 style={{ color: "#f1f5f9" }}>{blog.title}</h3>
              <p style={{ color: "#94a3b8", marginBottom: "15px" }}>
                Read my thoughts on the intersection of art and AI.
              </p>
              <Link
                to={blog.link}
                style={{
                  color: "#38bdf8",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
