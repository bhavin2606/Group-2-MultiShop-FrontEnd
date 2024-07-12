import React from "react";
import {
  useAddReviewMutation,
  useGetAdditionalInformationQuery,
  useGetProductDataByIdQuery,
  useGetProductReviewQuery,
} from "../../../Redux/Slices/ProductApi";
import { useParams } from "react-router-dom";
import RatingIntegration from "../../Common/RatingIntegration";
import { useFormik } from "formik";
import { Rating } from "react-simple-star-rating";

export default function ShopReviewPage() {
  const { id } = useParams();
  const { data } = useGetProductDataByIdQuery(id);
  const { data: additionalinfo } = useGetAdditionalInformationQuery(
    data?.data?.id
  );
  const [addReview] = useAddReviewMutation();
  const { data: reviews } = useGetProductReviewQuery(data?.data?.id);
  const handleRating = (rate) => {
    console.log(rate);
    formik.setFieldValue("rating", rate);
  };
  const formik = useFormik({
    initialValues: {
      comment: "",
      rating: "",
    },
    onSubmit: async (values, action) => {
      let formvalue = new FormData();
      formvalue.append("comment", values.comment);
      formvalue.append("rating", values.rating);

      console.log(values, "values of comment");
      await addReview({ id: data?.data?.id, review: formvalue });
    },
  });
  return (
    <div>
      <div className="row px-xl-5">
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
                        <div className="text-primary fs-1">
                          <Rating
                            onClick={handleRating}
                            // onChange={formik.handleChange}
                            className="display-8"
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
      </div>
    </div>
  );
}
