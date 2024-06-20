import { getAllBillDetail, getBillDetail, getBillsDetail } from "@/api/services/Bill"
import {
    CarOutlined,
    LeftOutlined,
    LoadingOutlined,
    RightOutlined,
} from "@ant-design/icons"
import { Spin, Tag } from "antd"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import formatNumber from "@/utilities/FormatTotal"
import ProductOrderDetailInAdmin from "./ProductOrderDetailInAdmin"

const OrderDetailInListOrderAdmin = () => {
    const { id } = useParams()
    const [bill, setBill] = useState<any>()
    const [totalPrice, setTotalPrice] = useState(0)
    const [loading, setloading] = useState(true)
    const fetchOrder = async () => {
        try {
            const data: any = await getBillsDetail(id)
            setBill(data)
        } catch {
        } finally {
            setloading(false)
        }
    }
    useEffect(() => {
        fetchOrder()
    }, [])
    const ProductInbill = bill?.bill_details?.filter(
        (data: any) => data?.bill_id == id,
    )
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
    const [color, setcolor] = useState<any>()
    const [status, setstatus] = useState<any>()
    const [check, setcheck] = useState<any>(false)
    useEffect(() => {
        if (bill?.status == "Pending") {
            setcolor("warning")
            setstatus("Chờ xác nhận")
            setcheck(true)
        } else if (bill?.status == "Confirm") {
            setcolor("processing")
            setstatus("Chờ giao hàng")
        } else if (bill?.status == "Paid") {
            setcolor("brown")
            setstatus("Chờ xác nhận")
            setcheck(true)
        } else if (bill?.status == "Shiping") {
            setcolor("purple")
            setstatus("Đang giao hàng")
        } else if (bill?.status == "Done") {
            setcolor("green")
            setstatus("Hoàn thành")
        } else if (bill?.status == "Cancel") {
            setcolor("error")
            setstatus("Hủy hàng")
        }
    }, [bill])
    console.log(check)
    return (
        <>
            <div className="w-full bg-white p-5 pl-10 pr-10">
                <div className="w-full">
                    <div className="flex">
                        <Link to="/quan-ly-orders">
                            <button>
                                <LeftOutlined /> Quay lại
                            </button>
                        </Link>
                        {check ? (
                            ""
                        ) : (
                            <>
                                <Link to="/bill/1" className="ml-auto mt-1">
                                    <button>
                                        Xem hóa đơn <RightOutlined />
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                    {loading ? (
                        <>
                            <div
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
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="mt-10 flex">
                                <span className="text-2xl font-bold">
                                    CHI TIẾT ĐƠN HÀNG #{bill?.id}
                                </span>
                                <Tag
                                    color={color}
                                    className="ml-auto mt-1 text-sm font-bold"
                                >
                                    {status}
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
                                        <span className="font-bold">
                                            nguyen van A
                                        </span>
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
                                        <span className="font-bold">
                                            nguyen van A
                                        </span>
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
                                <span className="text-xl font-bold">
                                    THÔNG TIN SẢN PHẨM
                                </span>
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
                                        {loading ? (
                                            <>
                                                <div className="flex h-24 items-center justify-center">
                                                    <Spin
                                                        indicator={
                                                            <LoadingOutlined
                                                                style={{
                                                                    fontSize: 48,
                                                                }}
                                                                spin
                                                            />
                                                        }
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                {bill?.bill_details?.map(
                                                    (data: any) => {
                                                        return (
                                                            <>
                                                                <ProductOrderDetailInAdmin
                                                                    data={data}
                                                                    loading={loading}
                                                                />
                                                            </>
                                                        )
                                                    },
                                                )}
                                            </>
                                        )}
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
                            <div className="mb-4 mt-4">
                                <span className="text-xl font-bold">
                                    LỊCH SỬ UPDATE ĐƠN HÀNG
                                </span>
                            </div>
                            <div>
                                <table className="mb-10 w-full bg-gray-200">
                                    <thead>
                                        <th className="p-2">Người update</th>
                                        <th className="p-2">Nội dung update</th>
                                        <th className="p-2">Thời gian update</th>
                                    </thead>
                                    <tbody className="bg-white text-center align-middle ">
                                        <tr className="w-1/4 border border-gray-200 ">
                                            <th className="border border-gray-200 p-2 font-normal">
                                                ADMIN
                                            </th>
                                            <th className="border border-gray-200 p-2 font-normal">
                                                Trạng thái : Hoàn thành
                                            </th>
                                            <th className="border border-gray-200 p-2 font-normal">
                                                11:34:23
                                            </th>
                                        </tr>
                                        <tr className="w-1/4 border border-gray-200">
                                            <th className="border border-gray-200 p-2 font-normal">
                                                ADMIN
                                            </th>
                                            <th className="border border-gray-200 p-2 font-normal">
                                                Trạng thái : Hoàn thành
                                            </th>
                                            <th className="border border-gray-200 p-2 font-normal">
                                                11:34:23
                                            </th>
                                        </tr>
                                        <tr className="w-1/4 border border-gray-200">
                                            <th className="border border-gray-200 p-2 font-normal">
                                                ADMIN
                                            </th>
                                            <th className="border border-gray-200 p-2 font-normal">
                                                Trạng thái : Hoàn thành
                                            </th>
                                            <th className="border border-gray-200 p-2 font-normal">
                                                11:34:23
                                            </th>
                                        </tr>
                                        <tr className="w-1/4 border border-gray-200">
                                            <th className="border border-gray-200 p-2 font-normal">
                                                ADMIN
                                            </th>
                                            <th className="border border-gray-200 p-2 font-normal">
                                                Trạng thái : Hoàn thành
                                            </th>
                                            <th className="border border-gray-200 p-2 font-normal">
                                                11:34:23
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default OrderDetailInListOrderAdmin
