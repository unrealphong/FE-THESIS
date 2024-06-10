import cart from "../../assets/images/icons/icon-cart-3.svg"
import cart1 from "../../assets/images/icons/icon-bag-4.svg"
import cart2 from "../../assets/images/icons/icon-bag-3.svg"
import {
  CreditCardOutlined,
  EnvironmentOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Button, Input, Radio, Select } from "antd"
import TextArea from "antd/es/input/TextArea"
const CheckOut = () => {
  const { Search } = Input
  const buttonStyle = {
    backgroundColor: "red",
    borderColor: "red",
    color: "white",
  }
  return (
    <>
      <main className="body m-36 mt-10 bg-gray-100 p-5">
        <div className="mb-10 mt-5 flex items-center justify-center">
          <div className="flex items-center pl-10 pr-2">
            <img src={cart} className="img-fluid" />
            <span className="fs-5 fw-light ml-2 text-xl ">Giỏ Hàng</span>
          </div>

          <hr className="my-4 w-20 border-t border-dashed border-gray-400" />

          <div className="flex items-center pl-2 pr-2">
            <img src={cart1} className="img-fluid" />
            <span className="fs-4 fw-bold text-danger ml-2 text-xl ">Đặt Hàng</span>
          </div>

          <hr className="my-4 w-20 border-t border-dashed border-gray-400" />

          <div className="flex items-center pl-2 pr-10">
            <img src={cart2} className="img-fluid text-xl" />
            <span className="fs-5 fw-light ml-2 text-xl ">Hoàn Thành Đơn Hàng</span>
          </div>
        </div>

        <div className="checkout-main container mt-5">
          <div className="row flex ">
            <form
              ng-submit="completeOrder()"
              className="w-3/4 bg-white bg-white p-5"
            >
              <div className="flex">
                <div className="flex">
                  <EnvironmentOutlined />
                  <h4 className="ml-2 text-xl font-bold">Địa Chỉ Giao Hàng</h4>
                </div>
                <a
                  className="text-danger fw-bold mb-0 ml-auto text-sm text-red-500"
                  ng-show="!isLogin"
                  href="#!login"
                >
                  <UserOutlined />
                  <span className="text-danger ml-2 ">Đăng Nhập</span>
                </a>
              </div>

              <div className="row p-0 pt-8">
                <div className="flex">
                  <div className="w-2/4">
                    <label htmlFor="name" className="pl-1 text-sm font-bold">
                      Họ Tên<span className="text-red-500">*</span>
                    </label>
                    <Input placeholder="Nhập họ tên của bạn" className="mt-3 p-2" />
                  </div>
                  <div className="ml-10 w-2/4">
                    <label htmlFor="name" className="pl-1 text-sm font-bold">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <Input placeholder="Nhập email của bạn" className="mt-3 p-2" />
                  </div>
                </div>
                <div className="mt-5 flex">
                  <div className="w-2/4">
                    <label htmlFor="name" className="pl-1 text-sm font-bold">
                      Số điện thoại<span className="text-red-500">*</span>
                    </label>
                    <Input placeholder="Nhập họ tên của bạn" className="mt-3 p-2" />
                  </div>
                  <div className="ml-10 w-2/4"></div>
                </div>
                <div className="mt-5 flex">
                  <div className="w-2/6">
                    <label htmlFor="name" className="pl-1 text-sm font-bold">
                      Chọn tỉnh / thành phố<span className="text-red-500">*</span>
                    </label>
                    <Select
                      defaultValue="lucy"
                      className=" mt-3 w-5/6"
                      style={{ height: "42px" }}
                      options={[
                        { value: "jack", label: "Jack" },
                        { value: "lucy", label: "Lucy" },
                        { value: "Yiminghe", label: "yiminghe" },
                        { value: "disabled", label: "Disabled", disabled: true },
                      ]}
                    />
                  </div>

                  <div className="w-2/6">
                    <label htmlFor="name" className="pl-1 text-sm font-bold">
                      Chọn quận / huyện<span className="text-red-500">*</span>
                    </label>
                    <Select
                      defaultValue="lucy"
                      className=" mt-3 w-5/6"
                      style={{ height: "42px" }}
                      options={[
                        { value: "jack", label: "Jack" },
                        { value: "lucy", label: "Lucy" },
                        { value: "Yiminghe", label: "yiminghe" },
                        { value: "disabled", label: "Disabled", disabled: true },
                      ]}
                    />
                  </div>

                  <div className="w-2/6">
                    <label htmlFor="name" className="pl-1 text-sm font-bold">
                      Chọn phường / xã<span className="text-red-500">*</span>
                    </label>
                    <Select
                      defaultValue="lucy"
                      style={{ height: "42px" }}
                      className=" mt-3 w-5/6"
                      options={[
                        { value: "jack", label: "Jack" },
                        { value: "lucy", label: "Lucy" },
                        { value: "Yiminghe", label: "yiminghe" },
                        { value: "disabled", label: "Disabled", disabled: true },
                      ]}
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="name" className="pl-1 text-sm font-bold">
                    Địa chỉ cụ thể<span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Nhập địa chỉ cụ thể của bạn"
                    className="mt-3 p-2"
                  />
                </div>

                <div className="col-12 mb-4 mt-5">
                  <label htmlFor="name" className="pl-1 text-sm font-bold">
                    Ghi chú đơn hàng<span className="text-red-500">*</span>
                  </label>
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
                    <span className="ml-2 text-xl font-bold">
                      Phương Thức Thanh Toán
                    </span>
                  </h5>
                </div>

                <div className="col-12 col-md-6">
                  <Radio.Group className="mt-3">
                    <h5 className="fw-medium d-flex align-items-center mb-0 mb-2 gap-2 text-left">
                      <i className="fa-solid fa-truck"></i>
                      <Radio value={1}>Thanh toán khi nhận hàng (COD)</Radio>
                    </h5>
                    <h5 className="fw-medium d-flex align-items-center mb-0 mb-2 gap-2 text-left">
                      <i className="fa-solid fa-truck"></i>
                      <Radio value={2}>
                        {" "}
                        Thẻ ATM/Visa/Master/JCB/QR Pay qua VNPAY-QR
                      </Radio>
                    </h5>
                  </Radio.Group>
                </div>
              </div>
            </form>

            <div className=" ml-4 w-1/4 bg-white p-4">
              <div className="">
                <h5 className="text-xl font-bold">ĐƠN HÀNG</h5>
                <div className="mt-5">
                  <label htmlFor="name" className="pl-1 text-xs font-bold">
                    MÃ PHIẾU GIẢM GIÁ
                  </label>

                  <Search
                    className="custom-search  mt-2"
                    placeholder="Nhập mã giảm giá"
                    enterButton={<Button style={buttonStyle}>Áp Dụng</Button>}
                    size="large"
                  />
                </div>
                <img
                  src="https://pm2ec.s3.ap-southeast-1.amazonaws.com/cms/17172282689428000.jpg"
                  className="mt-2"
                />
                <hr className="my-4 w-full border-t border-dashed border-gray-500" />
                <div className="custom-dash d-flex flex-column gap-2 pb-3">
                  <div className="mt-5 flex">
                    <p className="text-sm">Tạm Tính</p>
                    <p className="fw-bold mb-0 ml-auto text-sm font-bold">40.000đ</p>
                  </div>
                  <div className="mt-3 flex">
                    <p className="text-sm">Giảm Giá</p>
                    <p className="fw-bold mb-0 ml-auto text-sm font-bold">-2.000đ</p>
                  </div>
                  <div className="mt-3 flex">
                    <p className="text-sm">Phí Vận Chuyển</p>
                    <p className="fw-bold mb-0 ml-auto text-sm font-bold">0đ</p>
                  </div>
                </div>
                <hr className="my-4 w-full border-t border-dashed border-gray-500" />
                <div className="custom-dash d-flex flex-column gap-2 pb-3">
                  <div className="flex">
                    <h5 className="">Tổng Tiền</h5>
                    <h5 className="fw-bold mb-0 ml-auto font-bold text-red-500 ">
                      20.000đ
                    </h5>
                  </div>
                </div>
                <hr className="w-full border-t border-dashed border-gray-500 " />
                <button
                  type="submit"
                  className="align-center mt-5 w-full rounded bg-red-600 p-2 text-white"
                >
                  Đặt Hàng
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 bg-white p-5">
          <h5 className="text-xl font-bold">
            {" "}
            Giỏ hàng <span className="text-xs text-red-600">(5) sản phẩm</span>
          </h5>
          <table className="table-striped table mt-5 ">
            <thead>
              <th className="text-sm">Ảnh</th>
              <th className="text-sm">Sản Phẩm</th>
              <th className="text-sm">Giá</th>
              <th className="text-sm">Số Lượng</th>
              <th className="text-sm">Tổng Tiền</th>
            </thead>

            <tbody>
              <tr ng-repeat="item in cart" className="position-relative">
                <td>
                  <img
                    src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75"
                    className="w-20"
                  />
                </td>
                <td className="ml-10 mr-10 w-60 whitespace-normal  ">
                  <h6>
                    <a href="#">NỮ/Áo chống nắng Sunstop Air mũ liền K2/F9UVJ084K</a>
                  </h6>
                  <p className="mt-5">
                    Kích thước: <span className="font-bold">L</span>
                    <br />
                    Màu sắc: <span className="font-bold">Red</span>
                  </p>
                </td>
                <td className="font-bold text-red-500">20.000đ</td>
                <td className="pl-9">2</td>
                <td className="font-bold ">40.000đ</td>
              </tr>
              <tr ng-repeat="item in cart" className="position-relative">
                <td>
                  <img
                    src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75"
                    className="w-20"
                  />
                </td>
                <td className="ml-10 mr-10 w-60 whitespace-normal  ">
                  <h6>
                    <a href="#">NỮ/Áo chống nắng Sunstop Air mũ liền K2/F9UVJ084K</a>
                  </h6>
                  <p className="mt-5">
                    Kích thước: <span className="font-bold">L</span>
                    <br />
                    Màu sắc: <span className="font-bold">Red</span>
                  </p>
                </td>
                <td className="font-bold text-red-500">20.000đ</td>
                <td className="pl-9">2</td>
                <td className="font-bold ">40.000đ</td>
              </tr>
              <tr ng-repeat="item in cart" className="position-relative">
                <td>
                  <img
                    src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75"
                    className="w-20"
                  />
                </td>
                <td className="ml-10 mr-10 w-60 whitespace-normal  ">
                  <h6>
                    <a href="#">NỮ/Áo chống nắng Sunstop Air mũ liền K2/F9UVJ084K</a>
                  </h6>
                  <p className="mt-5">
                    Kích thước: <span className="font-bold">L</span>
                    <br />
                    Màu sắc: <span className="font-bold">Red</span>
                  </p>
                </td>
                <td className="font-bold text-red-500">20.000đ</td>
                <td className="pl-9">2</td>
                <td className="font-bold ">40.000đ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}

export default CheckOut
