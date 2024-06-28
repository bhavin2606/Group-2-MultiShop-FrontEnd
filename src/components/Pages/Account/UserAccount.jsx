import React, { useState } from "react";
import "./account.css";
import { useFormik } from "formik";
import { userAccountSchema } from "../../validations/userAccountSchema";

export default function UserAccount() {
  const [editButton, setEditButton] = useState(false);
  console.log(editButton);
  const [profile, setProfile] = useState(
    "https://cdn.pixabay.com/photo/2017/08/06/21/01/louvre-2596278_960_720.jpg"
  );

  function handleProfileChange(e) {
    // Call the Api
    // Set Image URl to Profile
    setProfile(e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
  }

  function handleClick() {
    alert("Image Uploaded Successfully");
  }

  function handleAccountEdit() {
    setEditButton(true);
  }

  const initialValues = {
    firstName: "Smit",
    lastName: "Patel",
    phoneNumber: "9157596767",
    birthday: "09/04/2002",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: userAccountSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: (values, action) => {
        action.resetForm();
        alert("your name " + values.firstName);
        // Post API will call from here
      },
    });

  return (
    <div className="container-xl px-4 mt-4">
      {/* Account page navigation*/}
      <hr className="mt-0 mb-4" />
      <div className="row">
        <div className="col-xl-4">
          {/* Profile picture card*/}
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>
            <div className="card-body text-center">
              {/* Profile picture image*/}

              <div className="profile-pic">
                <label className="-label" htmlFor="file">
                  <span className="glyphicon glyphicon-camera"></span>
                  <span>Change Image</span>
                </label>
                <input
                  id="file"
                  type="file"
                  onChange={(e) => handleProfileChange(e)}
                />
                <img src={profile} id="output" width="200" />
              </div>
              {/* Profile picture help block*/}
              <div className="small font-italic text-muted mb-4">
                JPG or PNG no larger than 5 MB
              </div>
              {/* Profile picture upload button*/}
              <button
                className="btn btn-primary"
                onClick={() => handleClick()}
                type="button"
              >
                Upload new image
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          {/* Account details card*/}
          <div className="card mb-4">
            <div className="card-header p-2 d-flex justify-content-between">
              <span className="mt-2 ms-2">Account Details</span>
              <span>
                <button
                  className="btn ms-2"
                  onClick={() => handleAccountEdit()}
                >
                  <i className="bi bi-pencil-square fs-5"></i>
                </button>
              </span>
            </div>
            <div className="card-body">
              <form>
                <div className="row gx-3 mb-3">
                  {/* Form Group (first name)*/}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputFirstName">
                      First name
                    </label>
                    <input
                      className="form-control"
                      id="inputFirstName"
                      type="text"
                      placeholder="Enter your first name"
                      disabled={editButton ? false : true}
                      name="firstName"
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
                  {/* Form Group (last name)*/}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputLastName">
                      Last name
                    </label>
                    <input
                      className="form-control"
                      id="inputLastName"
                      type="text"
                      placeholder="Enter your last name"
                      disabled={editButton ? false : true}
                      name="lastName"
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
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputEmailAddress">
                    Email address
                  </label>
                  <input
                    className="form-control"
                    id="inputEmailAddress"
                    type="email"
                    placeholder="Enter your email address"
                    defaultValue="name@example.com"
                    disabled
                  />
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputPhone">
                      Phone number
                    </label>
                    <input
                      className="form-control"
                      id="inputPhone"
                      type="tel"
                      placeholder="Enter your phone number"
                      disabled={editButton ? false : true}
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phoneNumber && touched.phoneNumber ? (
                      <p className="form-error text-danger">
                        {errors.phoneNumber}
                      </p>
                    ) : null}
                  </div>
                  {/* Form Group (birthday)*/}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputBirthday">
                      Birthday
                    </label>
                    <input
                      className="form-control"
                      id="inputBirthday"
                      type="date"
                      name="birthday"
                      placeholder="Enter your birthday"
                      disabled={editButton ? false : true}
                      value={values.birthday}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.birthday && touched.birthday ? (
                      <p className="form-error text-danger">
                        {errors.birthday}
                      </p>
                    ) : null}
                  </div>
                </div>
                {/* Save changes button*/}
                {editButton && (
                  <button
                    className="btn btn-primary"
                    onClick={() => setEditButton(false)}
                    type="button"
                  >
                    Save changes
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
