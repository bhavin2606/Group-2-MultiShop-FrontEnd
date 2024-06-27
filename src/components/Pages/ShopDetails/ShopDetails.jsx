import React from "react";
import ShopProductById from "./ShopProductById";
import ShopYouMayLike from "./ShopYouMayLike";
import Breadcrumbs from "../../../Routes/Breadcrumbs";

export default function ShopDetails() {
  return (
    <>
      <Breadcrumbs/>
      <ShopProductById />
      <ShopYouMayLike />
    </>
  );
}
