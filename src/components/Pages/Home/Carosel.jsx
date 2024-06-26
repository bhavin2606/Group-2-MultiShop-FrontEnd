import React, { useEffect, useState } from "react";
import carousel1 from "../../../assets/img/carousel-1.jpg";
import carousel2 from "../../../assets/img/carousel-2.jpg";
import carousel3 from "../../../assets/img/carousel-3.jpg";
import axios from "axios";

export default function Carosel() {
  const [carosal,setcarosal] = useState([])
  useEffect(() => {
    async function collectData() {
      axios
        .get("./JSONDATA/carousal.json")
        .then((response) => setcarosal(response.data.carousal))
        .catch((error) => console.log(error));
    }
    collectData();
  }, []);

  return (
    <div className="container-fluid mb-3">
      <div className="row px-xl-5">
        <div className="col-12">
          <div
            id="header-carousel"
            className="carousel slide carousel-fade mb-30 mb-lg-0"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#header-carousel"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#header-carousel" data-slide-to={1} />
              <li data-target="#header-carousel" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div
                className="carousel-item position-relative active"
                style={{ height: 430 }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src={carousel1}
                  style={{ objectFit: "cover" }}
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: 700 }}>
                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                      Men Fashion
                    </h1>
                    <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                      Lorem rebum magna amet lorem magna erat diam stet. Sadips
                      duo stet amet amet ndiam elitr ipsum diam
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
              <div
                className="carousel-item position-relative"
                style={{ height: 430 }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src={carousel2}
                  style={{ objectFit: "cover" }}
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: 700 }}>
                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                      Women Fashion
                    </h1>
                    <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                      Lorem rebum magna amet lorem magna erat diam stet. Sadips
                      duo stet amet amet ndiam elitr ipsum diam
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
              <div
                className="carousel-item position-relative"
                style={{ height: 430 }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src={carousel3}
                  style={{ objectFit: "cover" }}
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: 700 }}>
                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                      Kids Fashion
                    </h1>
                    <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                      Lorem rebum magna amet lorem magna erat diam stet. Sadips
                      duo stet amet amet ndiam elitr ipsum diam
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
