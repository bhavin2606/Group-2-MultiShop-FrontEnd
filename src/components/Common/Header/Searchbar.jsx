import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLazySearchProductsQuery } from "../../../Redux/Slices/ProductApi";

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [triggerSearch, { data: searchData }] = useLazySearchProductsQuery();
  const navigate = useNavigate("");
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/shop?search=${searchTerm}`);
    if (searchTerm.trim() !== "") {
      triggerSearch(searchTerm);
    }
  };
  // console.log(searchData, "searchData");
  return (
    <div className="container-fluid">
      <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
        <div className="col-lg-4">
          <Link to="/" className="text-decoration-none">
            <span className="h1 text-uppercase text-primary bg-dark px-2">
              MULTI
            </span>
            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
              Shop
            </span>
          </Link>
        </div>
        <div className="col-lg-4 col-6 text-left">
          <form action="">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  onClick={handleSearch}
                  className="input-group-text bg-transparent text-primary"
                >
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-4 col-6 text-right">
          <p className="m-0">Customer Service</p>
          <h5 className="m-0">+012 345 6789</h5>
        </div>
      </div>
    </div>
  );
}
