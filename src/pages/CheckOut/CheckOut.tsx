import cart from "../../assets/images/icons/icon-cart-3.svg"
import cart1 from "../../assets/images/icons/icon-bag-4.svg"
import cart2 from "../../assets/images/icons/icon-bag-3.svg"
import {
    CreditCardOutlined,
    EnvironmentOutlined,
    QuestionCircleOutlined,
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
import { toast } from "react-toastify"
import { getCartOrder } from "@/api/services/Order"
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
    const [paymentMethod, setPaymentMethod] = useState<any>()
    const [name, setname] = useState<any>()
    const [descbill, setdescbill] = useState<any>()

    const handlePaymentChange = (e: any) => {
        if (e.target.value == "COD") {
            setPaymentMethod("COD")
        } else {
            setPaymentMethod("ONLINE")
        }
    }
    const { Search } = Input
    const buttonStyle = {
        backgroundColor: "red",
        borderColor: "red",
        color: "white",
    }
    const buttonStyles = {
        backgroundColor: "gray",
        borderColor: "gray",
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
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [cartt, setcart] = useState<any>()
    const handleCartUpdate = async () => {
        const storedCarts = JSON.parse(localStorage.getItem("cart")!) || []
        setcart(storedCarts)
        const data = { data: storedCarts }
        const allCart: any = await getCartOrder(data)
        setcart(allCart)
        console.log(allCart)

        if (
            allCart?.data?.every((item: any) => item.sale_id === 1) &&
            allCart?.data?.reduce(
                (sum: number, item: any) => sum + item.quantity,
                0,
            ) === 3
        ) {
            const total = allCart?.data?.reduce(
                (sum: number, item: any) => sum + item.price * item.quantity,
                0,
            )
            const discountedTotal = total * 0.9 // Apply 10% discount
            setTotalPrice(discountedTotal)
        } else {
            const total = allCart?.data?.reduce(
                (sum: number, item: any) => sum + item.price * item.quantity,
                0,
            )
            setTotalPrice(total)
        }
    }
    useEffect(() => {
        handleCartUpdate()
    }, [])
    console.log(totalPrice)

    const carts = JSON.parse(localStorage.getItem("cart") || "[]")
    const totalCartPrice = cartt?.data?.reduce(
        (total: any, item: any, index: any) =>
            total + item.price * carts[index]?.quantity,
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
            recipient_address: `${name ? name : form.getFieldValue("name")}; ${descbill};${adressdetail}, ${wardName}, ${districtName}, ${provinceName}`,
            recipient_phone: phone,
            total_amount: price3 > 0 ? price3 : totalCartPrice,
            status: "Pending",
            pay: paymentMethod,
            bill_date: "2004-08-29",
        }
        const response: any = await addBill(data)
        if (response) {
            const data2: any = { data: [] }
            await Promise.all(
                carts.map(async (element: any, index: any) => {
                    const data1 = {
                        product_name: element?.name_product,
                        attribute: `${cartt?.data[index]?.attributes[0].attribute_value}; ${cartt?.data[index]?.attributes[1].attribute_value}`,
                        price: cartt?.data[index]?.price,
                        quantity: element?.quantity,
                        bill_id: response?.data?.id,
                        voucher: "null",
                        image: element?.image,
                    }
                    data2.data.push(data1)
                }),
            )

            await addBillDetail(data2).then((data) => {
                if (data?.status == true) {
                    toast.success("Đặt hàng thành công")
                    localStorage.removeItem("cart")
                    window.location.href = `/order_done/ ${response?.data?.id} `
                } else {
                    toast.error("Đặt hàng thất bại")
                }
                console.log(data)
            })
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
    const [price3, setprice3] = useState<any>(0)
    const [check, setcheck] = useState<any>()
    const buy3 = (price: any, check: any) => {
        setprice3(price)
        setcheck(check)
    }
    console.log(price3)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleOks = () => {
        setIsModalOpen(false)
    }

    const handleCancels = () => {
        setIsModalOpen(false)
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
                                                onChange={(e) =>
                                                    setname(e.target.value)
                                                }
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
                                        onChange={(e) => setdescbill(e.target.value)}
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

                                <div className="w-full">
                                    <Radio.Group className="mt-3 w-full">
                                        <h5 className="w-full">
                                            <Input
                                                type="radio"
                                                style={{
                                                    width: "4%",
                                                    height: "16px",
                                                }}
                                                id="paypal"
                                                name="a"
                                                value="COD"
                                                onChange={handlePaymentChange}
                                            />
                                            <span className="w-full text-sm">
                                                {" "}
                                                Thanh toán khi nhận hàng (COD)
                                            </span>
                                        </h5>
                                    </Radio.Group>
                                    <Radio.Group className="mt-3 w-full">
                                        <h5 className="w-full">
                                            <Input
                                                className="text-xl"
                                                type="radio"
                                                style={{
                                                    width: "4%",
                                                    height: "16px",
                                                    fontSize: "20px",
                                                }}
                                                id="paypal"
                                                name="a"
                                                value="COD"
                                                onChange={handlePaymentChange}
                                            />
                                            <span className="w-full text-sm">
                                                {" "}
                                                Thanh toán online (VNPAY)
                                            </span>
                                        </h5>
                                    </Radio.Group>
                                </div>
                            </div>
                        </form>

                        <div className=" ml-4 w-1/4 bg-white p-4">
                            <div className="">
                                <h5 className="text-xl font-bold">ĐƠN HÀNG</h5>
                                {price3 > 0 ? (
                                    <>
                                        {" "}
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
                                                    <Button style={buttonStyles}>
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
                                    </>
                                ) : (
                                    <>
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
                                                disabled={true}
                                                enterButton={
                                                    <Button
                                                        style={buttonStyle}
                                                        disabled
                                                    >
                                                        Áp Dụng
                                                    </Button>
                                                }
                                                size="large"
                                            />
                                        </div>
                                        <img
                                            src="https://pm2ec.s3.ap-southeast-1.amazonaws.com/cms/17172282689428000.jpg"
                                            className="mt-2"
                                        />{" "}
                                    </>
                                )}

                                <hr className="my-4 w-full border-t border-dashed border-gray-500" />
                                <div className="custom-dash d-flex flex-column gap-2 pb-3">
                                    <div className="mt-5 flex">
                                        <p className="text-sm">Tạm Tính</p>
                                        <p className="fw-bold mb-0 ml-auto text-sm font-bold">
                                            {formatNumber(totalCartPrice)} đ
                                        </p>
                                    </div>
                                    <div className="mt-3 flex">
                                        <p className="mr-1 text-sm">Giảm Giá </p>
                                        <QuestionCircleOutlined
                                            onClick={showModal}
                                        />
                                        <Modal
                                            title="Giảm giá"
                                            open={isModalOpen}
                                            onOk={handleOks}
                                            onCancel={handleCancels}
                                        >
                                            <p>
                                                Để có được giảm giá bạn cần mua các
                                                sản phẩm có ưu đãi của chúng tôi!
                                            </p>
                                            <p>
                                                Đồng thời bạn không thể nhập voucher
                                                áp dùng nữa!
                                            </p>
                                        </Modal>
                                        <p className="fw-bold mb-0 ml-auto text-sm font-bold">
                                            {check == true
                                                ? formatNumber(
                                                      totalCartPrice - price3,
                                                  )
                                                : 0}
                                            đ
                                        </p>
                                    </div>
                                    <div className="mt-3 flex">
                                        <p className="text-sm">Phí Vận Chuyển</p>
                                        <p className="fw-bold mb-0 ml-auto text-sm font-bold">
                                            30.000 đ
                                        </p>
                                    </div>
                                </div>
                                <hr className="my-4 w-full border-t border-dashed border-gray-500" />
                                <div className="custom-dash d-flex flex-column gap-2 pb-3">
                                    <div className="flex">
                                        <h5 className="">Tổng Tiền</h5>
                                        <h5 className="fw-bold mb-0 ml-auto font-bold text-red-500 ">
                                            {price3 > 0
                                                ? formatNumber(price3 + 30000)
                                                : formatNumber(
                                                      totalCartPrice + 30000,
                                                  )}
                                            đ
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

                <CartInCheckOut onPriceBuy3={buy3} />
            </main>
        </>
    )
}

export default CheckOut
