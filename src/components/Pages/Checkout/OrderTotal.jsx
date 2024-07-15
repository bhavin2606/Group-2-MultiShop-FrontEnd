import React from "react";
import { useGetCheckOutDetailQuery } from "../../../Redux/Slices/CheckoutApi";

export default function OrderTotal({ formik }) {
  const { data: checkout } = useGetCheckOutDetailQuery();
  return (
    <div className="col-lg-4">
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Order Total</span>
      </h5>
      <div className="bg-light p-30 mb-5">
        <div className="border-bottom">
          <h6 className="mb-3">Products</h6>
          {checkout?.data?.data?.map((data, index) => (
            <div className="d-flex justify-content-between">
              <p>{data?.product_name}</p>
              <p>{data?.total}</p>
            </div>
          ))}
        </div>
        <div className="border-bottom pt-3 pb-2">
          <div className="d-flex justify-content-between mb-3">
            <h6>Subtotal</h6>
            <h6>{checkout?.data?.sub_total}</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6 className="font-weight-medium">Shipping</h6>
            <h6 className="font-weight-medium">$10</h6>
          </div>
        </div>
        <div className="pt-2">
          <div className="d-flex justify-content-between mt-2">
            <h5>Total</h5>
            <h5>{checkout?.data?.sub_total + 10}</h5>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <h5 className="section-title position-relative text-uppercase mb-3">
          <span className="bg-secondary pr-3">Payment</span>
        </h5>
        <div className="bg-light p-30">
          <div className="form-group">
            <div className="custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                name="payment"
                id="paypal"
                value="Paypal"
                onChange={formik.handleChange}
              />
              <label className="custom-control-label" htmlFor="paypal">
                Paypal
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                name="payment"
                id="directcheck"
                value="Direct Check"
                onChange={formik.handleChange}
              />
              <label className="custom-control-label" htmlFor="directcheck">
                Direct Check
              </label>
            </div>
          </div>
          <div className="form-group mb-4">
            <div className="custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                name="payment"
                id="banktransfer"
                value="Bank Transfer"
                onChange={formik.handleChange}
              />
              <label className="custom-control-label" htmlFor="banktransfer">
                Bank Transfer
              </label>
            </div>
          </div>
          {formik?.errors?.payment && formik?.touched?.payment ? (
            <p className="help-block text-danger">
              {formik?.errors?.payment}
            </p>
          ) : null}
          <button
            className="btn btn-block btn-primary font-weight-bold py-3"
            type="submit"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
