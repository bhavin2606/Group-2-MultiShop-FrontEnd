import { useFormik } from "formik";
import React from "react";
import { contactUSData } from "../../../Redux/Actions/postApiData";
import { usePostContactDataMutation } from "../../../Redux/Slices/GeneralSettingsApi";
import { toast } from "react-toastify";
import { contactSchema } from "../../validations/contactSchema";

export default function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [postContactData, result] = usePostContactDataMutation()

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: contactSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: async (values, action) => {
        console.log(values);
       let res = await postContactData(values)
        console.log(res,"resultresultresult");
        action.resetForm();
        if (res.data.code === 200) {
          toast.success("Data Added Successfully")
        }
      },
    });   

  return (
    <div className="contact-form bg-light p-30">
      <div id="success" />
      <form
        name="sentMessage"
        id="contactForm"
        onSubmit={handleSubmit}
        noValidate="novalidate"
      >
        <div className="control-group">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your Name"
            required="required"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name ? (
            <p className="help-block text-danger">{errors.name}</p>
          ) : null}
        </div>
        <div className="control-group mt-3">
          <input
            type="email"
            className="form-control "
            id="email"
            placeholder="Your Email"
            required="required"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email ? (
            <p className="help-block text-danger">{errors.email}</p>
          ) : null}
        </div>
        <div className="control-group mt-3">
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Subject"
            required="required"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="help-block text-danger" />
        </div>
        <div className="control-group mb-3">
          <textarea
            className="form-control"
            rows={8}
            id="message"
            placeholder="Message"
            required="required"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.message && errors.message ? (
            <p className="form-error text-danger">{errors.message}</p>
          ) : null}
        </div>
        <div>
          <button
            className="btn btn-primary py-2 px-4 "
            type="submit"
            id="sendMessageButton"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
