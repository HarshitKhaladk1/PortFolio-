import React from "react";
import { Link } from "react-router-dom";

export default function himage() {
  return (
    <>
      {/* Image Section */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          color: "#f8fafc",
          gap: "20px",
          fontFamily: "Poppins, sans-serif",
          padding: "60px 20px",
        }}
      >
        <div>
          <h1>MY AI ARTWORKS</h1>
          <center>
            <p>Curated artworks by @leondreams.ai</p>
          </center>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",

            padding: "60px 20px",
          }}
        >
          <img
            src="https://files.catbox.moe/1d9xm9.jpg
          "
            alt="AI Art"
            style={{
              width: "300px",
              height: "350px",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 0 20px rgba(56,189,248,0.3)",
            }}
          />
          <img
            src="https://files.catbox.moe/mrcqst.png"
            alt="Coding"
            style={{
              width: "300px",
              height: "350px",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 0 20px rgba(244,114,182,0.3)",
            }}
          />
          <img
            src="https://files.catbox.moe/hfwxry.png"
            alt="Creativity"
            style={{
              width: "300px",
              height: "350px",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 0 20px rgba(96,165,250,0.3)",
            }}
          />
          <img
            src="https://files.catbox.moe/29zamt.jpg"
            alt="Creativity"
            style={{
              width: "300px",
              height: "350px",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 0 20px rgba(96,165,250,0.3)",
            }}
          />
          <img
            src="https://files.catbox.moe/3tq6c4.png"
            alt="Creativity"
            style={{
              width: "300px",
              height: "350px",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 0 20px rgba(96,165,250,0.3)",
            }}
          />
          <img
            src="https://files.catbox.moe/5qyz3q.jpg"
            alt="Creativity"
            style={{
              width: "300px",
              height: "350px",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 0 20px rgba(96,165,250,0.3)",
            }}
          />
        </div>
      </section>
    </>
  );
}
