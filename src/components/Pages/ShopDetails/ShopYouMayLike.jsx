import React from "react";
import { useGetProductDataQuery } from "../../../Redux/Slices/ProductApi";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import RatingIntegration from "../../Common/RatingIntegration";
export default function ShopYouMayLike() {
  const { data: productData } = useGetProductDataQuery();
 
  return (
    <div className="container-fluid py-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">You May Also Like</span>
      </h2>

      <div className="row px-xl-5">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={1}
          slidesPerView={4}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            waitForTransition: false,
          }}
          onSwiper={(swiper) => {
            swiper.autoplay.start();
          }}
          loop={true}
        >
          {productData?.products?.map((data, index) => (
            <SwiperSlide className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
                <div className="product-item bg-light mb-4">
                  <div className="product-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src={data?.product_images[0]}
                      alt=""
                      style={{ height: "510px" }}
                    />
                    <div className="product-action">
                      <Link
                        to={"/wishlist"}
                        className="btn btn-outline-dark btn-square"
                      >
                        <i className="far fa-heart" />
                      </Link>

                      <Link
                        to={`/shop/${data.product_id}`}
                        className="btn btn-outline-dark btn-square"
                      >
                        <i className="fa fa-search" />
                      </Link>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <Link
                      className="h6 text-decoration-none text-truncate"
                      href=""
                    >
                      {data?.product_name}
                    </Link>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5>
                        {data.discount_type === "fixed" &&
                          data.price - data.discount_value}{" "}
                      </h5>
                      <h6 className="text-muted ml-2">
                        <del>${data.price}</del>
                      </h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                      <RatingIntegration star={data?.Rating_Count} />
                      <small>({data?.totalReviews})</small>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
