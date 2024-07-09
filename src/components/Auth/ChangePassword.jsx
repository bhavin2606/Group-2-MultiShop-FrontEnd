import React, { useState } from "react";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { changePasswordSchema } from "../validations/changePasswordShema";
import Breadcrumbs from "../../Routes/Breadcrumbs";
import { usePostChangePasswordDataMutation } from "../../Redux/Slices/AuthApis";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [postChangePasswordData] = usePostChangePasswordDataMutation();
  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const initialValues = {
    currentPassword: "",
    password: "",
    confirmPassword: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: changePasswordSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: async (values, action) => {
        action.resetForm();
        let formData = new FormData();
        formData.append("current_password", values.currentPassword);
        formData.append("new_password", values.password);
        formData.append("confirm_password", values.confirmPassword);
        let res = await postChangePasswordData(formData);
        if (res?.data?.success === true) {
          toast.success("Password Changed Successfully");
          navigate("/");
        }
      },
    });

  return (
    <>
      <Breadcrumbs />
      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Change Password</span>
        </h2>
        <div className="container">
          <div className="card mb-4">
            <div className="card-header p-2 d-flex justify-content-between">
              <span className="mt-3 ms-2">Change Password</span>
              <span>
                <button className="btn ms-2">
                  <i className="bi bi-key-fill fs-3"></i>
                </button>
              </span>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputCurrentPassword">
                    Current Password
                  </label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      id="inputCurrentPassword"
                      type={showCurrentPassword ? "text" : "password"}
                      name="currentPassword"
                      placeholder="Enter Current Password"
                      value={values.currentPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ cursor: "pointer" }}
                    />
                    <span
                      className="input-group-text"
                      onClick={toggleCurrentPasswordVisibility}
                    >
                      <FontAwesomeIcon
                        icon={showCurrentPassword ? faEyeSlash : faEye}
                      />
                    </span>
                  </div>
                  {errors.currentPassword && touched.currentPassword ? (
                    <p className="form-error text-danger">
                      {errors.currentPassword}
                    </p>
                  ) : null}
                </div>
                {/* Form Row */}
                <div className="row gx-3 mb-3">
                  {/* Form Group (new password) */}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputNewPassword">
                      New Password
                    </label>
                    <div className="input-group">
                      <input
                        className="form-control"
                        id="inputNewPassword"
                        type={showNewPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter New Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <span
                        className="input-group-text"
                        onClick={toggleNewPasswordVisibility}
                        style={{ cursor: "pointer" }}
                      >
                        <FontAwesomeIcon
                          icon={showNewPassword ? faEyeSlash : faEye}
                        />
                      </span>
                    </div>
                    {errors.password && touched.password ? (
                      <p className="form-error text-danger">
                        {errors.password}
                      </p>
                    ) : null}
                  </div>
                  <div className="col-md-6">
                    <label
                      className="small mb-1"
                      htmlFor="inputConfirmPassword"
                    >
                      Confirm Password
                    </label>
                    <div className="input-group">
                      <input
                        className="form-control"
                        id="inputConfirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Enter New Password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <span
                        className="input-group-text"
                        onClick={toggleConfirmPasswordVisibility}
                        style={{ cursor: "pointer" }}
                      >
                        <FontAwesomeIcon
                          icon={showConfirmPassword ? faEyeSlash : faEye}
                        />
                      </span>
                    </div>
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <p className="form-error text-danger">
                        {errors.confirmPassword}
                      </p>
                    ) : null}
                  </div>
                </div>
                {/* Save changes button */}
                <button className="btn btn-primary" type="submit">
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
