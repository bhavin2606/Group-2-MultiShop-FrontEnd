import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ShopSidebar() {
  const [shopSideBar, setShopSideBar] = useState([]);
  useEffect(() => {
    async function collectData() {
      axios
        .get("./JSON/shopsidebar.json")
        .then((response) => setShopSideBar(response.data))
        .catch((error) => console.log(error));
    }
    collectData();
  }, []);
  return (
    <div className="col-lg-3 col-md-4 shop-sidebar">
      {/* Price Start */}
      <h5 className="section-title position-relative text-uppercase mb-3 ">
        <span className="bg-secondary pr-3">Filter by price</span>
      </h5>
      <div className="bg-light p-4 mb-30 ">
        <form>
          {shopSideBar?.price?.map((price, index) => (
            <div
              key={index}
              className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
            >
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked=""
                id={price.id}
              />
              <label className="custom-control-label" htmlFor={price.id}>
                {price.price}
              </label>
              <span className="border px-1" style={{ fontSize: "12px" }}>
                {price.totalProduct}
              </span>
            </div>
          ))}
        </form>
      </div>
      {/* Price End */}
      {/* Color Start */}
      <div className="color-stick">
        <h5 className="section-title position-relative text-uppercase mb-3 ">
          <span className="bg-secondary pr-3">Filter by color</span>
        </h5>
        <div className="bg-light p-4 mb-30">
          <form>
            {shopSideBar?.color?.map((color, index) => (
              <div
                key={index}
                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
              >
                <input
                  type="checkbox"
                  className="custom-control-input"
                  defaultChecked=""
                  id={color.id}
                />
                <label className="custom-control-label" htmlFor={color.id}>
                  {color.colors}
                </label>
                <span className="badge border font-weight-normal">
                  {color.totalProduct}
                </span>
              </div>
            ))}
          </form>
        </div>
      </div>
      {/* Color End */}
      {/* Size Start */}
      <div className="size-stick">
        <h5 className="section-title position-relative text-uppercase mb-3">
          <span className="bg-secondary pr-3">Filter by size</span>
        </h5>
        <div className="bg-light p-4 mb-30">
          <form>
            {shopSideBar?.size?.map((size, index) => (
              <div
                key={index}
                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
              >
                <input
                  type="checkbox"
                  className="custom-control-input"
                  defaultChecked=""
                  id={size.id}
                />
                <label className="custom-control-label" htmlFor={size.id}>
                  {size.sizes}
                </label>
                <span className="badge border font-weight-normal">
                  {size.totalProduct}
                </span>
              </div>
            ))}
          </form>
        </div>
        {/* Size End */}
      </div>
    </div>
  );
}
