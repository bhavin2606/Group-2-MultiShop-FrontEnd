import Skeleton from "react-loading-skeleton";
import { useGetCategoryDataQuery } from "../../../Redux/Slices/CategoryApis";
import { Link } from "react-router-dom";
import category from "../../../assets/img/categorty.png";

export default function CategoryHome() {
  const { data } = useGetCategoryDataQuery();
  return (
    <div className="container-fluid pt-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Categories</span>
      </h2>
      <div className="row px-xl-5 pb-3">
        {data?.data?.length > 0 ? (
          data?.data?.map((data, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
              <Link className="text-decoration-none" to="">
                <div className="cat-item img-zoom d-flex align-items-center mb-4">
                  <div
                    className="overflow-hidden"
                    style={{ width: 100, height: 100 }}
                  >
                    <img
                      src={data.category_image}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src= category;
                      }}
                      className="img-fluid h-100 w-100 object-fit-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex-fill pl-3">
                    <h6>{data.name}</h6>
                    <small className="text-body">
                      {data?.total_products}{" "}
                      {data?.total_products === 1 ? "Product" : "Products"}{" "}
                    </small>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <Skeleton height={300} />
        )}
      </div>
    </div>
  );
}
