import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! 😊");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "#f8fafc",
        minHeight: "100vh",
        padding: "50px 20px",
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "10px",
          color: "#38bdf8",
          textAlign: "center",
        }}
      >
        Contact Me 📬
      </h1>
      <p
        style={{
          color: "#94a3b8",
          textAlign: "center",
          marginBottom: "40px",
          maxWidth: "600px",
        }}
      >
        Have a question, idea, or collaboration in mind? I’d love to hear from
        you. Fill out the form below and I’ll reply soon!
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#1e293b",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 0 20px rgba(56, 189, 248, 0.2)",
          width: "100%",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#0f172a",
            color: "#f8fafc",
            fontSize: "1rem",
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#0f172a",
            color: "#f8fafc",
            fontSize: "1rem",
          }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#0f172a",
            color: "#f8fafc",
            fontSize: "1rem",
          }}
        ></textarea>

        <button
          type="submit"
          style={{
            backgroundColor: "#38bdf8",
            color: "#0f172a",
            border: "none",
            borderRadius: "8px",
            padding: "12px",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#7dd3fc")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#38bdf8")}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
