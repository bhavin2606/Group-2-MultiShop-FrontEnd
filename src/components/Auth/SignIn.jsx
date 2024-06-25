import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { signInSchema } from "../validations/signInSchema";

export default function SignIn() {
  let [isLoggedIn, setUserLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) ? true : false
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const initialValues = {
    name: "",
    password: "",
  };

  let loginDetails = JSON.parse(localStorage.getItem("isRegistered"));
  console.log("sdfsdfgsdfg", loginDetails);

  let navigate = useNavigate();
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signInSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: (values, action) => {
        if (
          loginDetails.find(
            (e) => e.name === values.name && e.password === values.password
          )
        ) {
          setUserLoggedIn(true);
          localStorage.setItem("isLoggedIn", true);
          action.resetForm();
          navigate("/");
        }
      },
    });

  return (
    <div className="container w-50 mt-5">
      <h1>SignIn Now</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-block py-2">
          <label htmlFor="name" className="form-label ">
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

        <div className="modal-buttons py-2">
          <Link to="/signup" className="">
            Are you Registered?
          </Link>
          <br />
          <br />
          <button className="btn btn-primary" type="submit">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}

