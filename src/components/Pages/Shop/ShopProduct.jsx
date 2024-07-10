import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RatingIntegration from "../../Common/RatingIntegration";
import { useGetFeaturedProductDataQuery } from "../../../Redux/Slices/ProductApi";
import { usePostWishListDataMutation } from "../../../Redux/Slices/WishListApi";
import { toast } from "react-toastify";
export default function ShopProduct() {
  const [toggleGrid, setToggleGrid] = useState(false);
  const { data } = useGetFeaturedProductDataQuery();
  const [postWishListData] = usePostWishListDataMutation();

  const handleWishlistSubmit = async (p_id) => {
    console.log(p_id);
    let data = await postWishListData(p_id);
    console.log(data, "HElllllllllllllllll");
    if (data?.data?.success === true) {
      toast.success(data?.data?.message);
    } else {
      toast.error(data?.data?.message);
    }
  };

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
                  <Link className="dropdown-item" to="#">
                    Latest
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Popularity
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Best Rating
                  </Link>
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
                  <Link className="dropdown-item" to="#">
                    10
                  </Link>
                  <Link className="dropdown-item" to="#">
                    20
                  </Link>
                  <Link className="dropdown-item" to="#">
                    30
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {toggleGrid
          ? data?.data?.map((data, index) => (
              <div className="card mb-3 pt-4 pb-0" key={index}>
                <div className="row no-gutters ">
                  <div className="col-md-4 product-item bg-light mb-4">
                    <div className=" product-img position-relative overflow-hidden">
                      <img
                        src={data?.product_image}
                        className="card-img img-fluid "
                        style={{ height: "510px" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8" style={{ marginTop: "100px" }}>
                    <div className="card-body">
                      <h5 className="card-title">{data?.name}</h5>
                      <p className="card-text">{data.short_desc}</p>
                      <div className="card-text">
                        <div className="d-flex mt-2">
                          <h5>${data?.price}</h5>
                          <h6 className="text-muted ml-2">
                            {data?.discount_type === "fixed" && (
                              <del>${data?.price - data?.discount_value}</del>
                            )}
                          </h6>
                        </div>
                      </div>
                      <div className="d-flex ">
                        <RatingIntegration star={""} />
                        <small>({data?.total_review})</small>
                      </div>
                      <Link to={`/shop/${data?.slug}`}>
                        <button
                          className="btn btn-secondary px-3 mt-5 mx-3"
                          style={{ backgroundColor: "#E9E9E7" }}
                        >
                          <i className="fa fa-info-circle mr-1" /> View Detail
                        </button>
                      </Link>
                      <button
                        className="btn btn-primary px-3 mt-5"
                        onClick={() => handleWishlistSubmit(data?.id)}
                      >
                        <i className="fa fa-heart mr-1" /> Add To WishList
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : data?.data?.map((data, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6 pb-1" key={index}>
                <div className="product-item bg-light mb-4">
                  <div className="product-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src={data.product_image}
                      style={{ height: "510px" }}
                    />
                    <div className="product-action">
                      <Link
                        type="button"
                        onClick={() => {
                          handleWishlistSubmit(data?.id);
                        }}
                        className={data?.isWishlist === 0 ? `btn btn-outline-dark btn-square` : `btn btn-dark btn-square`}
                      >
                        <i className="far fa-heart" />
                      </Link>
                      <Link
                        to={`/shop/${data?.slug}`}
                        className="btn btn-outline-dark btn-square"
                      >
                        <i className="fa fa-search" />
                      </Link>
                    </div>
                  </div>
                  <div className="text-center py-4 p-4">
                    <Link
                      className="h6 text-decoration-none text-truncate"
                      data-toggle="tooltip"
                      data-placement="top"
                      title={data.name}
                    >
                      {data.name}
                    </Link>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5>${data.price}</h5>
                      {/* <h6 className="text-muted ml-2">
                        {data?.discount_type === "fixed" && (
                          <del>${data?.price - data?.discount_value}</del>
                        )}
                      </h6> */}
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                      <RatingIntegration star={data.avg_rating} />
                      <small>({data.total_review})</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}

        <div className="col-12">
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
