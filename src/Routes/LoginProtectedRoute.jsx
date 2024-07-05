import React from "react";
import { Navigate } from "react-router-dom";

const LoginProtectedRoute = ({ children }) => {
  let token = localStorage.getItem("token");

  return <div>{!token ? children : <Navigate to={"/"} />}</div>;
};

export default LoginProtectedRoute;
  