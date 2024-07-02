import React, { useEffect, useState } from "react";
import axios from "axios";
import { getBannerData } from "../../../Redux/Actions/getApiData";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


export default function Carosel() {
  const [carosal, setcarosal] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function collectData() {
      setLoading(true);
      let data = await getBannerData();
      setcarosal(data.carousal);
    }
    collectData();
  }, []);
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

              {loading ? (
                <div  style={{ display: 'flex' }}>
                {console.log(carosal)}
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <p>
                      <Skeleton count={3} />
                    </p>
                  </SkeletonTheme>
                </div>
              ) : (
                carosal?.length > 0 &&
                carosal?.map((data, index) => (
                  <li
                    key={index}
                    data-target="#header-carousel"
                    data-slide-to={index}
                    className={index === 0 ? "active" : ""}
                  />
                ))
              )}
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
