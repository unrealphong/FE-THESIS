import cart from "../../assets/images/icons/icon-cart-3.svg"
import cart1 from "../../assets/images/icons/icon-bag-4.svg"
import cart2 from "../../assets/images/icons/icon-bag-3.svg"
import { CreditCardOutlined, EnvironmentOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Input, Radio, Select } from "antd"
import TextArea from "antd/es/input/TextArea"
import Search from "antd/es/transfer/search"

const CheckOut = () => {
    const { Search } = Input;
    const buttonStyle = {
        backgroundColor: 'red',
        borderColor: 'red',
        color: 'white'
    };
    return (
        <>
            <main className="body bg-gray-100 mt-10 p-5 m-36">
                <div className="mb-10 mt-5 flex items-center justify-center">
                    <div className="flex items-center pl-10 pr-2" >
                        <img src={cart} className="img-fluid" />
                        <span className="fs-5 fw-light text-xl ml-2 ">Giỏ Hàng</span>
                    </div>

                    <hr className="border-t border-dashed border-gray-400 w-20 my-4" />

                    <div className="flex items-center pl-2 pr-2">
                        <img src={cart1} className="img-fluid" />
                        <span className="fs-4 fw-bold text-danger text-xl ml-2 ">Đặt Hàng</span>
                    </div>

                    <hr className="border-t border-dashed border-gray-400 w-20 my-4" />

                    <div className="flex items-center pl-2 pr-10">
                        <img src={cart2} className="img-fluid text-xl" />
                        <span className="fs-5 fw-light text-xl ml-2 ">Hoàn Thành Đơn Hàng</span>
                    </div>
                </div>

                <div className="checkout-main container mt-5">
                    <div className="row flex ">
                        <form ng-submit="completeOrder()"
                            className="bg-white bg-white w-3/4 p-5">
                            <div className="flex">
                                <div className="flex">
                                    <EnvironmentOutlined />
                                    <h4 className="ml-2 font-bold text-xl">Địa Chỉ Giao Hàng</h4>
                                </div>
                                <a className="text-danger fw-bold mb-0 ml-auto text-sm text-red-500" ng-show="!isLogin" href="#!login" >
                                    <UserOutlined />
                                    <span className="text-danger ml-2 ">Đăng Nhập</span>
                                </a>
                            </div>

                            <div className="row p-0 pt-8">
                                <div className="flex">
                                    <div className="w-2/4">
                                        <label htmlFor="name" className="pl-1 font-bold text-sm">Họ Tên<span className="text-red-500">*</span></label>
                                        <Input placeholder="Nhập họ tên của bạn" className="mt-3 p-2" />
                                    </div>
                                    <div className="w-2/4 ml-10">
                                        <label htmlFor="name" className="pl-1 font-bold text-sm">Email<span className="text-red-500">*</span></label>
                                        <Input placeholder="Nhập email của bạn" className="mt-3 p-2" />
                                    </div>
                                </div>
                                <div className="flex mt-5">
                                    <div className="w-2/4">
                                        <label htmlFor="name" className="pl-1 font-bold text-sm">Số điện thoại<span className="text-red-500">*</span></label>
                                        <Input placeholder="Nhập họ tên của bạn" className="mt-3 p-2" />
                                    </div>
                                    <div className="w-2/4 ml-10"></div>
                                </div>
                                <div className="flex mt-5">
                                    <div className="w-2/6">
                                        <label htmlFor="name" className="pl-1 font-bold text-sm">Chọn tỉnh / thành phố<span className="text-red-500">*</span></label>
                                        <Select
                                            defaultValue="lucy"
                                            className=" w-5/6 mt-3"
                                            style={{ height: '42px' }}
                                            options={[
                                                { value: 'jack', label: 'Jack' },
                                                { value: 'lucy', label: 'Lucy' },
                                                { value: 'Yiminghe', label: 'yiminghe' },
                                                { value: 'disabled', label: 'Disabled', disabled: true },
                                            ]}
                                        />
                                    </div>

                                    <div className="w-2/6">
                                        <label htmlFor="name" className="pl-1 font-bold text-sm">Chọn quận / huyện<span className="text-red-500">*</span></label>
                                        <Select
                                            defaultValue="lucy"
                                            className=" w-5/6 mt-3"
                                            style={{ height: '42px' }}
                                            options={[
                                                { value: 'jack', label: 'Jack' },
                                                { value: 'lucy', label: 'Lucy' },
                                                { value: 'Yiminghe', label: 'yiminghe' },
                                                { value: 'disabled', label: 'Disabled', disabled: true },
                                            ]}
                                        />
                                    </div>

                                    <div className="w-2/6">
                                        <label htmlFor="name" className="pl-1 font-bold text-sm">Chọn phường / xã<span className="text-red-500">*</span></label>
                                        <Select
                                            defaultValue="lucy"
                                            style={{ height: '42px' }}
                                            className=" w-5/6 mt-3"
                                            options={[
                                                { value: 'jack', label: 'Jack' },
                                                { value: 'lucy', label: 'Lucy' },
                                                { value: 'Yiminghe', label: 'yiminghe' },
                                                { value: 'disabled', label: 'Disabled', disabled: true },
                                            ]}
                                        />
                                    </div>
                                </div>


                                <div className="mt-5">
                                    <label htmlFor="name" className="pl-1 font-bold text-sm">Địa chỉ cụ thể<span className="text-red-500">*</span></label>
                                    <Input placeholder="Nhập địa chỉ cụ thể của bạn" className="mt-3 p-2" />
                                </div>

                                <div className="col-12 mb-4 mt-5">
                                    <label htmlFor="name" className="pl-1 font-bold text-sm">Ghi chú đơn hàng<span className="text-red-500">*</span></label>
                                    <TextArea
                                        className="mt-3"
                                        placeholder="Ghi chú đơn hàng"
                                        autoSize={{ minRows: 3, maxRows: 5 }}
                                    />
                                </div>
                            </div>

                            <div className="row mt-10">
                                <div className="col-12 col-md-6">
                                    <h5 className="flex items-center pr-2">
                                        <CreditCardOutlined />
                                        <span className="text-xl font-bold ml-2">Phương Thức Thanh Toán</span>
                                    </h5>


                                </div>

                                <div className="col-12 col-md-6">
                                    <Radio.Group className="mt-3">
                                        <h5 className="text-left fw-medium mb-0 d-flex align-items-center gap-2 mb-2">
                                            <i className="fa-solid fa-truck"></i>
                                            <Radio value={1}>Thanh toán khi nhận hàng (COD)</Radio>
                                        </h5>
                                        <h5 className="text-left fw-medium mb-0 d-flex align-items-center gap-2 mb-2">
                                            <i className="fa-solid fa-truck"></i>
                                            <Radio value={2}> Thẻ ATM/Visa/Master/JCB/QR Pay qua VNPAY-QR</Radio>
                                        </h5>
                                    </Radio.Group>

                                </div>
                            </div>


                        </form>

                        <div className=" ml-4 bg-white w-1/4 p-4">
                            <div className="">
                                <h5 className="text-xl font-bold">ĐƠN HÀNG</h5>
                                <div className="mt-5">
                                    <label htmlFor="name" className="pl-1 font-bold text-xs">MÃ PHIẾU GIẢM GIÁ</label>

                                    <Search
                                        className="mt-2  custom-search"
                                        placeholder="Nhập mã giảm giá"
                                        enterButton={<Button style={buttonStyle}>Áp Dụng</Button>}
                                        size="large"
                                    />
                                </div>
                                <img src="https://pm2ec.s3.ap-southeast-1.amazonaws.com/cms/17172282689428000.jpg" className="mt-2" />
                                <hr className="border-t border-dashed border-gray-500 w-full my-4" />
                                <div className="custom-dash d-flex flex-column gap-2 pb-3">
                                    <div className="flex mt-5">
                                        <p className="text-sm">Tạm Tính</p>
                                        <p className="font-bold fw-bold mb-0 ml-auto text-sm">40.000đ</p>
                                    </div>
                                    <div className="flex mt-3">
                                        <p className="text-sm">Giảm Giá</p>
                                        <p className="font-bold fw-bold mb-0 ml-auto text-sm">-2.000đ</p>
                                    </div>
                                    <div className="flex mt-3">
                                        <p className="text-sm">Phí Vận Chuyển</p>
                                        <p className="font-bold fw-bold mb-0 ml-auto text-sm">0đ</p>
                                    </div>
                                </div>
                                <hr className="border-t border-dashed border-gray-500 w-full my-4" />
                                <div className="custom-dash d-flex flex-column gap-2 pb-3">
                                    <div className="flex">
                                        <h5 className="">Tổng Tiền</h5>
                                        <h5 className="font-bold fw-bold mb-0 ml-auto text-red-500 ">20.000đ</h5>
                                    </div>
                                </div>
                                <hr className="border-t border-dashed border-gray-500 w-full " />
                                <button type="submit" className="mt-5 align-center p-2 bg-red-600 w-full text-white rounded">
                                    Đặt Hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 bg-white p-5">
                    <h5 className="text-xl font-bold"> Giỏ hàng <span className="text-red-600 text-xs">(5) sản phẩm</span></h5>
                    <table className="table table-striped mt-5 ">
                        <thead >
                            <th className="text-sm">Ảnh</th>
                            <th className="text-sm">Sản Phẩm</th>
                            <th className="text-sm">Giá</th>
                            <th className="text-sm">Số Lượng</th>
                            <th className="text-sm">Tổng Tiền</th>
                        </thead>

                        <tbody>
                            <tr ng-repeat="item in cart" className="position-relative">
                               
                                <td >
                                    <img src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75"  className="w-20"/>
                                </td>
                                <td className="whitespace-normal w-60 mr-10 ml-10  ">
                                    <h6><a href="#">NỮ/Áo chống nắng Sunstop Air mũ liền K2/F9UVJ084K</a></h6>
                                    <p className="mt-5">
                                        Kích thước: <span className="font-bold">L</span>
                                        <br />
                                        Màu sắc: <span className="font-bold">Red</span>
                                    </p>
                                </td>
                                <td className="text-red-500 font-bold">20.000đ</td>
                                <td className="pl-9">
                                    2
                                </td>
                                <td className="font-bold ">
                                    40.000đ
                                </td>
                            </tr>
                            <tr ng-repeat="item in cart" className="position-relative">

                                <td >
                                    <img src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75" className="w-20" />
                                </td>
                                <td className="whitespace-normal w-60 mr-10 ml-10  ">
                                    <h6><a href="#">NỮ/Áo chống nắng Sunstop Air mũ liền K2/F9UVJ084K</a></h6>
                                    <p className="mt-5">
                                        Kích thước: <span className="font-bold">L</span>
                                        <br />
                                        Màu sắc: <span className="font-bold">Red</span>
                                    </p>
                                </td>
                                <td className="text-red-500 font-bold">20.000đ</td>
                                <td className="pl-9">
                                    2
                                </td>
                                <td className="font-bold ">
                                    40.000đ
                                </td>
                            </tr>
                            <tr ng-repeat="item in cart" className="position-relative">

                                <td >
                                    <img src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75" className="w-20" />
                                </td>
                                <td className="whitespace-normal w-60 mr-10 ml-10  ">
                                    <h6><a href="#">NỮ/Áo chống nắng Sunstop Air mũ liền K2/F9UVJ084K</a></h6>
                                    <p className="mt-5">
                                        Kích thước: <span className="font-bold">L</span>
                                        <br />
                                        Màu sắc: <span className="font-bold">Red</span>
                                    </p>
                                </td>
                                <td className="text-red-500 font-bold">20.000đ</td>
                                <td className="pl-9">
                                    2
                                </td>
                                <td className="font-bold ">
                                    40.000đ
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}

export default CheckOut