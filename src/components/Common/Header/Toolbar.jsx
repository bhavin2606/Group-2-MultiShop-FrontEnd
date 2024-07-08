import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SignOut from "../../Auth/SignOut";
import { useGetUserDataQuery } from "../../../Redux/Slices/AuthApis";

export default function Toolbar() {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const { data: userData } = useGetUserDataQuery();

  const [selectedLanguage, setSelectedLanguage] = useState("");

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
            userData?.data?.firstName !== undefined &&
            `Welcome ${userData?.data?.firstName}`}
          <div className="d-inline-flex align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-light dropdown-toggle m-1"
                data-toggle="dropdown"
              >
                My Account
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                {token ? (
                  <>
                    <Link className="text-decoration-none" to="/account">
                      <button className="dropdown-item" type="button">
                        My Profile
                      </button>
                    </Link>
                    <Link
                      className="text-decoration-none"
                      to="/change-password"
                    >
                      <button className="dropdown-item" type="button">
                        Change Password
                      </button>
                    </Link>
                    <SignOut />
                  </>
                ) : (
                  <>
                    <Link className="text-decoration-none" to="/signin">
                      <button className="dropdown-item" type="button">
                        Sign in
                      </button>
                    </Link>
                    <Link className="text-decoration-none" to="/signup">
                      <button className="dropdown-item" type="button">
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
                EN
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <button
                  className="dropdown-item"
                  onClick={() => selectLanguage("en")}
                  type="button"
                >
                  ENGLISH
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => selectLanguage("hi")}
                  type="button"
                >
                  HINDI
                </button>

                <button
                  className="dropdown-item"
                  onClick={() => selectLanguage("gu")}
                  type="button"
                >
                  GUJARATI
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => selectLanguage("fr")}
                  type="button"
                >
                  RUSSIAN
                </button>
              </div>
            </div>
          </div>
          <div className="d-inline-flex align-items-center d-block d-lg-none">
            <a href="" className="btn px-0 ml-2">
              <i className="fas fa-heart text-dark" />
              <span
                className="badge text-dark border border-dark rounded-circle"
                style={{ paddingBottom: 2 }}
              >
                0
              </span>
            </a>
            <a href="" className="btn px-0 ml-2">
              <i className="fas fa-shopping-cart text-dark" />
              <span
                className="badge text-dark border border-dark rounded-circle"
                style={{ paddingBottom: 2 }}
              >
                0
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
