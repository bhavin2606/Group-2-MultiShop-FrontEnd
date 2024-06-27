import React from "react";

export default function CheckOutForm() {
  return (
    <div className="col-lg-8">
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Billing Address</span>
      </h5>
      <div className="bg-light p-30 mb-5">
        <div className="row">
          <div className="col-md-6 form-group">
            <label>First Name</label>
            <input className="form-control" type="text" placeholder="John" />
          </div>
          <div className="col-md-6 form-group">
            <label>Last Name</label>
            <input className="form-control" type="text" placeholder="Doe" />
          </div>
          <div className="col-md-6 form-group">
            <label>E-mail</label>
            <input
              className="form-control"
              type="text"
              placeholder="example@email.com"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Mobile No</label>
            <input
              className="form-control"
              type="text"
              placeholder="+123 456 789"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Address Line 1</label>
            <input
              className="form-control"
              type="text"
              placeholder="123 Street"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Address Line 2</label>
            <input
              className="form-control"
              type="text"
              placeholder="123 Street"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Country</label>
            <select className="custom-select">
              <option selected="">United States</option>
              <option>Afghanistan</option>
              <option>Albania</option>
              <option>Algeria</option>
            </select>
          </div>
          <div className="col-md-6 form-group">
            <label>City</label>
            <input
              className="form-control"
              type="text"
              placeholder="New York"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>State</label>
            <input
              className="form-control"
              type="text"
              placeholder="New York"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>ZIP Code</label>
            <input className="form-control" type="text" placeholder={123} />
          </div>
          <div className="col-md-12">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="shipto"
              />
              <label
                className="custom-control-label"
                htmlFor="shipto"
                data-toggle="collapse"
                data-target="#shipping-address"
              >
                Ship to different address
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse mb-5" id="shipping-address">
        <h5 className="section-title position-relative text-uppercase mb-3">
          <span className="bg-secondary pr-3">Shipping Address</span>
        </h5>
        <div className="bg-light p-30">
          <div className="row">
            <div className="col-md-6 form-group">
              <label>First Name</label>
              <input className="form-control" type="text" placeholder="John" />
            </div>
            <div className="col-md-6 form-group">
              <label>Last Name</label>
              <input className="form-control" type="text" placeholder="Doe" />
            </div>
            <div className="col-md-6 form-group">
              <label>E-mail</label>
              <input
                className="form-control"
                type="text"
                placeholder="example@email.com"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>Mobile No</label>
              <input
                className="form-control"
                type="text"
                placeholder="+123 456 789"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>Address Line 1</label>
              <input
                className="form-control"
                type="text"
                placeholder="123 Street"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>Address Line 2</label>
              <input
                className="form-control"
                type="text"
                placeholder="123 Street"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>Country</label>
              <select className="custom-select">
                <option selected="">United States</option>
                <option>Afghanistan</option>
                <option>Albania</option>
                <option>Algeria</option>
              </select>
            </div>
            <div className="col-md-6 form-group">
              <label>City</label>
              <input
                className="form-control"
                type="text"
                placeholder="New York"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>State</label>
              <input
                className="form-control"
                type="text"
                placeholder="New York"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>ZIP Code</label>
              <input className="form-control" type="text" placeholder={123} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
