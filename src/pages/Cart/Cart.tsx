
import cart from "../../assets/images/icons/icon-bag.svg"
import cart1 from "../../assets/images/icons/icon-bag-2.svg"
import cart2 from "../../assets/images/icons/icon-bag-3.svg"
import { ArrowRightOutlined, ClearOutlined } from "@ant-design/icons"


const Cart = () => {
    return (
        <>
            <main className="pl-36 pr-28 mb-28" >
                <div className="flex items-center justify-center mt-20 mb-10">
                    <div className="flex items-center">
                        <img src={cart} className="img-fluid" />
                        <span className="text-xl font-bold text-danger ml-2">Giỏ Hàng</span>
                    </div>

                    <i className="fa-solid fa-arrow-right text-3xl mx-4"></i>

                    <div className="flex items-center">
                        <img src={cart1} className="img-fluid" />
                        <span className="text-xl font-light  ml-2">Đặt Hàng</span>
                    </div>

                    <i className="fa-solid fa-arrow-right text-3xl mx-4"></i>

                    <div className="flex items-center">
                        <img src={cart2} className="img-fluid" />
                        <span className="text-xl font-light  ml-2">Hoàn Thành Đơn Hàng</span>
                    </div>
                </div>
                <div className="cart-main container mt-5">
                    <div className="row p-0 flex">
                        <div className="col-xl-8 col-sm-12 table-responsive">
                            <div className="bg-gray-100 p-4">
                                <table className="font-bold">
                                    <thead>
                                        <th className="font-bold">STT</th>
                                        <th className="font-bold">Ảnh</th>
                                        <th className="font-bold">Sản Phẩm</th>
                                        <th className="font-bold">Giá</th>
                                        <th className="font-bold">Số Lượng</th>
                                        <th className="font-bold">Thành Tiền</th>
                                    </thead>
                                    <tbody className="pt-20">
                                        <tr ng-repeat="item in cart" className="pb-20 relative">
                                            <td className="font-normal pt-5">1</td>
                                            <td className="font-normal pt-5">
                                                <img
                                                    src="https://res.cloudinary.com/doy3slx9i/image/upload/v1712158639/Ecommere/hf5jncz8d6pxelaxystr.webp"
                                                    width="90px"
                                                />
                                            </td>
                                            <td className="font-normal pl-8 pr-8 pt-0">
                                                <p style={{ fontWeight: "400", paddingBottom: "7px", fontSize: '16px' }}>Áo T-Shirt cổ tròn C9TSH519M</p>
                                                <p style={{ fontSize: "14px" }}>Kích thước: L<br />Màu sắc: Xám</p>
                                            </td>
                                            <td className="font-normal pl-5 pr-5">299,000đ</td>
                                            <td className="font-normal pl-4 pr-4">
                                                <div className="flex items-center">
                                                    <button
                                                        className="rounded border focus:outline-none px-2 py-1 w-8 h-8 text-center text-gray-700 hover:bg-gray-200 cursor-pointer select-none"
                                                    >
                                                        -
                                                    </button>
                                                    <input
                                                        type="number"
                                                        className="rounded border focus:outline-none px-2 py-1 w-10 h-8 text-center text-gray-700 hover:bg-gray-200 cursor-pointer select-none "
                                                        min="1"
                                                        max="9"
                                                        defaultValue="1"
                                                    />
                                                    <button
                                                        className="rounded border focus:outline-none px-2 py-1 w-8 h-8 text-center text-gray-700 hover:bg-gray-200 cursor-pointer select-none"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="font-bold pr-4 pl-4">299,000đ</td>
                                            <td className="absolute bottom-2 end-0 translate-y-0 cursor-pointer">
                                                <ClearOutlined />
                                            </td>
                                        </tr>
                                        <tr ng-repeat="item in cart" className="pb-20 relative">
                                            <td className="font-normal pt-5">1</td>
                                            <td className="font-normal pt-5">
                                                <img
                                                    src="https://res.cloudinary.com/doy3slx9i/image/upload/v1712158639/Ecommere/hf5jncz8d6pxelaxystr.webp"
                                                    width="90px"
                                                />
                                            </td>
                                            <td className="font-normal pl-8 pr-8 pt-0">
                                                <p style={{ fontWeight: "400", paddingBottom: "7px", fontSize: '16px' }}>Áo T-Shirt cổ tròn C9TSH519M</p>
                                                <p style={{ fontSize: "14px" }}>Kích thước: L<br />Màu sắc: Xám</p>
                                            </td>
                                            <td className="font-normal pl-5 pr-5">299,000đ</td>
                                            <td className="font-normal pl-4 pr-4">
                                                <div className="flex items-center">
                                                    <button
                                                        className="rounded border focus:outline-none px-2 py-1 w-8 h-8 text-center text-gray-700 hover:bg-gray-200 cursor-pointer select-none"
                                                    >
                                                        -
                                                    </button>
                                                    <input
                                                        type="number"
                                                        className="rounded border focus:outline-none px-2 py-1 w-10 h-8 text-center text-gray-700 hover:bg-gray-200 cursor-pointer select-none "
                                                        min="1"
                                                        max="9"
                                                        defaultValue="1"
                                                    />
                                                    <button
                                                        className="rounded border focus:outline-none px-2 py-1 w-8 h-8 text-center text-gray-700 hover:bg-gray-200 cursor-pointer select-none"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="font-bold pr-4 pl-4">299,000đ</td>
                                            <td className="absolute bottom-2 end-0 translate-y-0 cursor-pointer">
                                                <ClearOutlined />
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                        <div className="ml-5 bg-gray-100 p-5">
                            <div className="">
                                <h5 className="font-bold pb-6" style={{ fontSize: 25 }}>ĐƠN HÀNG</h5>

                                <div className="custom-dash d-flex flex-column gap-2 pb-3">
                                    <small className="fw-bold fs-6">
                                        Quý Khách Vui Lòng Nhập Mã Phiếu Giảm Giá Ở Bước Kế Tiếp
                                    </small>
                                </div>
                                <div className="custom-dash d-flex flex-column gap-2 pb-3">
                                    <div className="flex align-items-center justify-content-between">
                                        <h5 className="mb-0 text-danger font-bold">Tổng giá trị đơn hàng </h5>
                                        <h5 className="mb-0 text-danger fw-bold ml-auto text-red-500 font-bold" style={{ fontSize: 20 }} ng-if="totalPrice">
                                            299,000đ
                                        </h5>
                                    </div>
                                    <hr className="border-t border-dotted  mt-4 mb-2 border-gray-400 " />
                                </div>

                                <a className="w-100 btn btn-danger w-full bg-red-500 text-white" href="#!checkout">
                                    Tiếp Tục Thanh Toán <ArrowRightOutlined />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Cart