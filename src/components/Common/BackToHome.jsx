import React from "react";
import { Link } from "react-router-dom";

export default function BackToHome() {
  return (
    <div>
      <Link to={"/"} className="mt-5 text-light" style={{ fontSize: "18px"}}>
      <i className="bi bi-arrow-left-circle mr-2"></i>
        Back to Home
      </Link>
    </div>
  );
}
