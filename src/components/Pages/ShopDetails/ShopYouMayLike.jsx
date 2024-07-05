import React from "react";
import { Link } from "react-router-dom";

export default function ShopYouMayLike() {
  return (
    <>
      <div className="container-fluid py-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">You May Also Like</span>
        </h2>
        <div className="row px-xl-5">
          <div className="col">
            <div className="owl-carousel related-carousel">
              <div className="product-item bg-light">
                <div className="product-img position-relative overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="img/product-1.jpg"
                    alt=""
                  />
                  <div className="product-action">
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="fa fa-shopping-cart" />
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="far fa-heart" />
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="fa fa-sync-alt" />
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="fa fa-search" />
                    </Link>
                  </div>
                </div>
                <div className="text-center py-4">
                  <Link className="h6 text-decoration-none text-truncate" to="">
                    Product Name Goes Here
                  </Link>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
              <div className="product-item bg-light">
                <div className="product-img position-relative overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="img/product-2.jpg"
                    alt=""
                  />
                  <div className="product-action">
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="fa fa-shopping-cart" />
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="far fa-heart" />
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="fa fa-sync-alt" />
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="fa fa-search" />
                    </Link>
                  </div>
                </div>
                <div className="text-center py-4">
                  <Link className="h6 text-decoration-none text-truncate" to="">
                    Product Name Goes Here
                  </Link>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
              <div className="product-item bg-light">
                <div className="product-img position-relative overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="img/product-3.jpg"
                    alt=""
                  />
                  <div className="product-action">
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="fa fa-shopping-cart" />
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="far fa-heart" />
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="fa fa-sync-alt" />
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="fa fa-search" />
                    </Link>
                  </div>
                </div>
                <div className="text-center py-4">
                  <Link className="h6 text-decoration-none text-truncate" to="">
                    Product Name Goes Here
                  </Link>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
              <div className="product-item bg-light">
                <div className="product-img position-relative overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="img/product-4.jpg"
                    alt=""
                  />
                  <div className="product-action">
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="fa fa-shopping-cart" />
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="far fa-heart" />
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="fa fa-sync-alt" />
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="fa fa-search" />
                    </Link>
                  </div>
                </div>
                <div className="text-center py-4">
                  <Link className="h6 text-decoration-none text-truncate" to="">
                    Product Name Goes Here
                  </Link>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
              <div className="product-item bg-light">
                <div className="product-img position-relative overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src="img/product-5.jpg"
                    alt=""
                  />
                  <div className="product-action">
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="fa fa-shopping-cart" />
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="far fa-heart" />
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="fa fa-sync-alt" />
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" to="">
                      <i className="fa fa-search" />
                    </Link>
                  </div>
                </div>
                <div className="text-center py-4">
                  <Link className="h6 text-decoration-none text-truncate" to="">
                    Product Name Goes Here
                  </Link>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}
