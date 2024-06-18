import cart from "../../assets/images/icons/icon-cart-3.svg"
import cart1 from "../../assets/images/icons/icon-bag-4.svg"
import cart2 from "../../assets/images/icons/icon-bag-3.svg"
import {
    CreditCardOutlined,
    EnvironmentOutlined,
    UserOutlined,
} from "@ant-design/icons"
import { Button, Form, Input, Modal, Radio, Select } from "antd"
import TextArea from "antd/es/input/TextArea"
import ProvinceInCheckOut from "./ProvinceInCheckOut"
import { useEffect, useState } from "react"
import DistrictInCheckOut from "./DistrictInCheckOut"
import WardInCheckOut from "./WardInCheckOut"
import CartInCheckOut from "./CartInCheckOut"
import formatNumber from "@/utilities/FormatTotal"
import { useNavigate } from "react-router-dom"
import { addBill, addBillDetail } from "@/api/services/Bill"
const CheckOut = () => {
    const [form] = Form.useForm()
    const user = JSON.parse(localStorage.getItem("user") || "null")
    useEffect(() => {
        form.setFieldsValue(user?.data)
    }, [])
    const [provinceId, setprovinceId] = useState<any>()
    const [provinceName, setprovinceName] = useState<any>()
    const [districtId, setdistrictId] = useState<any>()
    const [districtName, setDistrictName] = useState<any>()
    const [wardName, setWardName] = useState<any>()
    const [adressdetail, setadressdetail] = useState<any>()
    const [phone, setPhone] = useState<any>()
    const { Search } = Input
    const buttonStyle = {
        backgroundColor: "red",
        borderColor: "red",
        color: "white",
    }
    const nameprovince = (name: any) => {
        setprovinceName(name)
    }
    const idprovince = (id: any) => {
        setprovinceId(id)
    }
    const namedistrict = (name: any) => {
        setDistrictName(name)
    }
    const iddistrict = (id: any) => {
        setdistrictId(id)
    }
    const nameWard = (name: any) => {
        setWardName(name)
    }
    const carts = JSON.parse(localStorage.getItem("cart") || "[]")
    const totalCartPrice = carts.reduce(
        (total: any, item: any) => total + item.price * item.quantity,
        0,
    )

    const navigate = useNavigate()
    const handleOk = () => {
        navigate("/dang-nhap")
    }
    const handleCancel = () => {
        navigate("/dang-ki")
    }
    const handleAdress = (e: any) => {
        setadressdetail(e.target.value)
    }
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const handleOrder = async () => {
        const data = {
            user_id: user?.data?.id,
            recipient_address: `${adressdetail}, ${wardName}, ${districtName}, ${provinceName}`,
            recipient_phone: phone,
            total_amount: totalCartPrice,
            status: "pending",
            bill_date: "2004-08-29",
        }
        const response: any = await addBill(data)
        if (response) {
            const data2: any = { data: [] }
            await Promise.all(
                carts.map(async (element: any) => {
                    const data1 = {
                        product_name: element?.name_product,
                        attribute_name: "null",
                        price: element?.price,
                        quantity: element?.quantity,
                        bill_id: response?.data?.id,
                        voucher: "null",
                        image: "null",
                    }
                    data2.data.push(data1)
                }),
            )

            console.log(data2)
            await addBillDetail(data2)
            localStorage.removeItem("cart")
            navigate(`/order_done/${response?.data?.id}`)
        }
    }

    if (user == null) {
        return (
            <>
                <Modal
                    title="Cảnh báo !"
                    open={true}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText="Đăng nhập"
                    cancelText="Đăng kí"
                >
                    <p>Bạn cần đăng nhập hoặc đăng kí!</p>
                </Modal>
            </>
        )
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
                        <span className="fs-4 fw-bold text-danger ml-2 text-xl ">
                            Đặt Hàng
                        </span>
                    </div>

                    <hr className="my-4 w-20 border-t border-dashed border-gray-400" />

                    <div className="flex items-center pl-2 pr-10">
                        <img src={cart2} className="img-fluid text-xl" />
                        <span className="fs-5 fw-light ml-2 text-xl ">
                            Hoàn Thành Đơn Hàng
                        </span>
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
                                    <h4 className="ml-2 text-xl font-bold">
                                        Địa Chỉ Giao Hàng
                                    </h4>
                                </div>
                                {user != null ? (
                                    ""
                                ) : (
                                    <a
                                        className="text-danger fw-bold mb-0 ml-auto text-sm text-red-500"
                                        ng-show="!isLogin"
                                        href="#!login"
                                    >
                                        <UserOutlined />
                                        <span className="text-danger ml-2 ">
                                            Đăng Nhập
                                        </span>
                                    </a>
                                )}
                            </div>

                            <Form
                                className="row p-0 pt-8"
                                form={form}
                                onFinish={handleOrder}
                            >
                                <div className="flex">
                                    <div className="w-2/4">
                                        <label
                                            htmlFor="name"
                                            className="pl-1 text-sm font-bold"
                                        >
                                            Họ Tên
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <Form.Item
                                            name="name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Không được để trống tên ",
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="Nhập họ tên của bạn"
                                                className="mt-3 p-2"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="ml-10 w-2/4">
                                        <label
                                            htmlFor="name"
                                            className="pl-1 text-sm font-bold"
                                        >
                                            Email
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <Form.Item
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Không được để trống email ",
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="Nhập email của bạn"
                                                className="mt-3 p-2"
                                            />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="mt-5 flex">
                                    <div className="w-2/4">
                                        <label
                                            htmlFor="name"
                                            className="pl-1 text-sm font-bold"
                                        >
                                            Số điện thoại
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <Form.Item
                                            name="number"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Không được để trống số điện thoại ",
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="Nhập số điện thoại của bạn"
                                                className="mt-3 p-2"
                                                type="number"
                                                onChange={(e) =>
                                                    setPhone(e.target.value)
                                                }
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="ml-10 w-2/4"></div>
                                </div>
                                <div className="mt-5 flex">
                                    <ProvinceInCheckOut
                                        onIDProvince={idprovince}
                                        onNameProvince={nameprovince}
                                    />

                                    <DistrictInCheckOut
                                        id={provinceId}
                                        onIDDistrict={iddistrict}
                                        onNameDistrict={namedistrict}
                                    />

                                    <WardInCheckOut
                                        id={districtId}
                                        onNameWard={nameWard}
                                    />
                                </div>

                                <div className="mt-5">
                                    <label
                                        htmlFor="name"
                                        className="pl-1 text-sm font-bold"
                                    >
                                        Địa chỉ cụ thể
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        placeholder="Nhập địa chỉ cụ thể của bạn"
                                        className="mt-3 p-2"
                                        onChange={(e: any) => handleAdress(e)}
                                    />
                                </div>

                                <div className="col-12 mb-4 mt-5">
                                    <label
                                        htmlFor="name"
                                        className="pl-1 text-sm font-bold"
                                    >
                                        Ghi chú đơn hàng
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <TextArea
                                        className="mt-3"
                                        placeholder="Ghi chú đơn hàng"
                                        autoSize={{ minRows: 3, maxRows: 5 }}
                                    />
                                </div>
                            </Form>

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
                                            <Radio value={1}>
                                                Thanh toán khi nhận hàng (COD)
                                            </Radio>
                                        </h5>
                                        <h5 className="fw-medium d-flex align-items-center mb-0 mb-2 gap-2 text-left">
                                            <i className="fa-solid fa-truck"></i>
                                            <Radio value={2}>
                                                Thẻ ATM/Visa/Master/JCB/QR Pay qua
                                                VNPAY-QR
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
                                    <label
                                        htmlFor="name"
                                        className="pl-1 text-xs font-bold"
                                    >
                                        MÃ PHIẾU GIẢM GIÁ
                                    </label>

                                    <Search
                                        className="custom-search  mt-2"
                                        placeholder="Nhập mã giảm giá"
                                        enterButton={
                                            <Button style={buttonStyle}>
                                                Áp Dụng
                                            </Button>
                                        }
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
                                        <p className="fw-bold mb-0 ml-auto text-sm font-bold">
                                            {formatNumber(totalCartPrice)} đ
                                        </p>
                                    </div>
                                    <div className="mt-3 flex">
                                        <p className="text-sm">Giảm Giá</p>
                                        <p className="fw-bold mb-0 ml-auto text-sm font-bold">
                                            0đ
                                        </p>
                                    </div>
                                    <div className="mt-3 flex">
                                        <p className="text-sm">Phí Vận Chuyển</p>
                                        <p className="fw-bold mb-0 ml-auto text-sm font-bold">
                                            0đ
                                        </p>
                                    </div>
                                </div>
                                <hr className="my-4 w-full border-t border-dashed border-gray-500" />
                                <div className="custom-dash d-flex flex-column gap-2 pb-3">
                                    <div className="flex">
                                        <h5 className="">Tổng Tiền</h5>
                                        <h5 className="fw-bold mb-0 ml-auto font-bold text-red-500 ">
                                            {formatNumber(totalCartPrice)} đ
                                        </h5>
                                    </div>
                                </div>
                                <hr className="w-full border-t border-dashed border-gray-500 " />
                                <Button
                                    onClick={() => handleOrder()}
                                    className="align-center mt-5 w-full rounded bg-red-600 p-2 text-white"
                                >
                                    Đặt Hàng
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <CartInCheckOut />
            </main>
        </>
    )
}

export default CheckOut
