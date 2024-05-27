import cart from '../../assets/images/icons/icon-bag.svg';
import cart1 from '../../assets/images/icons/icon-bag-2.svg';
import cart2 from '../../assets/images/icons/icon-bag-3.svg';

const Cart = () => {
    return (
        <>
            <main className="body" >
                <div className="cart-top mt-5 d-flex align-items-center justify-content-center flex-wrap gap-5">
                    <div className="d-flex align-items-center gap-2">
                        <img src={cart} className="img-fluid" />
                        <span className="fs-4 fw-bold text-danger">Giỏ Hàng</span>
                    </div>

                    <i className="fa-solid fa-arrow-right"></i>

                    <div className="d-flex align-items-center gap-2">
                        <img src={cart1} className="img-fluid" />
                        <span className="fs-5 fw-light">Đặt Hàng</span>
                    </div>

                    <i className="fa-solid fa-arrow-right"></i>

                    <div className="d-flex align-items-center gap-2">
                        <img src={cart2} className="img-fluid" />
                        <span className="fs-5 fw-light">Hoàn Thành Đơn Hàng</span>
                    </div>
                </div>

                <div className="cart-main container mt-5">
                    <div className="row p-0">
                        <div className="col-xl-8 col-sm-12 table-responsive">
                            <div className="p-3 border shadow-sm row rounded-3">
                                <table className="table table-striped">
                                    <thead>
                                        <th>STT</th>
                                        <th>Ảnh</th>
                                        <th>Sản Phẩm</th>
                                        <th>Giá</th>
                                        <th>Số Lượng</th>
                                        <th>Thành Tiền</th>
                                    </thead>

                                    <tbody style={{ paddingBottom: 17 }}>
                                        <tr ng-repeat="item in cart" className="position-relative" >
                                            {/* <div className=""> */}


                                                {/* <td>{{ $index+ 1}}</td> */}
                                                <td className="ng-binding" >1</td>
                                                <td>
                                                    <img src="https://res.cloudinary.com/doy3slx9i/image/upload/v1712158639/Ecommere/hf5jncz8d6pxelaxystr.webp" width="60px" />
                                                </td>
                                                <td>
                                                    {/* <h6>{{ item.product.title }}</h6> */}
                                                    <h6 style={{ fontWeight: '600', paddingBottom: '7px' }}>Áo T-Shirt cổ tròn C9TSH519M</h6>
                                                    <p>
                                                        {/* Kích thước: {{ item.variant.size }} */}
                                                        Kích thước: L
                                                        <br />
                                                        Màu sắc: Xám
                                                        {/* Màu sắc: {{ item.variant.color }} */}
                                                    </p>
                                                </td>
                                                {/* <td>{{ item.product.price | currency: "": 0 }}đ</td> */}
                                                <td>299,000đ</td>
                                                <td>
                                                    <div className="d-flex">
                                                        <div className="custom-btn-quantity" ng-click="changeQuantity('decrease', $index)">
                                                            <i className="fa-solid fa-minus"></i>
                                                        </div>
                                                        <input type="number" name="quantity" id="quantity"
                                                            className="custom-input-quantity text-center" ng-model="cart[$index].quantity" defaultValue={1} />
                                                        <div className="custom-btn-quantity" ng-click="changeQuantity('increase', $index)">
                                                            <i className="fa-solid fa-plus"></i>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {/* {{ item.product.price * item.quantity | currency: "": 0 }}đ */}
                                                    299,000đ
                                                </td>
                                                <td className="position-absolute bottom-0 end-0 translate-middle cursor-pointer"
                                                    ng-click="removeProduct($index)" >
                                                    <i className="fa-solid fa-trash"></i>
                                                </td>
                                            {/* </div> */}
                                        </tr>

                                    </tbody>
                                </table>

                                <button className="w-100 btn btn-outline-danger" ng-click="removeAllProduct()">Xoá Hết Giỏ Hàng</button>
                            </div>
                        </div>

                        <div className="col-xl-4 col-sm-12 offset-md-0 ">
                            <div className="p-3 rounded-3 border shadow-sm d-flex gap-3 flex-column">
                                <h5 className="text-start mt-3">ĐƠN HÀNG</h5>

                                <div className="custom-dash d-flex flex-column gap-2 pb-3">
                                    <small className="fw-bold fs-6">Quý Khách Vui Lòng Nhập Mã Phiếu Giảm Giá Ở Bước Kế Tiếp</small>
                                </div>

                                {/* <div className="custom-dash d-flex flex-column gap-2 pb-3">
                                  <div className="d-flex align-items-center justify-content-between">
                                      <p className="mb-1 fw-medium">Tạm Tính</p>
                                      <p className="mb-1 fw-medium" ng-if="totalPrice">{{ totalPrice | currency : "" : 0 }}</p>
                                  </div>

                                  <div className="d-flex align-items-center justify-content-between">
                                      <p className="mb-1 fw-medium">Mã Giảm Giá</p>
                                      <p className="mb-1 fw-medium">{{ discount | currency : "" : 0 }}đ</p>
                                  </div>
                              </div> */}

                                <div className="custom-dash d-flex flex-column gap-2 pb-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h5 className="mb-0 text-danger fw-bold">Tổng Tiền</h5>
                                        {/* <h5 className="mb-0 text-danger fw-bold" ng-if="totalPrice">{{ totalPrice | currency: "" : 0 }}đ
                                      </h5> */}
                                        <h5 className="mb-0 text-danger fw-bold" ng-if="totalPrice">299,000đ
                                        </h5>
                                    </div>
                                </div>

                                <a className="w-100 btn btn-danger" href="#!checkout">Thanh Toán</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Cart