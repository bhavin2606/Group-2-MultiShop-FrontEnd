import React, { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumbs from "../../../Routes/Breadcrumbs";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("../JSON/wishlist.json")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  return (
    <div>
      <Breadcrumbs />
      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Wishlist</span>
        </h2>
        <div className="conatiner-fluid px-3 ms-3 me-0">
          <div className="row container-fluid">
            {products.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                  <p className="d-flex justify-content-end p-2">
                    <Link className="fs-4 text-decoration-none btn-outline-dark btn-square" to="/shop" >
                      <i className="far fa-heart" />
                    </Link>
                  </p>
                  <div className="product-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src={product.image}
                      alt={product.name}
                    />
                    <div className="product-action">
                      <a className="btn btn-outline-dark btn-square" href="">
                        <i className="fa fa-shopping-cart" />
                      </a>
                      {/* <a className="btn btn-outline-dark btn-square" href="">
                        <i className="far fa-heart" />
                      </a> */}
                      <a className="btn btn-outline-dark btn-square" href="">
                        <i className="fa fa-search" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <a
                      className="h6 text-decoration-none text-truncate"
                      href=""
                    >
                      {product.name}
                    </a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5>${product.price.toFixed(2)}</h5>
                      {product.discountPrice && (
                        <h6 className="text-muted ml-2">
                          <del>${product.discountPrice.toFixed(2)}</del>
                        </h6>
                      )}
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
                      <small>({product.reviews})</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
