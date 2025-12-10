import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
export default function askills() {
  return (
    <>
      <section style={{ backgroundColor: "#111827", padding: "80px 0" }}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 style={{ color: "#60a5fa", fontWeight: 600 }}>My Skills</h2>
              <p style={{ color: "#9ca3af" }}>
                Constantly learning and improving every day.
              </p>
            </Col>
          </Row>

          <Row className="g-4 text-center">
            {[
              "React.js",
              "JavaScript (ES6+)",
              "Python",
              "AI Art Generation",
              "HTML / CSS / Bootstrap",
              "Photography & Editing",
            ].map((skill, i) => (
              <Col key={i} md={4}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: "#1f2937",
                    padding: "25px",
                    borderRadius: "15px",
                    fontWeight: 500,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                  }}
                >
                  {skill}
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
