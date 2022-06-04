import React from "react";

export default function Modal(props) {
  const { productsDetails } = props;
  if (!productsDetails) return null;

  return (
    <div
      className="modal fade"
      id="product-details"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Chi Tiết
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-4">
                <img src={productsDetails.image} width="100%" alt="" />
              </div>
              <div className="col-sm-8">
                <table className="table ">
                  <tbody>
                    <tr>
                      <td>Mã sản phẩm :</td>
                      <td>{productsDetails.id}</td>
                    </tr>
                    <tr>
                      <td>Tên sản phẩm :</td>
                      <td>{productsDetails.name}</td>
                    </tr>
                    <tr>
                      <td>Mô tả :</td>
                      <td>{productsDetails.description}</td>
                    </tr>
                    <tr>
                      <td>Mô tả ngắn :</td>
                      <td>{productsDetails.shortDescription}</td>
                    </tr>
                    <tr>
                      <td>Giá :</td>
                      <td>{productsDetails.price} $</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
