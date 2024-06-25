import React from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

export default function Cart() {
  return (
    <>
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
              <span className="breadcrumb-item active">Shopping Cart</span>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <CartItem />
          <CartSummary />
        </div>
      </div>
    </>
  );
}
