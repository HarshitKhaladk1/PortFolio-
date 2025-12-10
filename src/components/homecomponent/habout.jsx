import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
export default function habout() {
  return (
    <>
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          backgroundColor: "#1e293b",
        }}
      >
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2
              style={{
                fontSize: "2rem",
                color: "#38bdf8",
                marginBottom: "20px",
              }}
            >
              About My Work
            </h2>
            <p
              style={{
                maxWidth: "800px",
                margin: "0 auto",
                color: "#cbd5e1",
                lineHeight: "1.7",
                fontSize: "1.1rem",
              }}
            >
              I specialize in blending <b>AI algorithms</b> with human
              creativity to generate art that evokes emotion and curiosity.
              Through my work, I aim to inspire others to see technology as an
              artistic partner — not a replacement.
            </p>
          </motion.div>
        </Col>
      </section>
    </>
  );
}
