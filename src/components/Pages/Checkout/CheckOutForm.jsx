import { useFormik } from "formik";
import React from "react";

export default function CheckOutForm({ formik }) {
  return (
    <div className="col-lg-8">
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Billing Address</span>
      </h5>
      <form onSubmit={formik.handleSubmit}>
        <div className="bg-light p-30 mb-5">
          <div className="row">
            <div className="col-md-6 form-group">
              <label>First Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="John"
                id="firstName"
                name="billing.firstName"
                onChange={formik.handleChange}
                value={formik.values.billing.firstName}
              />
              {formik?.errors?.billing?.firstName &&
              formik?.touched?.billing?.firstName ? (
                <p className="help-block text-danger">
                  {formik?.errors?.billing?.firstName}
                </p>
              ) : null}
            </div>
            <div className="col-md-6 form-group">
              <label>Last Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Doe"
                id="lastName"
                name="billing.lastName"
                onChange={formik.handleChange}
                value={formik.values.billing.lastName}
              />
              {formik?.errors?.billing?.lastName &&
              formik?.touched?.billing?.lastName ? (
                <p className="help-block text-danger">
                  {formik?.errors?.billing?.lastName}
                </p>
              ) : null}
            </div>
            <div className="col-md-6 form-group">
              <label>E-mail</label>
              <input
                className="form-control"
                type="text"
                placeholder="example@email.com"
                id="email"
                name="billing.email"
                onChange={formik.handleChange}
                value={formik.values.billing.email}
              />
              {formik?.errors?.billing?.email &&
              formik?.touched?.billing?.email ? (
                <p className="help-block text-danger">
                  {formik?.errors?.billing?.email}
                </p>
              ) : null}
            </div>
            <div className="col-md-6 form-group">
              <label>Mobile No</label>
              <input
                className="form-control"
                type="text"
                placeholder="+123 456 789"
                id="mobileNo"
                name="billing.mobileNo"
                onChange={formik.handleChange}
                value={formik.values.billing.mobileNo}
              />
              {formik?.errors?.billing?.mobileNo &&
              formik?.touched?.billing?.mobileNo ? (
                <p className="help-block text-danger">
                  {formik?.errors?.billing?.mobileNo}
                </p>
              ) : null}
            </div>
            <div className="col-md-6 form-group">
              <label>Address Line 1</label>
              <input
                className="form-control"
                type="text"
                placeholder="123 Street"
                id="address1"
                name="billing.address1"
                onChange={formik.handleChange}
                value={formik.values.billing.address1}
              />
              {formik?.errors?.billing?.address1 &&
              formik?.touched?.billing?.address1 ? (
                <p className="help-block text-danger">
                  {formik?.errors?.billing?.address1}
                </p>
              ) : null}
            </div>
            <div className="col-md-6 form-group">
              <label>Address Line 2</label>
              <input
                className="form-control"
                type="text"
                placeholder="123 Street"
                id="address2"
                name="billing.address2"
                onChange={formik.handleChange}
                value={formik.values.billing.address2}
              />
              {formik?.errors?.billing?.address2 &&
              formik?.touched?.billing?.address2 ? (
                <p className="help-block text-danger">
                  {formik?.errors?.billing?.address2}
                </p>
              ) : null}
            </div>
            <div className="col-md-6 form-group">
              <label>Country</label>
              <select
                className="custom-select"
                id="country"
                name="billing.country"
                onChange={formik.handleChange}
              >
                <option selected="" value="UnitedState">
                  United States
                </option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
              </select>
              {formik?.errors?.billing?.country &&
              formik?.touched?.billing?.country ? (
                <p className="help-block text-danger">
                  {formik?.errors?.billing?.country}
                </p>
              ) : null}
            </div>
            <div className="col-md-6 form-group">
              <label>City</label>
              <input
                className="form-control"
                type="text"
                placeholder="New York"
                id="city"
                name="billing.city"
                onChange={formik.handleChange}
                value={formik.values.billing.city}
              />
              {formik?.errors?.billing?.city &&
              formik?.touched?.billing?.city ? (
                <p className="help-block text-danger">
                  {formik?.errors?.billing?.city}
                </p>
              ) : null}
            </div>
            <div className="col-md-6 form-group">
              <label>State</label>
              <input
                className="form-control"
                type="text"
                placeholder="New York"
                id="state"
                name="billing.state"
                onChange={formik.handleChange}
                value={formik.values.billing.state}
              />
              {formik?.errors?.billing?.state &&
              formik?.touched?.billing?.state ? (
                <p className="help-block text-danger">
                  {formik?.errors?.billing?.state}
                </p>
              ) : null}
            </div>
            <div className="col-md-6 form-group">
              <label>ZIP Code</label>
              <input
                className="form-control"
                type="text"
                placeholder={123}
                id="zip"
                name="billing.zip"
                onChange={formik.handleChange}
                value={formik.values.billing.zip}
              />
              {formik?.errors?.billing?.zip && formik?.touched?.billing?.zip ? (
                <p className="help-block text-danger">
                  {formik?.errors?.billing?.zip}
                </p>
              ) : null}
            </div>
            <div className="col-md-12">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="isDiffrentShip"
                  name="shiping.isDiffrentShip"
                  onChange={formik.handleChange}
                  value={formik.values.shiping.isDiffrentShip}
                />
                <label
                  className="custom-control-label"
                  htmlFor="isDiffrentShip"
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
                <input
                  className="form-control"
                  type="text"
                  placeholder="John"
                  id="firstName"
                  name="shiping.firstName"
                  onChange={formik.handleChange}
                  value={formik.values.shiping.firstName}
                />
                {formik?.errors?.shiping?.firstName &&
                formik?.touched?.shiping?.firstName ? (
                  <p className="help-block text-danger">
                    {formik?.errors?.shiping?.firstName}
                  </p>
                ) : null}
              </div>
              <div className="col-md-6 form-group">
                <label>Last Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Doe"
                  id="lastName"
                  name="shiping.lastName"
                  onChange={formik.handleChange}
                  value={formik.values.shiping.lastName}
                />
                {formik?.errors?.shiping?.lastName &&
                formik?.touched?.shiping?.lastName ? (
                  <p className="help-block text-danger">
                    {formik?.errors?.shiping?.lastName}
                  </p>
                ) : null}
              </div>
              <div className="col-md-6 form-group">
                <label>E-mail</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="example@email.com"
                  id="email"
                  name="shiping.email"
                  onChange={formik.handleChange}
                  value={formik.values.shiping.email}
                />
                {formik?.errors?.shiping?.email &&
                formik?.touched?.shiping?.email ? (
                  <p className="help-block text-danger">
                    {formik?.errors?.shiping?.email}
                  </p>
                ) : null}
              </div>
              <div className="col-md-6 form-group">
                <label>Mobile No</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="+123 456 789"
                  id="mobileNo"
                  name="shiping.mobileNo"
                  onChange={formik.handleChange}
                  value={formik.values.shiping.mobileNo}
                />
                {formik?.errors?.shiping?.mobileNo &&
                formik?.touched?.shiping?.mobileNo ? (
                  <p className="help-block text-danger">
                    {formik?.errors?.shiping?.mobileNo}
                  </p>
                ) : null}
              </div>
              <div className="col-md-6 form-group">
                <label>Address Line 1</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="123 Street"
                  id="address1"
                  name="shiping.address1"
                  onChange={formik.handleChange}
                  value={formik.values.shiping.address1}
                />
                {formik?.errors?.shiping?.address1 &&
                formik?.touched?.shiping?.address1 ? (
                  <p className="help-block text-danger">
                    {formik?.errors?.shiping?.address1}
                  </p>
                ) : null}
              </div>
              <div className="col-md-6 form-group">
                <label>Address Line 2</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="123 Street"
                  id="address2"
                  name="shiping.address2"
                  onChange={formik.handleChange}
                  value={formik.values.shiping.address2}
                />
                {formik?.errors?.shiping?.address2 &&
                formik?.touched?.shiping?.address2 ? (
                  <p className="help-block text-danger">
                    {formik?.errors?.shiping?.address2}
                  </p>
                ) : null}
              </div>
              <div className="col-md-6 form-group">
                <label>Country</label>
                <select
                  className="custom-select"
                  id="country"
                  name="shiping.country"
                  onChange={formik.handleChange}
                >
                  <option selected="" value="UnitedStates">
                    United States
                  </option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                </select>
                {formik?.errors?.shiping?.country &&
                formik?.touched?.shiping?.country ? (
                  <p className="help-block text-danger">
                    {formik?.errors?.shiping?.country}
                  </p>
                ) : null}
              </div>
              <div className="col-md-6 form-group">
                <label>City</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="New York"
                  id="city"
                  name="shiping.city"
                  onChange={formik.handleChange}
                  value={formik.values.shiping.city}
                />
                {formik?.errors?.shiping?.city &&
                formik?.touched?.shiping?.city ? (
                  <p className="help-block text-danger">
                    {formik?.errors?.shiping?.city}
                  </p>
                ) : null}
              </div>
              <div className="col-md-6 form-group">
                <label>State</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="New York"
                  id="state"
                  name="shiping.state"
                  onChange={formik.handleChange}
                  value={formik.values.shiping.state}
                />
                {formik?.errors?.shiping?.state &&
                formik?.touched?.shiping?.state ? (
                  <p className="help-block text-danger">
                    {formik?.errors?.shiping?.state}
                  </p>
                ) : null}
              </div>
              <div className="col-md-6 form-group">
                <label>ZIP Code</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder={123}
                  id="zip"
                  name="shiping.zip"
                  onChange={formik.handleChange}
                  value={formik.values.shiping.zip}
                />
                {formik?.errors?.shiping?.zip &&
                formik?.touched?.shiping?.zip ? (
                  <p className="help-block text-danger">
                    {formik?.errors?.shiping?.zip}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        {/* <button type="submit">submit</button> */}
      </form>
    </div>
  );
}
