import React from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import Breadcrumbs from "../../../Routes/Breadcrumbs";

export default function Cart() {
  return (
    <>
     <Breadcrumbs/>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <CartItem />
          <CartSummary />
        </div>
      </div>
    </>
  );
}
