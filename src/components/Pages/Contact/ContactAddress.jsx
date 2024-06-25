import React from "react";

export default function ContactAddress() {
  return (
    <div className="bg-light p-30 mb-3">
      <p className="mb-2">
        <i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New
        York, USA
      </p>
      <p className="mb-2">
        <i className="fa fa-envelope text-primary mr-3"></i>info@example.com
      </p>
      <p className="mb-2">
        <i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890
      </p>
    </div>
  );
}
