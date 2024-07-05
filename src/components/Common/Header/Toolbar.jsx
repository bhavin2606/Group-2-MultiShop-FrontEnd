import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoutModal from "../../Modal/LogoutModal";
import { AuthContext } from "../../Auth/AuthContext";
import SignOut from "../../Auth/SignOut";
import { getUserData } from "../../../Redux/Actions/getApiData";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../../Redux/Slices/AuthSlice";
import { useGetUserDataQuery } from "../../../Redux/api";

export default function Toolbar() {
  console.log("inn");
  const location = useLocation();
  const token = localStorage.getItem("token");
  const { data:userData } = useGetUserDataQuery()
  console.log(userData,"userrrrssssDataaa");
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
        {token &&  userData?.detail?.firstName !== undefined && `Welcome ${userData?.detail?.firstName}`}  
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
                    <Link
                      className="text-decoration-none"
                      to="/account"
                    >
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
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-light dropdown-toggle"
                data-toggle="dropdown"
              >
                EN
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" type="button">
                  FR
                </button>
                <button className="dropdown-item" type="button">
                  AR
                </button>
                <button className="dropdown-item" type="button">
                  RU
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
