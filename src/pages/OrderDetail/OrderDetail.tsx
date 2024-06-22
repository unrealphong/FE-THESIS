import {
    getAllBillDetail,
    getBillDetail,
    updateCancel,
    updateConfirm,
} from "@/api/services/Bill"
import { getOrderDetail } from "@/api/services/Order"
import { CarOutlined, LeftOutlined } from "@ant-design/icons"
import { Tag } from "antd"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ProductInOrderDetail from "./ProductInOrderDetail"
import formatNumber from "@/utilities/FormatTotal"
import { toast } from "react-toastify"

const OrderDetail = () => {
    const { id } = useParams()
    const [bill, setBill] = useState<any>()
    const [billdetail, setBillDetail] = useState<any>()
    const [totalPrice, setTotalPrice] = useState(0)
    const [color, setcolor] = useState<any>()
    const [status, setstatus] = useState<any>()
    const [check, setcheck] = useState<any>(false)
    const fetchOrder = async () => {
        const data: any = await getBillDetail(id)
        setBill(data)
    }
    useEffect(() => {
        fetchOrder()
    }, [status])
    const fetchBillDetail = async () => {
        const data: any = await getAllBillDetail()
        setBillDetail(data)
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
    const HandleCancel = async (id: any) => {
        await updateCancel(id).then(() => {
            toast.success("Bạn đã hủy đơn hàng")
            setcolor("error")
            setstatus("Hủy hàng")
        })
    }
    const HandleConfirm = async (id: any) => {
        await updateConfirm(id).then(() => {
            toast.success("Bạn đã xác nhận đơn hàng")
            setcolor("processing")
            setstatus("Chờ giao hàng")
            setcheck(false)
        })
    }
    return (
        <>
            <div className=" bg-White mb-10 ml-60 mr-60 mt-10 border border-gray-300 p-10">
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
                        <span className="text-xl font-bold">THÔNG TIN ĐƠN HÀNG</span>
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
                                            <ProductInOrderDetail data={data} />
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
                </div>
                {bill?.status == "Pending" ? (
                    <button
                        className="rounded bg-red-500 p-2 pl-5 pr-5 text-white"
                        onClick={() => HandleCancel(bill?.id)}
                    >
                        Hủy đơn hàng{" "}
                    </button>
                ) : (
                    <button
                        className="rounded bg-gray-300 p-2 pl-5 pr-5 text-white"
                        disabled
                    >
                        Hủy đơn hàng{" "}
                    </button>
                )}
                {bill?.status == "Shiping" ? (
                    <button
                        className="ml-5 rounded bg-green-500 p-2 pl-5 pr-5 text-white"
                        onClick={() => HandleConfirm(bill?.id)}
                    >
                        Đã nhận được hàng
                    </button>
                ) : (
                    <button className="ml-5 rounded bg-gray-300 p-2 pl-5 pr-5 text-white">
                        Đã nhận được hàng
                    </button>
                )}
            </div>
        </>
    )
}

export default OrderDetail
