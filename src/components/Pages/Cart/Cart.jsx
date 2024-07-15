import React from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import Breadcrumbs from "../../../Routes/Breadcrumbs";
import { useGetCartProductsQuery } from "../../../Redux/Slices/CartListApi";

export default function Cart() {
  const { data: cartItem } = useGetCartProductsQuery();
  return (
    <>
      <Breadcrumbs />
      {cartItem?.data?.length > 0 ? (
        <div className="container-fluid">
          <div className="row px-xl-5">
            <CartItem />
            <CartSummary />
          </div>
        </div>
      ) : (
        <div className="container-fluid m-0">
          <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
            <span className="bg-secondary pr-3">Cart</span>
          </h2>
          <h5 className="mx-5">Your Cart is Empty</h5>
        </div>
      )}
    </>
  );
}
