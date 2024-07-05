import React from "react";
import logo from "../../assets/img/logo.png";
import { useFormik } from "formik";
import { forgetSchema } from "../validations/forgetPasswordSchema";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { usePostForgetPasswordDataMutation } from "../../Redux/Slices/AuthApis";

export default function ForgetPassword() {
  const initialValues = {
    email: "",
  };

  const [postForgetPasswordData] = usePostForgetPasswordDataMutation()
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: forgetSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: async (values, action) => {
        // Post API call for Reset Password
        action.resetForm();
        let res = await postForgetPasswordData(values)
        console.log(res.data);
        if (res.data === 200) {
          toast.success("Reset Link Sent to your Email")
        }
        else {
          toast.error("Email is invalid")
        }
      },
    });

  return (
    <div
      className="w-100 h-100"
      style={{ backgroundColor: "", width: "100%", height: "100vh" }}
    >
      <section className="p-3 p-md-4 p-xl-5">
        <div className="container ">
          {/* <div className="card border-light-subtle shadow-sm"> */}
            <div className="row g-0 justify-content-center rounded">
              <div
                className="col-xl-8 col-sm-12 col-12"
                style={{ backgroundColor: "#E9E9E7" }}
              >
                <div className="card-body p-3 p-md-4 p-xl-5 m-sm-5 m-md-0 m-4">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <h2 className="h3">Password Reset</h2>
                        <h4
                          className=" fw-normal py-4"
                          style={{ color: "#c89601" }}
                        >
                          Provide the email address associated with your account
                          to recover your password.
                        </h4>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-3 gy-md-4 overflow-hidden">
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
                          required=""
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
                      <div className="col-12">
                        <div className="d-flex justify-content-between mt-3">
                          <button
                            className="btn bsb-btn-xl mt-4 px-4 text-dark"
                            style={{ backgroundColor: "#f6c324" }}
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Forget Password
                          </button>
                          <div>
                            <Link
                              to="/signin"
                              className="text-decoration-none mx-2"
                              style={{ color: "#c89601" }}
                            >
                              Back to Login?
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-12">
                      <hr className="mt-5 mb-4 border-secondary-subtle" />
                      <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end"></div>
                    </div>
                  </div>
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
                            width={15}
                            height={15}
                            fill="currentColor"
                            className="bi bi-google mr-1 mb-1"
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
                          <span className="ms-2 mx-1 fs-6">Facebook</span>
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
                            className="bi bi-twitter mr-1 mb-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                          <span className="ms-2 mx-1 fs-6">Twitter</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div
                className="col-12 col-md-6"
                style={{ backgroundColor: "#F6C324" }}
              >
                <div className="mt-4 ml-4">
                  <BackToHome />
                </div>
                <div className="d-flex align-items-center justify-content-center h-100 pb-5">
                  <div className="col-10 col-xl-8 pb-4">
                    <img
                      className="img-fluid rounded mb-4 mt-5 shadow-lg"
                      loading="lazy"
                      src={logo}
                      width={245}
                      height={80}
                      alt="Logo"
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
              </div> */}
            </div>
          {/* </div>   */}
        </div>
      </section>
    </div>
  );
}
