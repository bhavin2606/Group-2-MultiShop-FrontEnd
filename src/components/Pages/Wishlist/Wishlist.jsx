import Breadcrumbs from "../../../Routes/Breadcrumbs";
import { Link } from "react-router-dom";
import { useGetWishListDataQuery, usePostWishListDataMutation } from "../../../Redux/Slices/WishListApi";
import RatingIntegration from "../../Common/RatingIntegration";
import { toast } from "react-toastify"; 

export default function Wishlist() {
  const { data } = useGetWishListDataQuery();
  const [postWishListData] = usePostWishListDataMutation();

  const handleWishlistSubmit = async (p_id) => {
    console.log(p_id);
    let res = await postWishListData(p_id);
    console.log(res, "HElllllllllllllllll");
    if (res?.data?.success === true) {
      toast.success(res?.data?.message);
    } else {
      toast.error(res?.data?.message);
    }
  };


  return (
    <div>
      <Breadcrumbs />
      <div className="container-fluid m-0">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Wishlist</span>
        </h2>
        <div className="container-fluid px-3 px-5 me-0">
          <div className="row container-fluid">
            {data?.length > 0 ? (
              data?.map((product) => (
                <div
                  key={product?.product_id}
                  className="col-lg-2 d-flex justify-content-start w-100 col-md-4 col-sm-6 pb-1"
                >
                  <div className="product-item bg-light w-100 mb-4">
                    <p className="d-flex justify-content-end p-0">
                      <button
                        className="fs-5 text-decoration-none btn border-0"
                        // onClick={(event) => toggleWishlist(product?.product_id, event)}
                        style={{ backgroundColor: "transparent" }}
                        onClick={() => {
                          handleWishlistSubmit(product?.product_id);
                        }}
                      >
                        <i
                          className={"fas fa-heart"}
                          style={{
                            color: "#3d464d",
                          }}
                        />
                      </button>
                    </p>
                    <div className="product-img position-relative  overflow-hidden">
                      <img
                        className="img-fluid w-100 "
                        src={product?.product_images}
                        style={{ height: "330px" }}
                        alt={product?.products?.name}
                      />
                      <div className="product-action">
                        {/* <Link className="btn btn-outline-dark btn-square" to="">
                          <i className="fa fa-shopping-cart" />
                        </Link> */}
                        <Link
                          className="btn btn-outline-dark btn-square"
                          to={`/shop/${product?.products?.slug}`}
                        >
                          <i className="fa fa-search" />
                        </Link>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <Link
                        className="h6 text-decoration-none text-truncate"
                        to=""
                      >
                        {product?.products?.name}
                      </Link>
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        {/* <h5> */}
                        <h5>
                          ${product?.products?.price}
                        </h5>
                      </div>
                      <div className="d-flex align-items-center justify-content-center mb-1">
                       <RatingIntegration star={product?.avg_rating}/>
                        <small>({product.total_review})</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h5>No items in the wishlist.</h5>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
