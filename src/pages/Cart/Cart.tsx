import cart from "../../assets/images/icons/icon-bag.svg"
import cart1 from "../../assets/images/icons/icon-bag-2.svg"
import cart2 from "../../assets/images/icons/icon-bag-3.svg"
import { ArrowRightOutlined, ClearOutlined } from "@ant-design/icons"

const Cart = () => {
    return (
        <>
            <main className="mb-28 flex flex-wrap justify-around pl-36 pr-36 ">
                <div className="mb-10 mt-20 flex items-center justify-center">
                    <div className="flex items-center">
                        <img src={cart} className="img-fluid" />
                        <span className="text-danger ml-2 text-xl font-bold">
                            Giỏ Hàng
                        </span>
                    </div>
                    <hr className="my-4 ml-2 mr-2 w-20 border-t border-dashed border-gray-400" />

                    <div className="flex items-center">
                        <img src={cart1} className="img-fluid" />
                        <span className="ml-2 text-xl  font-light">Đặt Hàng</span>
                    </div>

                    <hr className="my-4 ml-2 mr-2 w-20 border-t border-dashed border-gray-400" />

                    <div className="flex items-center">
                        <img src={cart2} className="img-fluid" />
                        <span className="ml-2 text-xl  font-light">
                            Hoàn Thành Đơn Hàng
                        </span>
                    </div>
                </div>
                <div className="cart-main container mt-5">
                    <div className="row flex p-0">
                        <div className="col-xl-8 col-sm-12 table-responsive w-2/3">
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
                                        <tr
                                            ng-repeat="item in cart"
                                            className="relative pb-20"
                                        >
                                            <td className="pt-5 font-normal">1</td>
                                            <td className="pt-5 font-normal">
                                                <img
                                                    src="https://res.cloudinary.com/doy3slx9i/image/upload/v1712158639/Ecommere/hf5jncz8d6pxelaxystr.webp"
                                                    width="90px"
                                                />
                                            </td>
                                            <td className="pl-8 pr-8 pt-0 font-normal">
                                                <p
                                                    style={{
                                                        fontWeight: "400",
                                                        paddingBottom: "7px",
                                                        fontSize: "16px",
                                                    }}
                                                >
                                                    Áo T-Shirt cổ tròn C9TSH519M
                                                </p>
                                                <p style={{ fontSize: "14px" }}>
                                                    Kích thước: L<br />
                                                    Màu sắc: Xám
                                                </p>
                                            </td>
                                            <td className="pl-5 pr-5 font-normal">
                                                299,000đ
                                            </td>
                                            <td className="pl-4 pr-4 font-normal">
                                                <div className="flex items-center">
                                                    <button className="h-8 w-8 cursor-pointer select-none rounded border px-2 py-1 text-center text-gray-700 hover:bg-gray-200 focus:outline-none">
                                                        -
                                                    </button>
                                                    <input
                                                        type="number"
                                                        className="w-15 h-8 cursor-pointer select-none rounded border px-2 py-1 text-center text-gray-700 hover:bg-gray-200 focus:outline-none "
                                                        min="1"
                                                        max="9"
                                                        defaultValue="1"
                                                    />
                                                    <button className="h-8 w-8 cursor-pointer select-none rounded border px-2 py-1 text-center text-gray-700 hover:bg-gray-200 focus:outline-none">
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="pl-4 pr-4 font-bold">
                                                299,000đ
                                            </td>
                                            <td className="absolute bottom-2 end-0 translate-y-0 cursor-pointer">
                                                <ClearOutlined />
                                            </td>
                                        </tr>
                                        <tr
                                            ng-repeat="item in cart"
                                            className="relative pb-20"
                                        >
                                            <td className="pt-5 font-normal">1</td>
                                            <td className="pt-5 font-normal">
                                                <img
                                                    src="https://res.cloudinary.com/doy3slx9i/image/upload/v1712158639/Ecommere/hf5jncz8d6pxelaxystr.webp"
                                                    width="90px"
                                                />
                                            </td>
                                            <td className="pl-8 pr-8 pt-0 font-normal">
                                                <p
                                                    style={{
                                                        fontWeight: "400",
                                                        paddingBottom: "7px",
                                                        fontSize: "16px",
                                                    }}
                                                >
                                                    Áo T-Shirt cổ tròn C9TSH519M
                                                </p>
                                                <p style={{ fontSize: "14px" }}>
                                                    Kích thước: L<br />
                                                    Màu sắc: Xám
                                                </p>
                                            </td>
                                            <td className="pl-5 pr-5 font-normal">
                                                299,000đ
                                            </td>
                                            <td className="pl-4 pr-4 font-normal">
                                                <div className="flex items-center">
                                                    <button className="h-8 w-8 cursor-pointer select-none rounded border px-2 py-1 text-center text-gray-700 hover:bg-gray-200 focus:outline-none">
                                                        -
                                                    </button>
                                                    <input
                                                        type="number"
                                                        className="w-15 h-8 cursor-pointer select-none rounded border px-2 py-1 text-center text-gray-700 hover:bg-gray-200 focus:outline-none "
                                                        min="1"
                                                        max="9"
                                                        defaultValue="1"
                                                    />
                                                    <button className="h-8 w-8 cursor-pointer select-none rounded border px-2 py-1 text-center text-gray-700 hover:bg-gray-200 focus:outline-none">
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="pl-4 pr-4 font-bold">
                                                299,000đ
                                            </td>
                                            <td className="absolute bottom-2 end-0 translate-y-0 cursor-pointer">
                                                <ClearOutlined />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="ml-5 w-1/3 bg-gray-100 p-4">
                            <div className="">
                                <h5
                                    className="pb-6 font-bold"
                                    style={{ fontSize: 25 }}
                                >
                                    ĐƠN HÀNG
                                </h5>

                                <div className="custom-dash d-flex flex-column gap-2 pb-3">
                                    <small className="fw-bold fs-6">
                                        Quý Khách Vui Lòng Nhập Mã Phiếu Giảm Giá Ở
                                        Bước Kế Tiếp
                                    </small>
                                </div>
                                <div className="custom-dash d-flex flex-column gap-2 pb-3">
                                    <div className="align-items-center justify-content-between flex">
                                        <h5 className="text-danger mb-0 font-bold">
                                            Tổng giá trị đơn hàng{" "}
                                        </h5>
                                        <h5
                                            className="text-danger fw-bold mb-0 ml-auto font-bold text-red-500"
                                            style={{ fontSize: 20 }}
                                            ng-if="totalPrice"
                                        >
                                            299,000đ
                                        </h5>
                                    </div>
                                    <hr className="mb-2 mt-4  border-t border-dotted border-gray-400 " />
                                </div>

                                <a
                                    className="w-100 btn-danger btn w-full bg-red-500 text-white"
                                    href="#!checkout"
                                >
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
