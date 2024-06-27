import React, { useEffect, useState } from "react";
import carousel1 from "../../../assets/img/carousel-1.jpg";
import carousel2 from "../../../assets/img/carousel-2.jpg";
import carousel3 from "../../../assets/img/carousel-3.jpg";
import axios from "axios";

export default function Carosel() {
  const [carosal, setcarosal] = useState([]);
  useEffect(() => {
    async function collectData() {
      axios
        .get("./JSON/carousal.json")
        .then((response) => setcarosal(response.data.carousal))
        .catch((error) => console.log(error));
    }
    collectData();
  }, []);
  console.log(carosal);
  return (
    <div className="container-fluid mb-3" id="carousel">
      <div className="row px-xl-5">
        <div className="col-12">
          <div
            id="header-carousel"
            className="carousel slide carousel-fade mb-30 mb-lg-0"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              {carosal.map((data, index) => (
                <li
                  key={index}
                  data-target="#header-carousel"
                  data-slide-to={index}
                  className={index === 0 ? "active" : ""}
                />
              ))}
            </ol>
            <div className="carousel-inner">
              {carosal.map((data, index) => (
                <div
                  key={index}
                  className={
                    index === 0
                      ? "carousel-item position-relative active"
                      : "carousel-item position-relative"
                  }
                  style={{ height: 430 }}
                >
                  <img
                    className="position-absolute w-100 h-100"
                    src={data.url}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: 700 }}>
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                        {data.title}
                      </h1>
                      <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                        {data.content}
                      </p>
                      <a
                        className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                        href="#"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
