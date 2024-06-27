import React from "react";
import { Outlet } from "react-router-dom";
import ShopSidebar from "./ShopSidebar";
import ShopProduct from "./ShopProduct";
import Breadcrumbs from "../../../Routes/Breadcrumbs";

export default function Shop() {
  return (
    <>
      <Breadcrumbs/>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <ShopSidebar />
          <ShopProduct />
        </div>
      </div>
    </>
  );
}
