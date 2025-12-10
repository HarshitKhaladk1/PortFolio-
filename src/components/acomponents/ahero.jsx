import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
export default function ahero() {
  return (
    <>
      <section
        style={{
          background:
            "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",
          padding: "100px 20px 60px",
          textAlign: "center",
        }}
      >
        <Container>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ fontSize: "3rem", fontWeight: 700 }}
          >
            About <span style={{ color: "#60a5fa" }}>Me</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            style={{
              maxWidth: "700px",
              margin: "20px auto 0",
              fontSize: "1.1rem",
              color: "#cbd5e1",
            }}
          >
            I'm <strong>Harshit</strong>, a creative developer and AI artist
            passionate about crafting interactive experiences that merge
            technology, imagination, and emotion.
          </motion.p>
        </Container>
      </section>
    </>
  );
}
