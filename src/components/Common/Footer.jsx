import React, { useEffect, useMemo, useState } from "react";
import { newsLetterSchema } from "../validations/newsLetterSchema";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { postNewsLetterData } from "../../Redux/Actions/postApiData";
import { getSettingData } from "../../Redux/Actions/getApiData";
import { Link } from "react-router-dom";
import { useGetSettingDataQuery } from "../../Redux/api";

export default function Footer() {
  const [settingData, setSettingData] = useState([]);
  const initialValues = {
    email: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: newsLetterSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: async (values, action) => {
        await postNewsLetterData(values);
        action.resetForm();
        // toast.success("Subscribed Successfully!");
      },
    });

  const { data:settingdata } = useGetSettingDataQuery()
  return (
    <div>
      <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
          {settingdata &&
            settingdata?.footer?.map((data, index) => (
              <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5" key={index}>
                <h5 className="text-secondary text-uppercase mb-4">
                  Get In Touch
                </h5>
                <p className="mb-4">{data.description}</p>
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt text-primary mr-3" />
                  {data.address}
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope text-primary mr-3" />
                  {data.email}
                </p>
                <p className="mb-0">
                  <i className="fa fa-phone-alt text-primary mr-3" />
                  {data.contact}
                </p>
              </div>
            ))}
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">
                  Quick Shop
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-secondary mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Home
                  </a>
                  <a className="text-secondary mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Our Shop
                  </a>
                  <a className="text-secondary mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Shopping Cart
                  </a>
                  <a className="text-secondary mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Checkout
                  </a>
                  <a className="text-secondary" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">
                  My Account
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-secondary mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Home
                  </a>
                  <a className="text-secondary mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Our Shop
                  </a>
                  <a className="text-secondary mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Shopping Cart
                  </a>
                  <a className="text-secondary mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Checkout
                  </a>
                  <a className="text-secondary" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">
                  Newsletter
                </h5>
                <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                <form action="">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email Address"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error text-danger">{errors.email}</p>
                    ) : null}
                    <div className="input-group-append">
                      <button
                        onClick={handleSubmit}
                        className="btn btn-primary"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
                <h6 className="text-secondary text-uppercase mt-4 mb-3">
                  Follow Us
                </h6>
                {settingData &&
                  settingData?.footer?.map((data, index) => (
                    <div className="d-flex" key={index}>
                      <Link className="btn btn-primary btn-square mr-2" to={data.twitter}>
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link className="btn btn-primary btn-square mr-2" to={data.facebook}>
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link className="btn btn-primary btn-square mr-2" to={data.linkedIn}>
                        <i className="fab fa-linkedin-in" />
                      </Link>
                      <Link className="btn btn-primary btn-square" to={data.instagram}>
                        <i className="fab fa-instagram" />
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="row border-top mx-xl-5 py-4"
          style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
        >
          <div className="col-md-6 px-xl-0">
            <p className="mb-md-0 text-center text-md-left text-secondary">
              ©{" "}
              <a className="text-primary" href="#">
                Domain
              </a>
              . All Rights Reserved. Designed by
              <a className="text-primary" href="https://htmlcodex.com">
                HTML Codex
              </a>
            </p>
          </div>
          <div className="col-md-6 px-xl-0 text-center text-md-right">
            <img className="img-fluid" src="img/payments.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
