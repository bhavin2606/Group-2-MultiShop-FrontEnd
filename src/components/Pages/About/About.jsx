import React from "react";
import Breadcrumbs from "../../../Routes/Breadcrumbs";
// import { useGetAboutUsDataQuery } from "../../../Redux/Slices/GeneralSettingsApi";
export default function About() {
  // const { data: aboutData } = useGetAboutUsDataQuery();

  return (
    <>
      <Breadcrumbs />
      {/* <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">About US</span>
        </h2>
        <div
          className="container mx-5"
          dangerouslySetInnerHTML={{
            __html: aboutData?.description?.description,
          }}
        ></div>
      </div> */}
       <div className="container-fluid">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">About US</span>
        </h2>
    <div className="container mt-5">
      <div className="row mt-4">
        <h4>Introduction</h4>
        <p>
          Multishop is a one stop shop for all your fashion and lifestyle needs.
          Being India's largest e-commerce store for fashion and lifestyle
          products, Multishop aims at providing a hassle free and enjoyable
          shopping experience to shoppers across the country with the widest
          range of brands and products on its portal. The brand is making a
          conscious effort to bring the power of fashion to shoppers with an
          array of the latest and trendiest products available in the country
        </p>
      </div>
      <div className="row mt-4">
        <h4>Value proposition</h4>
        <p>
          Multishop's value proposition revolves around giving consumers the
          power and ease of purchasing fashion and lifestyle products online.
          Offerings such as the largest in-season product catalogue, 100%
          authentic products, cash on delivery and 30 day return policy make
          Multishop, the preferred shopping destination in the country. To make
          online shopping easier for you, a dedicated customer connect team is
          on standby to answer your queries 24x7
        </p>
      </div>
      <div className="row mt-4">
        <h4>Brands</h4>
        <p>
          Multishop understands its shoppers' needs and caters to them with
          choice of apparel, accessories, cosmetics and footwear from over 500
          leading Indian and international brands. Prominent brands include
          Adidas, Nike, Puma, Catwalk, Inc 5, United Colors of Benetton, FCUK,
          Timberland, Avirate, FabIndia and Biba to name a few. You can also
          shop from some recently introduced labels such as - Roadster, Sher
          Singh, Dressberry, Kook N Keech and ETC
        </p>
      </div>
      <div className="row mt-4">
        <h4>Recognitions</h4>
        <ul>
          <li>
            Awarded <b> 'Fashion eRetailer of the Year 2013'</b> by Franchise
            India Indian eRetail Awards
          </li>
          <li>
            Awarded <b>'Best E-commerce Website for 2012' </b>by IAMAI India
            Digital Awards
          </li>
          <li>
            Awarded{" "}
            <b>'Images Most Admired Retailer of the Year: Non-Store Retail'</b>{" "}
            for 2012 by Images Group
          </li>
          <li>
            Awarded <b>'Best E-commerce Partner of the year 2011-12' </b>by Puma
            India
          </li>
        </ul>
      </div>
    </div>
    </div>
    </>
  );
}
