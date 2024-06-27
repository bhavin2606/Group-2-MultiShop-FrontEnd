import React from "react";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import ContactAddress from "./ContactAddress";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../Routes/Breadcrumbs";

export default function Contact() {
  return (
    <>
      <Breadcrumbs/>
      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Contact Us</span>
        </h2>
        <div className="row px-xl-5">
          <div className="col-lg-7 mb-5">
            <ContactForm />
          </div>
          <div className="col-lg-5 mb-5">
            <ContactMap />
            <ContactAddress />
          </div>
        </div>
      </div>
    </>
  );
}
