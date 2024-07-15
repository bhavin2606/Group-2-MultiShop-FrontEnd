import React, { useEffect } from "react";
import CheckOutForm from "./CheckOutForm";
import OrderTotal from "./OrderTotal";
import Breadcrumbs from "../../../Routes/Breadcrumbs";
import { useFormik } from "formik";
import { checkoutSchema } from "../../validations/checkoutSchema";
import { useGetUserDataQuery } from "../../../Redux/Slices/AuthApis";
import {  usePostAddOrderMutation } from "../../../Redux/Slices/CartListApi";
// import * as Yup from "yup";

export default function Checkout() {
  let token = localStorage.getItem("token")
  const { data: userData } = useGetUserDataQuery(token);
  console.log(userData,"userdata");
  const [postAddOrder] = usePostAddOrderMutation()
  const initialValues = {
    billing: {
      firstName: userData?.data?.first_name ? userData?.data?.first_name : "",
      lastName: userData?.data?.last_name ? userData?.data?.last_name : "",
      email: userData?.data?.email ? userData?.data?.email : "",
      mobileNo: userData?.data?.phone_number
        ? userData?.data?.phone_number
        : "",
      address1: "",
      address2: "",
      country: "",
      city: "",
      state: "",
      zip: "",
    },
    isDiffrentShiping: false,
    shiping: {
      firstName: userData?.data?.first_name ? userData?.data?.first_name : "",
      lastName: userData?.data?.last_name ? userData?.data?.last_name : "",
      email: userData?.data?.email ? userData?.data?.email : "",
      mobileNo: userData?.data?.phone_number
        ? userData?.data?.phone_number
        : "",
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
    onSubmit: async(values, action) => {
      let form = new FormData();
      form.append("payment_method", values?.payment);
      form.append("address_line_1", values?.billing?.address1);
      form.append("address_line_2", values?.billing?.address2);
      form.append("city", values?.billing?.city);
      form.append("state", values?.billing?.state);
      form.append("country", values?.billing?.country);
      form.append("zipcode", values?.billing?.zip);
      form.append("ship_to_different_address", values?.isDiffrentShiping  === true ? 1 : 0);
      form.append("shipping_address_line_1", values?.shiping?.address1);
      form.append("shipping_address_line_2", values?.shiping?.address2);
      form.append("shipping_city", values?.shiping?.city);
      form.append("shipping_state", values?.shiping?.state);
      form.append("shipping_country", values?.shiping?.country);
      form.append("shipping_zipcode", values?.shiping?.zip);
      let res = await postAddOrder({data:form});
      console.log(res , "checkout form");
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
