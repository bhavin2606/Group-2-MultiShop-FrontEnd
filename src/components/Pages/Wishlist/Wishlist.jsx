import React, { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumbs from "../../../Routes/Breadcrumbs";
import { Link } from "react-router-dom";
import { useGetWishListDataQuery } from "../../../Redux/Slices/WishListApi";
// import { useGetWishListDataQuery } from "../../../Redux/Slices/WishListApi";

export default function Wishlist() {
  // const [products, setProducts] = useState([]);
  // const [discountedPrice, setDiscountedPrice] = useState(null);
  // console.log(discountedPrice);
  const { data, isError } = useGetWishListDataQuery();

  console.log(data,"dataddddddddd newwwwwww")

  return (
    <div>
      <Breadcrumbs />
      <div className="container-fluid m-0">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Wishlist</span>
        </h2>
        <div className="container-fluid px-3 px-5 me-0">
          <div className="row container-fluid">
            {data?.length > 0 ? (
              data?.map(
                (product) =>
                  product?.product && (
                    <div
                      key={product.id}
                      className="col-lg-2 d-flex justify-content-start w-100 col-md-4 col-sm-6 pb-1"
                    >
                        <div className="product-item bg-light w-100 mb-4">
                        <p className="d-flex justify-content-end p-0">
                          <button
                            className="fs-5 text-decoration-none btn border-0"
                            // onClick={(event) => toggleWishlist(product.id, event)}
                            style={{ backgroundColor: "transparent" }}
                          >
                            <i
                              className={"fa fa-solid fa-heart"}
                              style={{
                                color: product?.product?.is_featured
                                  ? ""
                                  : "#3d464d",
                              }}
                            />
                          </button>
                        </p>
                        <div className="product-img position-relative  overflow-hidden">
                          <img
                            className="img-fluid w-100 "
                            src={
                              product?.product?.product_image[0].product_image
                            }
                            style={{height: "330px"}}
                            alt={product.name}
                          />
                          <div className="product-action">
                            <Link
                              className="btn btn-outline-dark btn-square"
                              to=""
                            >
                              <i className="fa fa-shopping-cart" />
                            </Link>
                            <Link
                              className="btn btn-outline-dark btn-square"
                              to={`/shop/${data.product_id}`}
                            >
                              <i className="fa fa-search" />
                            </Link>
                          </div>
                        </div>
                        <div className="text-center py-4">
                          <Link
                            className="h6 text-decoration-none text-truncate"
                            to=""
                          >
                            {product?.product?.product_name}
                          </Link>
                          <div className="d-flex align-items-center justify-content-center mt-2">
                            {/* <h5> */}
                            {product?.product?.discount_type === "fixed" ? (
                              <h5>
                                {product?.product?.price -
                                  product?.product?.discount_value}
                              </h5>
                            ) : (
                              <h5>
                                {(
                                 product?.product?.price - ((product?.product?.price * product?.product?.discount_value )/ 100)) }
                              </h5>
                            )}
                            {/* </h5> */}

                            <h6 className="text-muted ml-2">
                              <del>${product?.product?.price}</del>
                            </h6>
                          </div>
                          <div className="d-flex align-items-center justify-content-center mb-1">
                            {[...Array(5)].map((_, index) => (
                              <small
                                key={index}
                                className={`fa ${
                                  index < product.rating
                                    ? "fa-star"
                                    : index < product.rating + 0.5
                                    ? "fa-star-half-alt"
                                    : "fa-star"
                                } text-primary mr-1`}
                              />
                            ))}
                            <small>({product.reviews}99)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )
            ) : (
              <h5>No items in the wishlist.</h5>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
