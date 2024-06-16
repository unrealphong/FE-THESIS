import { CarOutlined, LeftOutlined } from "@ant-design/icons"
import { Tag } from "antd"
import { Link } from "react-router-dom"

const OrderDetail = () => {
    return (
        <>
            <div className="w-full p-5 pl-60 pr-60">
                <div className="w-full">
                    <div>
                        <Link to="/orders">
                            <button>
                                <LeftOutlined /> Quay lại
                            </button>
                        </Link>
                    </div>
                    <div className="mt-10 flex">
                        <span className="text-2xl font-bold">
                            CHI TIẾT ĐƠN HÀNG #K6AAAO6M38
                        </span>
                        <Tag
                            color="success"
                            className="ml-auto mt-1 text-sm font-bold"
                        >
                            success
                        </Tag>
                    </div>
                    <div className="mt-5 flex w-full">
                        <div className="mr-2 w-1/3 ">
                            <span className="text-sl font-bold">
                                Địa chỉ người nhận
                            </span>
                            <div
                                className="mt-2 bg-gray-100 p-5"
                                style={{ minHeight: "200px" }}
                            >
                                <span className="font-bold">nguyen van A</span>
                                <p>
                                    Địa chỉ: Tỉnh Lạng Sơn | Huyện Chi Lăng | Xã Hữu
                                    Kiên, Na Son, Điện Biên Đông, Điện Biên Điện
                                    thoại: 84987425342
                                </p>
                            </div>
                        </div>
                        <div className="mr-2 w-1/3">
                            <span className="text-sl font-bold">
                                Hình thức giao hàng
                            </span>
                            <div
                                className="mt-2 bg-gray-100 p-5"
                                style={{ minHeight: "200px" }}
                            >
                                <span className="font-bold">nguyen van A</span>
                                <p>
                                    <CarOutlined />
                                    Giao hàng tại nhà
                                </p>
                            </div>
                        </div>
                        <div className="mr-2 w-1/3 ">
                            <span className="text-sl font-bold">
                                Hình thức thanh toán
                            </span>
                            <div
                                className="mt-2 bg-gray-100 p-5"
                                style={{ minHeight: "200px" }}
                            >
                                <span className="">
                                    Thanh toán tiền mặt khi nhận hàng (COD)
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 mt-4">
                        <span className="text-xl font-bold">GIỎ HÀNG</span>
                        <span text-sm className="text-red-500">
                            (1 sản phẩm)
                        </span>
                    </div>
                    <div className="w-full">
                        <table className="mb-10 w-full bg-gray-100">
                            <thead>
                                <th className="p-2">Tên Hàng</th>
                                <th className="p-2">Giá</th>
                                <th className="p-2">Số Lượng</th>
                                <th className="p-2">Tạm Tính</th>
                            </thead>
                            <tbody className="bg-white text-center align-middle">
                                <tr>
                                    <td className="w-1/4">
                                        <div className="m-2 flex">
                                            <img src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75" />
                                            <div className="m-2">
                                                <p className="mb-2 text-sm">
                                                    NỮ/Áo chống nắng Sunstop Master
                                                    công nghệ mới 40000465
                                                </p>
                                                <span className="text-sm ">
                                                    Kích thước:
                                                    <span className="font-bold">
                                                        XL
                                                    </span>
                                                </span>
                                                <br />
                                                <span className="text-sm">
                                                    Màu sắc:
                                                    <span className="font-bold">
                                                        red
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>499.000 đ</td>
                                    <td>x1</td>
                                    <td>
                                        <p className="font-bold">499.000 đ</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="w-1/4">
                                        <div className="m-2 flex">
                                            <img src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75" />
                                            <div className="m-2">
                                                <p className="mb-2 text-sm">
                                                    NỮ/Áo chống nắng Sunstop Master
                                                    công nghệ mới 40000465
                                                </p>
                                                <span className="text-sm ">
                                                    Kích thước:
                                                    <span className="font-bold">
                                                        XL
                                                    </span>
                                                </span>
                                                <br />
                                                <span className="text-sm">
                                                    Màu sắc:
                                                    <span className="font-bold">
                                                        red
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>499.000 đ</td>
                                    <td>x1</td>
                                    <td>
                                        <p className="font-bold">499.000 đ</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <hr className="my-4 ml-2 mr-2 w-full border-t border-dashed border-gray-400" />
                        <div className="flex">
                            <p className="text-xl">Tạm tính</p>
                            <p className="ml-auto text-xl font-bold">249,000 đ</p>
                        </div>
                        <div className="mt-5 flex">
                            <p className="text-xl">Phí vận chuyển</p>
                            <p className="ml-auto text-xl font-bold">0 đ</p>
                        </div>
                        <div className="mt-5 flex">
                            <p className="text-xl">Mã giảm giá</p>
                            <p className="ml-auto text-xl font-bold">0 đ</p>
                        </div>
                        <hr className="my-4 ml-2 mr-2 w-full border-t border-dashed border-gray-400" />
                        <div className="flex">
                            <p className="text-xl">Tổng cộng</p>
                            <p className="mb-20 ml-auto text-3xl font-bold text-red-500">
                                249,000 đ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderDetail
