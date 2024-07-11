import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SignOut from "../../Auth/SignOut";
import { useGetUserDataQuery } from "../../../Redux/Slices/AuthApis";
import user from "../../../assets/img/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Toolbar() {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const { data: userData } = useGetUserDataQuery();
  const [selectedLanguage, setSelectedLanguage] = useState();

  console.log("userData", userData);
  const selectLanguage = (item) => {
    console.log("Selected language:", item);
    document.cookie = "googtrans=" + `/en/${item}`;
    console.log("Cookie set:", document.cookie);
    setSelectedLanguage(item);
  };

  useEffect(() => {
    if (selectedLanguage) {
      window.location.reload();
    }
  }, [selectedLanguage]);

  return (
    <div className="container-fluid">
      <div className="row bg-secondary py-1 px-xl-5">
        <div
          className="col-lg-6 d-none d-lg-block collapse"
          id="navbarCollapse"
        >
          <div className="d-inline-flex align-items-center h-100 navbar p-0">
            <Link
              className={`px-2 nav-link ${
                location.pathname === "/about" && "active text-warning"
              }`}
              to="/about"
            >
              About
            </Link>
            <Link
              className={`px-2 nav-link ${
                location.pathname === "/contact" && "active text-warning"
              }`}
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className={`px-2 nav-link ${
                location.pathname === "/help" && "active text-warning"
              }`}
              to="/help"
            >
              Help
            </Link>
            <Link
              className={`px-2 nav-link ${
                location.pathname === "/faqs" && "active text-warning"
              }`}
              to="/faqs"
            >
              FAQs
            </Link>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          {token &&
            userData?.data?.first_name !== undefined &&
            `Welcome ${userData?.data?.first_name}`}
          <div className="d-inline-flex align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className={
                  token
                    ? "btn p-0 mx-1"
                    : "btn btn-sm btn-light dropdown-toggle m-1"
                }
                data-toggle="dropdown"
              >
                {token ? (
                  <img
                    src={userData?.image_url}
                    className="img-fluid rounded-circle"
                    style={{ height: "35px", width: "35px" }}
                    alt=""
                  />
                ) : (
                  "My Account"
                )}
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                {token ? (
                  <>
                    <Link className="text-decoration-none" to="/account">
                      <button className="dropdown-item" type="button">
                        <i className="fas fa-user mr-2" style={{color: "#ffd333"}}></i>
                        My Profile
                      </button>
                    </Link>
                    <Link
                      className="text-decoration-none"
                      to="/change-password"
                    >
                      <button className="dropdown-item" type="button">
                        <i className="fas fa-lock mr-2" style={{color: "#ffd333"}}></i>
                        Change Password
                      </button>
                    </Link>
                    <Link className="text-decoration-none" to="/my-order">
                      <button className="dropdown-item" type="button">
                        <i className="fas fa-box mr-2" style={{color: "#ffd333"}}></i>
                        My Orders
                      </button>
                    </Link>
                    <SignOut />
                  </>
                ) : (
                  <>
                    <Link className="text-decoration-none" to="/signin">
                      <button className="dropdown-item" type="button">
                        <i className="fas fa-sign-in-alt mr-2" style={{color: "#ffd333"}}></i>
                        Sign in
                      </button>
                    </Link>
                    <Link className="text-decoration-none" to="/signup">
                      <button className="dropdown-item" type="button">
                        <i className="fas fa-user-plus mr-2" style={{color: "#ffd333"}}></i>
                        Sign up
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="btn-group google_translate_element">
              <button
                type="button"
                className="btn btn-sm btn-light dropdown-toggle"
                data-toggle="dropdown"
              >
                {selectedLanguage ? selectedLanguage.toUpperCase() : "EN"}
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <button
                  className="dropdown-item"
                  onClick={() => selectLanguage("en")}
                  type="button"
                >
                  EN
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => selectLanguage("hi")}
                  type="button"
                >
                  HI
                </button>

                <button
                  className="dropdown-item"
                  onClick={() => selectLanguage("gu")}
                  type="button"
                >
                  GU
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => selectLanguage("fr")}
                  type="button"
                >
                  RU
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => selectLanguage("ar")}
                  type="button"
                >
                  AR
                </button>
              </div>
            </div>
          </div>
          <div className="d-inline-flex align-items-center d-block d-lg-none">
            <Link to="/wishlist" className="btn px-0 ml-3">
              <i className="fas fa-heart mr-1 text-dark" />
              <span
                className="badge text-dark border border-dark rounded-circle"
                style={{ paddingBottom: 2 }}
              >
                0
              </span>
            </Link>
            <Link to="/cart" className="btn px-0 ml-3">
              <i className="fas fa-shopping-cart mr-1 text-dark" />
              <span
                className="badge text-dark border border-dark rounded-circle"
                style={{ paddingBottom: 2 }}
              >
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
