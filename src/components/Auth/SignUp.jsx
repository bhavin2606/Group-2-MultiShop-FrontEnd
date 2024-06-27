import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../validations/signUpSchema";
import BackToHome from "../Common/BackToHome";
import logo from "../../assets/img/logo.png";

export default function SignUp() {
  let [isRegister, setRegistered] = useState(
    localStorage.getItem("isRegistered")
      ? JSON.parse(localStorage.getItem("isRegistered"))
      : []
  );
  console.log(isRegister, "kkkkkkkkkkkkk");

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  let navigate = useNavigate();
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: (values, action) => {
        localStorage.setItem(
          "isRegistered",
          JSON.stringify([...isRegister, values])
        );
        setRegistered([...isRegister, values]);
        action.resetForm();
        navigate("/signin");
      },
    });

  return (
    <>
      <section className="p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="card border-light-subtle shadow-sm">
            <div className="row g-0">
              <div
                className="col-12 col-md-6"
                style={{ backgroundColor: "#F6C324" }}
              >
                 <div className="mt-4 ml-4">
                  <BackToHome />
                </div>
                <div
                  className="d-flex justify-content-center my-sm-3 align-items-center h-100 pb-5"
                  // style={{ marginTop: "17%" }}
                >
                  <div className="col-10 col-xl-8 m-sm-4 m-md-0 m-4">
                    <img
                      className="img-fluid rounded mb-4 shadow-lg"
                      loading="lazy"
                      src={logo}
                      width={245}
                      height={80}
                      alt="BootstrapBrain Logo"
                    />
                    <hr className="border-primary-subtle mb-4" />
                    <h2 className="h1 mb-4">
                      We make digital products that drive you to stand out.
                    </h2>
                    <p className="lead m-0">
                      We write words, take photos, make videos, and interact
                      with artificial intelligence.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-md-6"
                style={{ backgroundColor: "#E9E9E7" }}
              >
                <div className="card-body p-3 p-md-4 p-xl-5 m-sm-5 m-md-0 m-4">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <h2 className="h3">Sign up Now</h2>

                        <h4
                          className="fs-6 fw-normal pt-4"
                          style={{ color: "#c89601" }}
                        >
                          Enter your details to register in MultiShop
                        </h4>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-3 gy-md-4 overflow-hidden">
                      <div className="col-12 mt-3">
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label htmlFor="firstName" className="form-label">
                              First Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="firstName"
                              id="firstName"
                              placeholder="First Name"
                              value={values.firstName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.firstName && touched.firstName ? (
                              <p className="form-error text-danger">
                                {errors.firstName}
                              </p>
                            ) : null}
                          </div>
                          <div className="col-md-6 form-group mt-md-0">
                            <label htmlFor="lastName" className="form-label">
                              Last Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="lastName"
                              id="lastName"
                              placeholder="Last Name"
                              value={values.lastName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors.lastName && touched.lastName ? (
                              <p className="form-error text-danger">
                                {errors.lastName}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="email" className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.email && touched.email ? (
                          <p className="form-error text-danger">
                            {errors.email}
                          </p>
                        ) : null}
                      </div>
                      <div className="col-12 mt-3">
                        <label htmlFor="password" className="form-label">
                          Password <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          placeholder="Enter Password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.password && touched.password ? (
                          <p className="form-error text-danger">
                            {errors.password}
                          </p>
                        ) : null}
                      </div>
                      <div className="col-12 mt-3">
                        <label
                          htmlFor="Confirm password"
                          className="form-label"
                        >
                          Confirm Password{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="confirm_password"
                          id="confirm_password"
                          autoComplete="off"
                          placeholder="Confirm Password"
                          value={values.confirm_password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.confirm_password && touched.confirm_password ? (
                          <p className="form-error text-danger">
                            {errors.confirm_password}
                          </p>
                        ) : null}
                      </div>
                      <div className="col-12 mt-3">
                        <div className="form-check ms-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            name="iAgree"
                            id="iAgree"
                            required=""
                          />
                          <label className="form-check-label" htmlFor="iAgree">
                            I agree to the{" "}
                            <Link
                              to="/about"
                              className="text-decoration-none"
                              style={{ color: "#c89601" }}
                            >
                              &nbsp;terms and conditions
                            </Link>
                          </label>
                        </div>
                      </div>
                      <div className="col-12 mt-3">
                        <div className="d-grid">
                          <button
                            className="btn bsb-btn-xl text-dark"
                            type="submit"
                            style={{ backgroundColor: "#f6c324" }}
                          >
                            Sign up
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-12">
                      <p className="mt-5 mb-4">Or sign in with</p>
                      <div className="d-flex gap-3 flex-column flex-xl-row">
                        <a
                          href="#!"
                          className="btn bsb-btn-xl btn-warning mr-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-google  mr-1 mb-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                          </svg>
                          <span className="ms-2 fs-6">Google</span>
                        </a>
                        <a
                          href="#!"
                          className="btn bsb-btn-xl btn-warning mr-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-facebook mr-1 mb-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                          <span className="ms-2 fs-6">Facebook</span>
                        </a>
                        <a
                          href="#!"
                          className="btn bsb-btn-xl btn-warning mr-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-twitter  mr-1 mb-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                          <span className="ms-2 fs-6">Twitter</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <hr className="mt-5 mb-4 border-secondary-subtle" />
                      <p className="m-0 text-center">
                        Already have an account?{" "}
                        <Link
                          to="/signin"
                          className="text-decoration-none"
                          style={{ color: "#c89601" }}
                        >
                          &nbsp;Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

    // <div className="container w-50 mt-5">
    //   <h1>SignUp Now</h1>
    //   <form className="py-2" onSubmit={handleSubmit}>
    //     <div className="input-block py-2">
    //       <label htmlFor="name" className="form-label">
    //         Name
    //       </label>
    //       <input
    //         type="name"
    //         autoComplete="off"
    //         name="name"
    //         id="name"
    //         className="form-control"
    //         placeholder="Name"
    //         value={values.name}
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //       />
    //       {touched.name && errors.name ? (
    //         <p className="form-error text-danger">{errors.name}</p>
    //       ) : null}
    //     </div>
    //     <div className="input-block py-2">
    //       <label htmlFor="email" className="form-label">
    //         Email
    //       </label>
    //       <input
    //         type="email"
    //         autoComplete="off"
    //         name="email"
    //         className="form-control"
    //         id="email"
    //         placeholder="Email"
    //         value={values.email}
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //       />
    //       {errors.email && touched.email ? (
    //         <p className="form-error text-danger">{errors.email}</p>
    //       ) : null}
    //     </div>
    //     <div className="input-block py-2">
    //       <label htmlFor="password" className="form-label">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         autoComplete="off"
    //         name="password"
    //         className="form-control"
    //         id="password"
    //         placeholder="Password"
    //         value={values.password}
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //       />
    //       {errors.password && touched.password ? (
    //         <p className="form-error text-danger">{errors.password}</p>
    //       ) : null}
    //     </div>
    //     <div className="input-block py-2">
    //       <label htmlFor="confirm_password" className="form-label">
    //         Password
    //       </label>
    //       <input
    //         className="form-control"
    //         type="password"
    //         autoComplete="off"
    //         name="confirm_password"
    //         id="confirm_password"
    //         placeholder="Confirm Password"
    //         value={values.confirm_password}
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //       />
    //       {errors.confirm_password && touched.confirm_password ? (
    //         <p className="form-error text-danger">{errors.confirm_password}</p>
    //       ) : null}
    //     </div>
    //     <div className="modal-buttons py-2">
    //       <Link to="/signin" className="">
    //         Already logged In?
    //       </Link>
    //       <br />
    //       <br />
    //       <div className="d-flex">
    //       <button className="input-button btn btn-primary" type="submit">
    //         SIGN UP
    //         </button>
    //         <BackToHome/>
    //       </div>
    //     </div>
    //   </form>
    // </div>
  );
}
