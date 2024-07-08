import Skeleton from "react-loading-skeleton";
import { useGetCategoryDataQuery } from "../../../Redux/Slices/CategoryApis";
import { Link } from "react-router-dom";
export default function CategoryHome() {
  const { data } = useGetCategoryDataQuery();
  console.log(data?.data?.data, "dataatatatatatattaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  return (
    <div className="container-fluid pt-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Categories</span>
      </h2>
      <div className="row px-xl-5 pb-3">
        {data?.data?.data.length > 0 ? (
          data?.data?.data.map((data, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
              <Link className="text-decoration-none" to="">
                <div className="cat-item img-zoom d-flex align-items-center mb-4">
                  <div
                    className="overflow-hidden"
                    style={{ width: 100, height: 100 }}
                  >
                    <img className="img-fluid" src={data.image} alt="" />
                  </div>
                  <div className="flex-fill pl-3">
                    <h6>{data.category_name}</h6>
                    <small className="text-body">100 Products</small>
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
