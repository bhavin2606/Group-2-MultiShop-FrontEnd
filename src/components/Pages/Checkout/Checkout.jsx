import React from "react";
import CheckOutForm from "./CheckOutForm";
import OrderTotal from "./OrderTotal";
import Breadcrumbs from "../../../Routes/Breadcrumbs";

export default function Checkout() {
  return (
    <>
      <Breadcrumbs />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <CheckOutForm />
          <OrderTotal />
        </div>
      </div>
    </>
  );
}
