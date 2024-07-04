import React, { useEffect, useState } from "react";
import "./account.css";
import { useFormik } from "formik";
import { userAccountSchema } from "../../validations/userAccountSchema";
import { postUpdateProfileData } from "../../../Redux/Actions/postApiData";
import { useSelector } from "react-redux";
import { getUserData } from "../../../Redux/Actions/getApiData";
import Breadcrumbs from "../../../Routes/Breadcrumbs";

export default function UserAccount() {
  const [editButton, setEditButton] = useState(false);
  // const { userData } = useSelector((state) => state.auth);
  const [updatedData, setUpdatedData] = useState(null);
  const [file, setFile] = useState(null);

  function handleAccountEdit() {
    setEditButton(true);
  }

  async function getUserDetails() {
    let data = await getUserData();
    setUpdatedData(data);
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  // firstName, lastName, email, phoneNo;
  const initialValues = {
    firstName: updatedData?.detail?.firstName,
    lastName: updatedData?.detail?.lastName,
    phoneNumber: updatedData?.detail?.phoneNo,
    birthday: updatedData?.dob,
    image: updatedData?.detail?.image,
  };

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: userAccountSchema,
    validateOnChange: true,
    validateOnBlur: false,
    enableReinitialize: true,
    onSubmit: async (values, action) => {
      action.resetForm();
      setFile(values.image);
      await postUpdateProfileData(values);
      setEditButton(false);
      let data = await getUserData();
      setUpdatedData(data);
    },
  });
  console.log("datadatadatadatadatadatadata", updatedData);

  return (
    <>
      <Breadcrumbs />
      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">My Account</span>
        </h2>
        <div className="container-xl px-4 mt-4">
          {/* Account page navigation*/}
          {/* <hr className="mt-0 mb-4" /> */}
          <form onSubmit={handleSubmit}>
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
                        <span>
                          {editButton ? "Change Image" : "Profile Pic"}
                        </span>
                      </label>
                      <input
                        id="file"
                        type="file"
                        name="image"
                        onChange={(e) => {
                          setFieldValue("image", e.target.files[0]);
                          let url = URL.createObjectURL(e.target.files[0]);
                          setFile(url);
                        }}
                        disabled={editButton ? false : true}
                      />
                      {console.log(
                        file,
                        "kkkkkkkkk",
                        values.image,
                        "filefilefile"
                      )}
                      <img
                        src={typeof file === "string" ? file : values?.image}
                        id="output"
                        alt="profile"
                        width="200"
                      />
                    </div>
                    {/* Profile picture help block*/}
                    <div className="small font-italic text-muted mb-4">
                      JPG or PNG no larger than 5 MB
                    </div>
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
                        type="button"
                        onClick={() => handleAccountEdit()}
                      >
                        <i className="bi bi-pencil-square fs-5"></i>
                      </button>
                    </span>
                  </div>
                  <div className="card-body">
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
                        defaultValue={updatedData?.detail?.email}
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
                          name="phoneNumber"
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
                      <button className="btn btn-primary" type="submit">
                        Save changes
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
