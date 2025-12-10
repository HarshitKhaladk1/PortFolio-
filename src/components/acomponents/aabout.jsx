import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
export default function aabout() {
  return (
    <>
      <section style={{ padding: "80px 0" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Profile"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                  }}
                />
              </motion.div>
            </Col>

            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <h2 style={{ color: "#60a5fa", fontWeight: 600 }}>Who Am I?</h2>
                <p
                  style={{
                    color: "#94a3b8",
                    marginTop: "10px",
                    lineHeight: "1.8",
                  }}
                >
                  I started my journey with a love for digital art and evolved
                  into a self-taught developer who combines creativity and
                  logic.
                  <br />
                  <br />I enjoy experimenting with *AI tools, **React, and
                  **modern design* systems to create immersive experiences. My
                  goal is to inspire and build projects that feel alive — a
                  perfect blend of art and technology.
                </p>
              
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
