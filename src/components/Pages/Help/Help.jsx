import React from "react";
import helpImg from "../../../assets/img/help.png";
import Accordion from "react-bootstrap/Accordion";
import Breadcrumbs from "../../../Routes/Breadcrumbs";
import { useGetHelpDataQuery } from "../../../Redux/Slices/GeneralSettingsApi";

export default function Help() {
  const { data: HelpData } = useGetHelpDataQuery();
  return (
    <>
      <Breadcrumbs />
      <div className="container-fluid">
        <h2 className="section-title mx-5 position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Help Us</span>
        </h2>
        <div
          className="container-fluid mx-5"
          dangerouslySetInnerHTML={{ __html: HelpData?.description?.description}}
        ></div>
      </div>
    </>
  );
}
