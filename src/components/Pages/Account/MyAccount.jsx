import React, { useState } from "react";
import "./account.css";

export default function MyAccount() {
  const [editButton, setEditButton] = useState(false);
  console.log(editButton);
  const [profile, setProfile] = useState(
    "https://cdn.pixabay.com/photo/2017/08/06/21/01/louvre-2596278_960_720.jpg"
  );

  function handleChange(e) {
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

  // console.log(profile);
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
                  onChange={(e) => handleChange(e)}
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
                {/* Form Group (username)*/}
                {/* <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputUsername">
                    Username (how your name will appear to other users on the
                    site)
                  </label>
                  <input
                    className="form-control"
                    id="inputUsername"
                    type="text"
                    placeholder="Enter your username"
                    defaultValue="username"
                    disabled={editButton ? false : true}
                  />
                </div> */}
                {/* Form Row*/}
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
                      defaultValue="Valerie"
                      disabled={editButton ? false : true}
                    />
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
                      defaultValue="Luna"
                      disabled={editButton ? false : true}
                    />
                  </div>
                </div>
                {/* Form Row        */}
                {/* <div className="row gx-3 mb-3"> */}
                {/* Form Group (organization name)*/}
                {/* <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputOrgName">
                      Organization name
                    </label>
                    <input
                      className="form-control"
                      id="inputOrgName"
                      type="text"
                      placeholder="Enter your organization name"
                      defaultValue="Start Bootstrap"
                      disabled={editButton ? false : true}
                    />
                  </div> */}
                {/* Form Group (location)*/}
                {/* <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputLocation">
                      Location
                    </label>
                    <input
                      className="form-control"
                      id="inputLocation"
                      type="text"
                      placeholder="Enter your location"
                      defaultValue="San Francisco, CA"
                      disabled={editButton ? false : true}
                    />
                  </div>
                </div> */}
                {/* Form Group (email address)*/}
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
                {/* Form Row*/}
                <div className="row gx-3 mb-3">
                  {/* Form Group (phone number)*/}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputPhone">
                      Phone number
                    </label>
                    <input
                      className="form-control"
                      id="inputPhone"
                      type="tel"
                      placeholder="Enter your phone number"
                      defaultValue="555-123-4567"
                      disabled={editButton ? false : true}
                    />
                  </div>
                  {/* Form Group (birthday)*/}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputBirthday">
                      Birthday
                    </label>
                    <input
                      className="form-control"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="Enter your birthday"
                      defaultValue="06/10/1988"
                      disabled={editButton ? false : true}
                    />
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
