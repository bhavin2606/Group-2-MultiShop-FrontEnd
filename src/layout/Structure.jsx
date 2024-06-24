import React from "react";
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer";
import { Outlet } from "react-router-dom";

export default function Structure({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
