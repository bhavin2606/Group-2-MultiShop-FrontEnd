import { useFormik } from "formik";
import React from "react";
import { changePasswordSchema } from "../validations/changePasswordShema";

export default function ChangePassword() {
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
          alert("your new password " + values.newPassword)
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
              <input
                className="form-control"
                id="inputCurrentPassword"
                type="password"
                name="currentPassword"
                placeholder="Enter Current Password"
                value={values.currentPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.currentPassword && touched.currentPassword ? (
                <p className="form-error text-danger">
                  {errors.currentPassword}
                </p>
              ) : null}
            </div>
            {/* Form Row*/}
            <div className="row gx-3 mb-3">
              {/* Form Group (phone number)*/}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputNewPassword">
                  New Password
                </label>
                <input
                  className="form-control"
                  id="inputPhone"
                  type="password"
                  placeholder="Enter New Password"
                  name="newPassword"
                  value={values.newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.newPassword && touched.newPassword ? (
                  <p className="form-error text-danger">{errors.newPassword}</p>
                ) : null}
              </div>
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputConfirmPassword">
                  Confirm Password
                </label>
                <input
                  className="form-control"
                  id="inputBirthday"
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter New Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <p className="form-error text-danger">
                    {errors.confirmPassword}
                  </p>
                ) : null}
              </div>
            </div>
            {/* Save changes button*/}

            <button className="btn btn-primary" type="submit">
              Save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
