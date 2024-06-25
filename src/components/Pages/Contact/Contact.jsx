import React from "react";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import ContactAddress from "./ContactAddress";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <Link className="breadcrumb-item text-dark" to="/">
                Home
              </Link>
              <span className="breadcrumb-item active">Contact</span>
            </nav>
          </div>
        </div>
      </div>

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
