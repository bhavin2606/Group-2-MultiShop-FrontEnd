import React from "react";
import product1 from "../../../assets/img/product-1.jpg"
import product2 from "../../../assets/img/product-2.jpg"
import product3 from "../../../assets/img/product-3.jpg"
import product4 from "../../../assets/img/product-4.jpg"
import product5 from "../../../assets/img/product-5.jpg"
export default function CartItem() {
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
          <tr>
            <td className="align-middle">
              <img src={product1} alt="" style={{ width: 50 }} />{" "}
              Product Name
            </td>
            <td className="align-middle">$150</td>
            <td className="align-middle">
              <div
                className="input-group quantity mx-auto"
                style={{ width: 100 }}
              >
                <div className="input-group-btn">
                  <button className="btn btn-sm btn-primary btn-minus">
                    <i className="fa fa-minus" />
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control form-control-sm bg-secondary border-0 text-center"
                  defaultValue={1}
                />
                <div className="input-group-btn">
                  <button className="btn btn-sm btn-primary btn-plus">
                    <i className="fa fa-plus" />
                  </button>
                </div>
              </div>
            </td>
            <td className="align-middle">$150</td>
            <td className="align-middle">
              <button className="btn btn-sm btn-danger">
                <i className="fa fa-times" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="align-middle">
              <img src={product2} alt="" style={{ width: 50 }} />{" "}
              Product Name
            </td>
            <td className="align-middle">$150</td>
            <td className="align-middle">
              <div
                className="input-group quantity mx-auto"
                style={{ width: 100 }}
              >
                <div className="input-group-btn">
                  <button className="btn btn-sm btn-primary btn-minus">
                    <i className="fa fa-minus" />
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control form-control-sm bg-secondary border-0 text-center"
                  defaultValue={1}
                />
                <div className="input-group-btn">
                  <button className="btn btn-sm btn-primary btn-plus">
                    <i className="fa fa-plus" />
                  </button>
                </div>
              </div>
            </td>
            <td className="align-middle">$150</td>
            <td className="align-middle">
              <button className="btn btn-sm btn-danger">
                <i className="fa fa-times" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="align-middle">
              <img src={product3} alt="" style={{ width: 50 }} />{" "}
              Product Name
            </td>
            <td className="align-middle">$150</td>
            <td className="align-middle">
              <div
                className="input-group quantity mx-auto"
                style={{ width: 100 }}
              >
                <div className="input-group-btn">
                  <button className="btn btn-sm btn-primary btn-minus">
                    <i className="fa fa-minus" />
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control form-control-sm bg-secondary border-0 text-center"
                  defaultValue={1}
                />
                <div className="input-group-btn">
                  <button className="btn btn-sm btn-primary btn-plus">
                    <i className="fa fa-plus" />
                  </button>
                </div>
              </div>
            </td>
            <td className="align-middle">$150</td>
            <td className="align-middle">
              <button className="btn btn-sm btn-danger">
                <i className="fa fa-times" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="align-middle">
              <img src={product4} alt="" style={{ width: 50 }} />{" "}
              Product Name
            </td>
            <td className="align-middle">$150</td>
            <td className="align-middle">
              <div
                className="input-group quantity mx-auto"
                style={{ width: 100 }}
              >
                <div className="input-group-btn">
                  <button className="btn btn-sm btn-primary btn-minus">
                    <i className="fa fa-minus" />
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control form-control-sm bg-secondary border-0 text-center"
                  defaultValue={1}
                />
                <div className="input-group-btn">
                  <button className="btn btn-sm btn-primary btn-plus">
                    <i className="fa fa-plus" />
                  </button>
                </div>
              </div>
            </td>
            <td className="align-middle">$150</td>
            <td className="align-middle">
              <button className="btn btn-sm btn-danger">
                <i className="fa fa-times" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="align-middle">
              <img src={product5} alt="" style={{ width: 50 }} />{" "}
              Product Name
            </td>
            <td className="align-middle">$150</td>
            <td className="align-middle">
              <div
                className="input-group quantity mx-auto"
                style={{ width: 100 }}
              >
                <div className="input-group-btn">
                  <button className="btn btn-sm btn-primary btn-minus">
                    <i className="fa fa-minus" />
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control form-control-sm bg-secondary border-0 text-center"
                  defaultValue={1}
                />
                <div className="input-group-btn">
                  <button className="btn btn-sm btn-primary btn-plus">
                    <i className="fa fa-plus" />
                  </button>
                </div>
              </div>
            </td>
            <td className="align-middle">$150</td>
            <td className="align-middle">
              <button className="btn btn-sm btn-danger">
                <i className="fa fa-times" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
