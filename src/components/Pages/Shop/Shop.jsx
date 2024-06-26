import React from "react";
import { Outlet } from "react-router-dom";
import ShopSidebar from "./ShopSidebar";
import ShopProduct from "./ShopProduct";

export default function Shop() {
  return (
    <>
      {/* breadcrumb */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <a className="breadcrumb-item text-dark" href="#">
                Home
              </a>
              <a className="breadcrumb-item text-dark" href="#">
                Shop
              </a>
              <span className="breadcrumb-item active">Shop List</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row px-xl-5">
          <ShopSidebar />
          <ShopProduct />
        </div>
      </div>
    </>
  );
}
