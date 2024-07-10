import React from "react";
import {
  useDeleteCartItemMutation,
  useGetCartProductsQuery,
  useMinusCartItemMutation,
  usePlusCartItemMutation,
} from "../../../Redux/Slices/CartListApi";
export default function CartItem() {
  const { data: cartItem } = useGetCartProductsQuery();
  const [DeleteCartItem] = useDeleteCartItemMutation();
  const [MinusCartItem] = useMinusCartItemMutation();
  const [PlusCartItem] = usePlusCartItemMutation();

  console.log(cartItem?.data, "CartItem");
  const handleDeleteCartItem = (id) => {
    DeleteCartItem(id);
  };
  const handleMinusQuantity = (id) => {
    MinusCartItem(id);
  };
  const handlePlusQuantity = (id) => {
    PlusCartItem(id);
  };
  return (
    <div className="col-lg-8 table-responsive mb-5">
      <table className="table table-light table-borderless table-hover text-center mb-0">
        <thead className="thead-dark">
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="align-middle">
          {cartItem?.data?.map((data, index) => (
            <tr>
              <td className="align-middle">
                <img src={data?.product_img} alt="" style={{ width: 50 }} />{" "}
                {data?.product_name}
              </td>
              <td className="align-middle">{data?.product_prize}</td>
              <td className="align-middle">
                <div
                  className="input-group quantity mx-auto"
                  style={{ width: 100 }}
                >
                  <div className="input-group-btn">
                    <button
                      className="btn btn-sm btn-primary btn-minus"
                      onClick={() => {
                        handleMinusQuantity(data?.id);
                      }}
                    >
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-sm bg-secondary border-0 text-center"
                    value={data?.quantity}
                  />
                  <div className="input-group-btn">
                    <button
                      className="btn btn-sm btn-primary btn-plus"
                      onClick={() => {
                        handlePlusQuantity(data?.id);
                      }}
                    >
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
              </td>
              <td className="align-middle">{data?.total}</td>
              <td className="align-middle">
                <button className="btn btn-sm btn-danger">
                  <i
                    className="fa fa-times"
                    onClick={() => {
                      handleDeleteCartItem(data?.id);
                    }}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
