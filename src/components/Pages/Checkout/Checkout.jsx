import React from "react";
import CheckOutForm from "./CheckOutForm";
import OrderTotal from "./OrderTotal";
import Breadcrumbs from "../../../Routes/Breadcrumbs";
import { useFormik } from "formik";
import { checkoutSchema } from "../../validations/checkoutSchema";
import * as Yup from "yup";

export default function Checkout() {
  const initialValues = {
    billing: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNo: "",
      address1: "",
      address2: "",
      country: "",
      city: "",
      state: "",
      zip: "",
    },
    shiping: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNo: "",
      address1: "",
      address2: "",
      country: "",
      city: "",
      state: "",
      zip: "",
      isDiffrentShip: "",
    },
    payment: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: checkoutSchema,
    enableReinitialize: true,
    onSubmit: (values, action) => {
      alert(JSON.stringify(values));
      action.resetForm();
    },
  });
  return (
    <>
      <Breadcrumbs />
      <div className="container-fluid">
        <form onSubmit={formik.handleSubmit}>
          <div className="row px-xl-5">
            <CheckOutForm formik={formik} />
            <OrderTotal formik={formik} />
          </div>
        </form>
      </div>
    </>
  );
}
