
import { getAllBillDetail, getBillDetail } from "@/api/services/Bill"
import { getOrderDetail } from "@/api/services/Order"
import { CarOutlined, LeftOutlined, LoadingOutlined, RightOutlined } from "@ant-design/icons"
import { Spin, Tag } from "antd"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import formatNumber from "@/utilities/FormatTotal"
import ProductOrderDetailInAdmin from "./ProductOrderDetailInAdmin"

const OrderDetailInListOrderAdmin = () => {
    const { id } = useParams()
    const [bill, setBill] = useState<any>()
    const [billdetail, setBillDetail] = useState<any>()
    const [totalPrice, setTotalPrice] = useState(0)
    const [loading, setloading] = useState(true)
    const fetchOrder = async () => {
        const data: any = await getBillDetail(id)
        setBill(data)
    }
    useEffect(() => {
        fetchOrder()
    }, [])
    const fetchBillDetail = async () => {
        try {
            const data: any = await getAllBillDetail()
            setBillDetail(data)
        } catch {

        } finally {
            setloading(false)
        }

    }
    useEffect(() => {
        fetchBillDetail()
    }, [])
    const ProductInbill = billdetail?.filter((data: any) => data?.bill_id == id)
    useEffect(() => {
        const totalPrice: any = calculateTotalClick()
        setTotalPrice(totalPrice)
    }, [ProductInbill])

    const calculateTotalClick = () => {
        let total = 0
        if (ProductInbill) {
            ProductInbill.forEach((product: any) => {
                const price = parseFloat(product.price)
                const quantity = parseInt(product.quantity, 10)
                if (!isNaN(price) && !isNaN(quantity)) {
                    total += price * quantity
                }
            })
            return total
        }
    }

    return (
        <>
            <div className="w-full p-5 pl-10 pr-10 bg-white">
                <div className="w-full">
                    <div className="flex">
                        <Link to="/quan-ly-orders">
                            <button>
                                <LeftOutlined /> Quay lại
                            </button>
                        </Link>
                        <Link to="/bill/1" className="ml-auto mt-1">
                            <button>
                                Xem hóa đơn <RightOutlined />
                            </button>
                        </Link>
                    </div>
                    {loading ? <> <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100px",
                        }}
                    >
                        <Spin
                            indicator={
                                <LoadingOutlined
                                    style={{ fontSize: 48 }}
                                    spin
                                />
                            }
                        />
                    </div></> : <>
                        <div className="mt-10 flex">
                            <span className="text-2xl font-bold">
                                CHI TIẾT ĐƠN HÀNG #{bill?.id}
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
                                    <p>Địa chỉ: {bill?.Recipient_address}</p>
                                    <p>Điện thoại: {bill?.Recipient_phone}</p>
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
                                ({ProductInbill?.length} sản phẩm)
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
                                    {ProductInbill?.map((data: any) => {
                                        return (
                                            <>
                                                <ProductOrderDetailInAdmin data={data} />
                                            </>
                                        )
                                    })}
                                </tbody>
                            </table>

                            <hr className="my-4 ml-2 mr-2 w-full border-t border-dashed border-gray-400" />
                            <div className="flex">
                                <p className="text-xl">Tổng cộng</p>
                                <p className="mb-20 ml-auto text-3xl font-bold text-red-500">
                                    {formatNumber(totalPrice)} đ
                                </p>
                            </div>
                        </div>
                    </>}

                </div>
            </div>
        </>
    )
}

export default OrderDetailInListOrderAdmin