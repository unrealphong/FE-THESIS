import { getAllBillDetail, getBillsDetail } from "@/api/services/Bill"
import formatNumber from "@/utilities/FormatTotal"

import { Skeleton, Tag } from "antd"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ProductInAllOrderInListOrder = ({ data }: any) => {
    const [billdetail, setBillDetail] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)

    const fetchBillDetail = async () => {
        try {
            const data1: any = await getBillsDetail(data?.id)
            setBillDetail(data1)
        } catch (error) {
            console.error("Error fetching bill details:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBillDetail()
    }, [])

    // const billsProduct = billdetail?.find((item: any) => item?.bill_id == data?.id)
    const [color, setcolor] = useState<any>()
    const [status, setstatus] = useState<any>()

    useEffect(() => {
        if (data?.status == "Pending") {
            setcolor("warning")
            setstatus("Chờ xác nhận")
        } else if (data?.status == "Confirm") {
            setcolor("processing")
            setstatus("Chờ giao hàng")
        } else if (data?.status == "Paid") {
            setcolor("brown")
            setstatus("Chờ xác nhận")
        } else if (data?.status == "Shiping") {
            setcolor("purple")
            setstatus("Đang giao hàng")
        } else if (data?.status == "Done") {
            setcolor("green")
            setstatus("Hoàn thành")
        } else if (data?.status == "Cancel") {
            setcolor("error")
            setstatus("Hủy hàng")
        }
    }, [data])

    const total: any = Number(data?.total_amount)
    return (
        <>
            {loading ? (
                <>
                    <tr className="mt-2">
                        <td colSpan={9}>
                            <div className="mt-5 flex h-24 items-center justify-center">
                                <Skeleton active />
                            </div>
                        </td>
                    </tr>
                </>
            ) : (
                <>
                    <tr>
                        <th className="font-normal">{data?.id}</th>
                        <th className="font-normal">
                            {" "}
                            {billdetail?.bill_details[0]
                                ? billdetail?.bill_details[0].product_name
                                : ""}
                        </th>
                        <td className="mt-5 flex items-center justify-center pb-5">
                            <img
                                src={
                                    billdetail?.bill_details[0]
                                        ? billdetail?.bill_details[0].image
                                        : ""
                                }
                                className="w-20 "
                            />
                        </td>
                        <th className="font-normal">{data?.created_at}</th>
                        <th className="font-normal">
                            {formatNumber(total + 30000)} đ
                        </th>
                        <th className="font-normal">
                            <Tag color={color}>{status}</Tag>
                        </th>
                        <th className="font-normal">
                            <Link to={`/orders/${data?.id}`}>
                                <button className="rounded  border border-gray-200 p-1 pl-4 pr-4 text-sm text-black hover:bg-red-500 hover:text-white">
                                    Xem chi tiết
                                </button>
                            </Link>
                        </th>
                    </tr>
                </>
            )}
        </>
    )
}

export default ProductInAllOrderInListOrder
