import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RatingIntegration from "../../Common/RatingIntegration";
import { useGetProductDataByIdQuery } from "../../../Redux/Slices/ProductApi";
import { useFormik } from "formik";
import { useAddCartItemMutation } from "../../../Redux/Slices/CartListApi";
import ShopReviewPage from "./ShopReviewPage";
export default function ShopProductById() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const { data } = useGetProductDataByIdQuery(id);
  const [AddCartItem] = useAddCartItemMutation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      size: "",
      color: "",
      quantity: 1,
    },
    onSubmit: (values) => {
      const formitem = new FormData();
      formitem.append("size", values.size);
      formitem.append("color", values.color);
      formitem.append("quantity", values.quantity);
      AddCartItem({ id: data?.data?.id, product: formitem });
      navigate("/cart")
    },
  });

  const handlePlus = () => {
    formik.setFieldValue("quantity",formik.values.quantity += 1)
  };
  const handleMinus = () => {
    if (formik.values.quantity > 1) {
      formik.setFieldValue("quantity",formik.values.quantity -= 1)
    }
  };
  return (
    <div className="container-fluid pb-5">
      <div className="row px-xl-5">
        <div className="col-lg-5 mb-30">
          <div
            id="product-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div
              className="carousel-inner bg-light"
              style={{ height: "700px" }}
            >
              {data?.data?.product_images?.map((url, index) => (
                <div
                  className={
                    index === 0 ? "carousel-item active" : "carousel-item"
                  }
                >
                  <img
                    className="w-100 "
                    src={url?.image}
                    alt="Image"
                    style={{ height: "800px" }}
                  />
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev"
              href="#product-carousel"
              data-slide="prev"
            >
              <i className="fa fa-2x fa-angle-left text-dark" />
            </a>
            <a
              className="carousel-control-next"
              href="#product-carousel"
              data-slide="next"
            >
              <i className="fa fa-2x fa-angle-right text-dark" />
            </a>
          </div>
        </div>
        <div className="col-lg-7 h-auto mb-30">
          <div className="h-100 bg-light p-30">
            <h3>{data?.data?.name}</h3>
            <div className="d-flex mb-3">
              <div className="text-primary mr-2">
                <RatingIntegration star={data?.data?.avg_rate} />
              </div>
              <small className="pt-1">
                ({data?.data?.total_review} Reviews)
              </small>
            </div>
            <h3 className="font-weight-semi-bold mb-4">${data?.data?.price}</h3>
            <p className="mb-4">{data?.data?.description}</p>
            <form onSubmit={formik.handleSubmit}>
              <div className="d-flex mb-3">
                {data?.data?.size?.length > 0 ? (
                  <strong className="text-dark mr-3">Sizes:</strong>
                ) : (
                  <></>
                )}
                {data?.data?.size?.length > 0 &&
                  data?.data?.size?.map((size, index) => (
                    <div
                      className="custom-control custom-radio custom-control-inline"
                      key={index}
                    >
                      <input
                        type="radio"
                        className="custom-control-input"
                        id={size}
                        name="size"
                        onChange={formik.handleChange}
                        value={size}
                      />
                      <label className="custom-control-label" htmlFor={size}>
                        {size}
                      </label>
                    </div>
                  ))}
              </div>
              <div className="d-flex mb-4">
                {data?.data?.colors?.length > 0 ? (
                  <strong className="text-dark mr-3">Colors:</strong>
                ) : (
                  <></>
                )}

                {data?.data?.colors?.map((color, index) => (
                  <div
                    className="custom-control custom-radio custom-control-inline"
                    key={index}
                  >
                    <input
                      type="radio"
                      className="custom-control-input"
                      id={color?.color}
                      name="color"
                      onChange={formik.handleChange}
                      value={color?.color}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor={color.color}
                    >
                      {color.color}
                    </label>
                  </div>
                ))}
              </div>

              <div className="d-flex align-items-center mb-4 pt-2">
                <div
                  className="input-group quantity mr-3"
                  style={{ width: 130 }}
                >
                  <div className="input-group-btn">
                    <button
                      className="btn btn-primary btn-minus"
                      onClick={handleMinus}
                      type="button"
                      disabled={formik.values.quantity <= 1}
                    >
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    className="form-control bg-secondary border-0 text-center"
                    onChange={formik.handleChange}
                    value={formik?.values?.quantity}
                  />
                  <div className="input-group-btn">
                    <button
                      className="btn btn-primary btn-plus"
                      onClick={handlePlus}
                      type="button"
                    >
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
                {/* <Link to={"/cart"}> */}
                  <button className="btn btn-primary px-3" type="submit">
                    <i className="fa fa-shopping-cart mr-1" /> Add To Cart
                  </button>
                {/* </Link> */}
              </div>
            </form>
            <div className="d-flex pt-2">
              <strong className="text-dark mr-2">Share on:</strong>
              <div className="d-inline-flex">
                <a className="text-dark px-2" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="text-dark px-2" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="text-dark px-2" href="">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a className="text-dark px-2" href="">
                  <i className="fab fa-pinterest" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShopReviewPage />
      {/* <div className="row px-xl-5">
        <div className="col">
          <div className="bg-light p-30">
            <div className="nav nav-tabs mb-4">
              <a
                className="nav-item nav-link text-dark active"
                data-toggle="tab"
                href="#tab-pane-1"
              >
                Description
              </a>
              <a
                className="nav-item nav-link text-dark"
                data-toggle="tab"
                href="#tab-pane-2"
              >
                Information
              </a>
              <a
                className="nav-item nav-link text-dark"
                data-toggle="tab"
                href="#tab-pane-3"
              >
                Reviews ({reviews?.data?.product_review?.length})
              </a>
            </div>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-pane-1">
                <h4 className="mb-3">Product Description</h4>
                <p>{additionalinfo?.data?.product_information?.description}</p>
              </div>
              <div className="tab-pane fade" id="tab-pane-2">
                <h4 className="mb-3">Additional Information</h4>
                <p>
                  {
                    additionalinfo?.data?.product_information
                      ?.additional_information
                  }
                </p>
              </div>
              <div className="tab-pane fade" id="tab-pane-3">
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="mb-4">
                      {reviews?.data?.product_review?.length} review for "
                      {reviews?.data?.name}"
                    </h4>
                    <div className="review-sidebar">
                      {reviews?.data?.product_review?.map((data, index) => (
                        <div className="media mb-4 review-section">
                          <img
                            src={data?.user?.image}
                            alt="Image"
                            className="img-fluid mr-3 mt-1"
                            style={{ width: 45 }}
                          />
                          <div className="media-body">
                            <h6>
                              {data?.user?.first_name}
                              <small>
                                {" "}
                                - <i>01 Jan 2045</i>
                              </small>
                            </h6>
                            <div className="text-primary mb-2">
                              <RatingIntegration star={data?.rating} />
                            </div>
                            <p>{data?.comment}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h4 className="mb-4">Leave a review</h4>
                    <small>
                      Your email address will not be published. Required fields
                      are marked *
                    </small>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="d-flex my-3">
                        <p className="mb-0 mr-2">Your Rating * :</p>
                        <div className="text-primary">
                          <Rating
                            onClick={handleRating}
                            // onChange={formik.handleChange}
                            className="display-6"
                            id="rating"
                            name="rating"
                            value={formik.values.rating}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Your Review *</label>
                        <textarea
                          id="comment"
                          name="comment"
                          cols={30}
                          rows={5}
                          className="form-control"
                          value={formik.values.comment}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className="form-group mb-0">
                        <input
                          type="submit"
                          defaultValue="Leave Your Review"
                          className="btn btn-primary px-3"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
