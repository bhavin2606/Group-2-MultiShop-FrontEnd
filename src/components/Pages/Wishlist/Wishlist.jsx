import React, { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumbs from "../../../Routes/Breadcrumbs";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("../JSON/wishlist.json")
      .then((response) => {
        const productsWithWishlistState = response.data.map((product) => ({
          ...product,
          isWishlist: true, // Default state is in wishlist for initial load
        }));
        setProducts(productsWithWishlistState);
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  const toggleWishlist = (productId, event) => {
    event.stopPropagation(); // Prevent the event from propagating to parent elements
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isWishlist: !product.isWishlist }
          : product
      );
      return updatedProducts;
    });
  };

  // Filter products to only show those in the wishlist
  const wishlistProducts = products.filter((product) => product.isWishlist);

  return (
    <div>
      <Breadcrumbs />
      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Wishlist</span>
        </h2>
        <div className="container-fluid px-3 ms-3 me-0">
          <div className="row container-fluid">
            {wishlistProducts.length > 0 ? (
              wishlistProducts.map((product) => (
                <div key={product.id} className="col-lg-2 col-md-4 col-sm-6 pb-1">
                  <div className="product-item bg-light mb-4">
                    <p className="d-flex justify-content-end p-2">
                      <button
                        className="fs-5 text-decoration-none btn border-0"
                        onClick={(event) => toggleWishlist(product.id, event)}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <i
                          className={`fa ${
                            product.isWishlist
                              ? "fa-regular fa-heart" // White outlined heart
                              : "fa-solid fa-heart" // Black filled heart
                          }`}
                          style={{ color: product.isWishlist ? "" : "#3d464d" }}
                        />
                      </button>
                    </p>
                    <div className="product-img position-relative overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src={product.image}
                        alt={product.name}
                      />
                      <div className="product-action">
                        <Link className="btn btn-outline-dark btn-square" to="">
                          <i className="fa fa-shopping-cart" />
                        </Link>
                        <Link className="btn btn-outline-dark btn-square" to="">
                          <i className="fa fa-search" />
                        </Link>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <Link
                        className="h6 text-decoration-none text-truncate"
                        to=""
                      >
                        {product.name}
                      </Link>
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
              ))
            ) : (
              <p>No items in the wishlist.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
