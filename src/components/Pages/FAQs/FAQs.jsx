import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./faqs.css"; // Import your CSS file for custom styles
import Accordion from "react-bootstrap/Accordion";
import Breadcrumbs from "../../../Routes/Breadcrumbs";
import { useGetFaqDataQuery } from "../../../Redux/Slices/GeneralSettingsApi";

const FAQs = () => {
  const { data: FaqData } = useGetFaqDataQuery();
  return (
    <>
      <Breadcrumbs />
      <div className="container-fluid">
        <h2 className="section-title mx-5 position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">FREQUENTLY ASKED QUESTIONS</span>
        </h2>
        <div
          className="container mx-5"
          dangerouslySetInnerHTML={{
            __html: FaqData?.description?.description,
          }}
        ></div>
      </div>
    </>
  );
};

export default FAQs;
