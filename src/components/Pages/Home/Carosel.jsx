import React, { useEffect, useState } from "react";
import axios from "axios";
import { getBannerData } from "../../../Redux/Actions/getApiData";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

export default function Carosel(props) {
  const [carosal, setcarosal] = useState([]);
  // const [loading, setLoading] = useState(false);

  const { loading = true } = props;

  useEffect(() => {
    async function collectData() {
      // setLoading(true);
      let data = await getBannerData(loading);
      console.log(data?.Data?.data,"dataaaa");
      setcarosal(data?.Data?.data);
      // setLoading(false);
    }
    collectData();
  }, []);
  console.log(carosal,"carosallllllllllllllllll");
  return (
    <div className="container-fluid mb-3" id="carousel">
      <div className="row px-xl-5">
        <div className="col-12">
          {carosal && carosal?.length === 0 ? (
            <Skeleton height={500} />
          ) : (
            <div
              id="header-carousel"
              className="carousel slide carousel-fade mb-30 mb-lg-0"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                {carosal && carosal.length > 0 &&
                  carosal?.map((data, index) => (
                    <li
                      key={index}
                      data-target="#header-carousel"
                      data-slide-to={index}
                      className={index === 0 ? "active" : ""}
                    />
                  ))}
              </ol>
              <div className="carousel-inner">
                {carosal?.length > 0 &&
                  carosal?.map((data, index) => (
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
                        src={data.banner_image}
                        style={{ objectFit: "cover" }}
                      />
                      <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{ maxWidth: 700 }}>
                          <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                            {data.banner_title}
                          </h1>
                          <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                            {data.banner_desc}
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
          )}
        </div>
      </div>
    </div>
  );
}
