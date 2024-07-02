import React, { useState } from "react";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { changePasswordSchema } from "../validations/changePasswordShema";

export default function ChangePassword() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    newPassword: "",
    confirmPassword: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: changePasswordSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: (values, action) => {
        action.resetForm();
        alert("your new password " + values.newPassword);
        // Post API will call from here
      },
    });

  return (
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
                    name="newPassword"
                    placeholder="Enter New Password"
                    value={values.newPassword}
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
                {errors.newPassword && touched.newPassword ? (
                  <p className="form-error text-danger">{errors.newPassword}</p>
                ) : null}
              </div>
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputConfirmPassword">
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
  );
}
