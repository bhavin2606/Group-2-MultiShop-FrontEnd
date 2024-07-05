import React from "react";
import ShopProductById from "./ShopProductById";
import ShopYouMayLike from "./ShopYouMayLike";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../../Routes/Breadcrumbs";

export default function ShopDetails() {
  const  locations  = useLocation()
  return (
    <>
      <Breadcrumbs/>
      <ShopProductById />
      <ShopYouMayLike />
    </>
  );
}
