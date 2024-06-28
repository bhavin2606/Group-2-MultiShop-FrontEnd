import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RatingIntegration from "../../Common/RatingIntegration";
export default function ProductFeatured() {
  const [productFeatured, setProductFeatured] = useState([]);
  useEffect(() => {
    async function collectData() {
      await axios
        .get("./JSON/product.json")
        .then((response) => setProductFeatured(response.data.product))
        .catch((error) => console.log(error));
    }
    collectData();
  }, []);

  return (
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Featured Products</span>
      </h2>
      <div className="row px-xl-5">
        {productFeatured.slice(0, 8).map((data, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={data.url[0]} alt="" />
                <div className="product-action">
                  <Link
                    to={"/wishlist"}
                    className="btn btn-outline-dark btn-square"
                  >
                    <i className="far fa-heart" />
                  </Link>
                  <Link
                    className="btn btn-outline-dark btn-square"
                    to={`/shop/${data.id}`}
                  >
                    <i className="fa fa-search" />
                  </Link>
                </div>
              </div>
              <div className="text-center py-4">
                <a
                  className="h6 text-decoration-none text-truncate"
                  href=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title={data.title}
                >
                  {data.title}
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>${data.price}</h5>
                  <h6 className="text-muted ml-2">
                    <del>${data.specialPrice}</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <RatingIntegration star={data.rating} />
                  <small>({data.noOfRating})</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
