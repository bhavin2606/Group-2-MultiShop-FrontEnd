import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  return (
    <div className="container-fluid">
      <div className="row px-xl-5">
        <div className="col-12">
          <nav className="breadcrumb bg-light mb-30">
            <Link className="breadcrumb-item text-dark" to="/">
              Home
            </Link>
            {location.pathname.slice(1).includes("/") ? (
              <>
              <Link
                className="breadcrumb-item text-dark text-capitalize"
                to={"/"+ location.pathname.slice(1, 5)}
              >
                {location.pathname.slice(1,5)} 
              </Link>
              <span className="breadcrumb-item">Shop Detail</span>
              </>
            ) : (
              <span className="breadcrumb-item active text-capitalize">
                {location.pathname.slice(1)}
              </span>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
