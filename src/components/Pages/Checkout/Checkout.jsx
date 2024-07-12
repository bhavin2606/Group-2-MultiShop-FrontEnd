import React, { useEffect } from "react";
import CheckOutForm from "./CheckOutForm";
import OrderTotal from "./OrderTotal";
import Breadcrumbs from "../../../Routes/Breadcrumbs";
import { useFormik } from "formik";
import { checkoutSchema } from "../../validations/checkoutSchema";
import { useGetUserDataQuery } from "../../../Redux/Slices/AuthApis";
import { useGetCityByIdQuery } from "../../../Redux/Slices/CartListApi";
// import * as Yup from "yup";

export default function Checkout() {
  const { data: userData } = useGetUserDataQuery();
  const initialValues = {
    billing: {
      firstName: userData?.data?.first_name ? userData?.data?.first_name : "",
      lastName: userData?.data?.last_name ?userData?.data?.last_name:"",
      email:userData?.data?.email ?userData?.data?.email:"",
      mobileNo: userData?.data?.phone_number ?userData?.data?.phone_number:"",
      address1: "",
      address2: "",
      country: "",
      city: "",
      state: "",
      zip: "",
    },
    isDiffrentShip: false,
    shiping: {
      firstName: userData?.data?.first_name ? userData?.data?.first_name : "",
      lastName: userData?.data?.last_name ?userData?.data?.last_name:"",
      email: userData?.data?.email ?userData?.data?.email:"",
      mobileNo: userData?.data?.phone_number ?userData?.data?.phone_number:"",
      address1: "",
      address2: "",
      country: "",
      city: "",
      state: "",
      zip: "",
    },
    payment: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: checkoutSchema,
    enableReinitialize: true,
    onSubmit: (values, action) => {
      alert(JSON.stringify(values));
      // console.log(values,"checkout");
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
