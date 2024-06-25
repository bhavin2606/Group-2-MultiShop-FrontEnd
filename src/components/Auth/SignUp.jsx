import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../validations/signUpSchema";

export default function SignUp() {
  let [isRegister, setRegistered] = useState(
    localStorage.getItem("isRegistered")
      ? JSON.parse(localStorage.getItem("isRegistered"))
      : []
  );
  console.log(isRegister, "kkkkkkkkkkkkk");

  const initialValues = {
    name: "",
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
    <div className="container w-50 mt-5">
      <h1>SignUp Now</h1>
      <form className="py-2" onSubmit={handleSubmit}>
        <div className="input-block py-2">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="name"
            autoComplete="off"
            name="name"
            id="name"
            className="form-control"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name ? (
            <p className="form-error text-danger">{errors.name}</p>
          ) : null}
        </div>
        <div className="input-block py-2">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            autoComplete="off"
            name="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="form-error text-danger">{errors.email}</p>
          ) : null}
        </div>
        <div className="input-block py-2">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="form-error text-danger">{errors.password}</p>
          ) : null}
        </div>
        <div className="input-block py-2">
          <label htmlFor="confirm_password" className="form-label">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            autoComplete="off"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm Password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="form-error text-danger">{errors.confirm_password}</p>
          ) : null}
        </div>
        <div className="modal-buttons py-2">
          <Link to="/signin" className="">
            Already logged In?
          </Link>
          <br />
          <br />
          <button className="input-button btn btn-primary" type="submit">
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
}
