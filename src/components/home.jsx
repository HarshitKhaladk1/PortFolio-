import React from "react";
// import { Link } from "react-router-dom";
import Himage from "./homecomponent/himage";
import Hpage1 from "./homecomponent/hpage1";
import Habout from "./homecomponent/habout";
import Hblog from "./homecomponent/hblog";

import Hfollow from "./homecomponent/hfollow";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "#f8fafc",
        minHeight: "100vh",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Hpage1></Hpage1>

      {/* Image Section */}
      <Himage></Himage>

      {/* About My Work */}
      <Habout></Habout>

      {/* Blog Preview */}
      <Hblog></Hblog>

      {/* follow insta */}
      <Hfollow></Hfollow>
    </div>
  );
}
