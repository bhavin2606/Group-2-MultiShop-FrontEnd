import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetCategoryDataQuery } from "../../../Redux/api";

export default function Navbar() {
  const location = useLocation();
  const { data:banner } = useGetCategoryDataQuery();
  return (
    <>
      <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a
              className="btn d-flex align-items-center justify-content-between bg-primary w-100"
              data-toggle="collapse"
              href="#navbar-vertical"
              style={{ height: 65, padding: "0 30px" }}
            >
              <h6 className="text-dark m-0">
                <i className="fa fa-bars mr-2" />
                Categories
              </h6>
              <i className="fa fa-angle-down text-dark" />
            </a>
            <nav
              className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
              id="navbar-vertical"
              style={{
                width: "calc(100% - 30px)",
                zIndex: 999,
                position: "sticky",
              }}
            >
              <div className="navbar-nav w-100">
                {banner?.data?.data?.map((data, index) => (
                  <Fragment key={index}>
                    {data?.subcategories?.length > 0 ? (
                      <div className="nav-item dropdown dropright">
                        <Link
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          {data.category_name}{" "}
                          <i className="fa fa-angle-right float-right mt-1"></i>
                        </Link>
                        <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                          {data?.subcategories?.map((data, index) => (
                            <Link href="" className="dropdown-item" key={index}>
                              {data.subcategoryName}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link to="/shop" className="nav-item nav-link">
                        {data.category_name}
                      </Link>
                    )}
                  </Fragment>
                ))}
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              <Link href="" className="text-decoration-none d-block d-lg-none">
                <span className="h1 text-uppercase text-dark bg-light px-2">
                  Multi
                </span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                  Shop
                </span>
              </Link>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <Link
                    to="/"
                    className={`nav-link ${
                      location?.pathname === "/" && "active"
                    }`}
                    id="pills-home-tab"
                    data-toggle="pill"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Home
                  </Link>

                  <Link
                    to="/shop"
                    className={`nav-link ${
                      location?.pathname === "/shop" && "active"
                    }`}
                    id="pills-shop-tab"
                    role="tab"
                    aria-controls="pills-shop"
                    aria-selected="false"
                  >
                    Shop
                  </Link>
                </div>
                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                  <Link to="/wishlist" className="btn px-0">
                    <i className="fas fa-heart text-primary" />
                    <span
                      className="badge text-secondary border mx-1 border-secondary rounded-circle"
                      style={{ paddingBottom: 2 }}
                    >
                      0
                    </span>
                  </Link>
                  <Link to="/cart" className="btn px-0 ml-3">
                    <i className="fas fa-shopping-cart text-primary" />
                    <span
                      className="badge text-secondary border ml-1 border-secondary rounded-circle"
                      style={{ paddingBottom: 2 }}
                    >
                      0
                    </span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
