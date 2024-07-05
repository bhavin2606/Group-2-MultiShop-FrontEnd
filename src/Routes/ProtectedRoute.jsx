import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return <div>{!token ? <Navigate to={"/signin"} /> : children}</div>;
};

export default ProtectedRoute;
