import React from "react";
import { Outlet } from "react-router-dom";
import ShopSidebar from "./ShopSidebar";
import ShopProduct from "./ShopProduct";

export default function Shop() {
  return (
    <>
      {/* breadcrumb */}
      <div class="container-fluid">
        <div class="row px-xl-5">
          <div class="col-12">
            <nav class="breadcrumb bg-light mb-30">
              <a class="breadcrumb-item text-dark" href="#">
                Home
              </a>
              <a class="breadcrumb-item text-dark" href="#">
                Shop
              </a>
              <span class="breadcrumb-item active">Shop List</span>
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
