import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Ahero from "./acomponents/ahero";
import Aabout from "./acomponents/aabout";
import Askills from "./acomponents/askills";
export default function about() {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "#f1f5f9",
        minHeight: "100vh",
      }}
    >
      {/* HERO SECTION */}
      <Ahero></Ahero>
      {/* ABOUT CONTENT */}
      <Aabout></Aabout>
      {/* SKILLS / HIGHLIGHTS */}
      <Askills></Askills>
    </div>
  );
}
