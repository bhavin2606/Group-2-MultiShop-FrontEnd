import React, { useEffect, useState } from "react";
import image1 from "../../../assets/img/product-1.jpg";
import image2 from "../../../assets/img/product-2.jpg";
import image3 from "../../../assets/img/product-3.jpg";
import image4 from "../../../assets/img/product-4.jpg";
import image5 from "../../../assets/img/product-5.jpg";
import image6 from "../../../assets/img/product-6.jpg";
import image7 from "../../../assets/img/product-7.jpg";
import image8 from "../../../assets/img/product-8.jpg";
import image9 from "../../../assets/img/product-9.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
export default function ShopProduct() {
  const [toggleGrid, setToggleGrid] = useState(false);
  const [shopProduct, setShopProduct] = useState([]);
  useEffect(() => {
    async function collectData() {
      await axios
        .get("./JSON/product.json")
        .then((response) => setShopProduct(response.data.product))
        .catch((error) => console.log(error));
    }
    collectData();
  }, []);
  console.log(shopProduct);
  return (
    <div className="col-lg-9 col-md-8">
      <div className="row pb-3">
        <div className="col-12 pb-1">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div>
              <button
                className="btn btn-sm btn-light"
                onClick={() => setToggleGrid(false)}
              >
                <i className="fa fa-th-large" />
              </button>
              <button
                className="btn btn-sm btn-light ml-2"
                onClick={() => setToggleGrid(true)}
              >
                <i className="fa fa-bars" />
              </button>
            </div>
            <div className="ml-2">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-light dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Sorting
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">
                    Latest
                  </a>
                  <a className="dropdown-item" href="#">
                    Popularity
                  </a>
                  <a className="dropdown-item" href="#">
                    Best Rating
                  </a>
                </div>
              </div>
              <div className="btn-group ml-2">
                <button
                  type="button"
                  className="btn btn-sm btn-light dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Showing
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">
                    10
                  </a>
                  <a className="dropdown-item" href="#">
                    20
                  </a>
                  <a className="dropdown-item" href="#">
                    30
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {toggleGrid
          ? shopProduct.map((data, index) => (
              <div className="card mb-3 pt-4 pb-0" key={index}>
                <div className="row no-gutters ">
                  <div className="col-md-4 product-item bg-light mb-4">
                    <div className=" product-img position-relative overflow-hidden">
                      <img
                        src={data?.url[0]}
                        className="card-img img-fluid "
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="col-md-8" style={{ marginTop: "100px" }}>
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">{data.detail}</p>
                      <p className="card-text">
                        <div className="d-flex mt-2">
                          <h5>${data.price}</h5>
                          <h6 className="text-muted ml-2">
                            <del>${data.specialPrice}</del>
                          </h6>
                        </div>
                      </p>
                      <div className="d-flex ">
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small>({data.noOfRating})</small>
                    </div>
                    <Link to={`/shop/${data.id}`}>
                      <button className="btn btn-secondary px-3 mt-5 mx-3" style={{backgroundColor:"#E9E9E7"}}>
                        <i className="fa fa-info-circle mr-1" /> View Detail
                    </button>
                    </Link>
                      <button className="btn btn-primary px-3 mt-5">
                        <i className="fa fa-star mr-1" /> Add To WishList
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : shopProduct.slice(0, 9).map((data, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6 pb-1" key={index}>
                <div className="product-item bg-light mb-4">
                  <div className="product-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={data.url[0]} alt="" />
                    <div className="product-action">
                      <Link to={"/wishlist"}>
                        <a className="btn btn-outline-dark btn-square" href="">
                          <i className="far fa-heart" />
                        </a>
                      </Link>
                      <Link to={`/shop/${data.id}`}>
                        <a className="btn btn-outline-dark btn-square" href="">
                          <i className="fa fa-search" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <a
                      className="h6 text-decoration-none text-truncate"
                      href=""
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
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small>({data.noOfRating})</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}

        <div className="col-12">
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
