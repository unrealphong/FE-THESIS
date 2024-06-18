import { getAllBillDetail, getBillDetail } from "@/api/services/Bill"
import formatNumber from "@/utilities/FormatTotal"
import { LoadingOutlined } from "@ant-design/icons"
import { Spin, Tag } from "antd"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ProductInAllOrderInListOrder = ({ data }: any) => {
    const [billdetail, setBillDetail] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)

    const fetchBillDetail = async () => {
        try {
            const data: any = await getAllBillDetail()
            setBillDetail(data)
        } catch (error) {
            console.error("Error fetching bill details:", error)
        }
    }

    useEffect(() => {
        fetchBillDetail()
    }, [])

    const billsProduct = billdetail?.find((item: any) => item?.bill_id == data?.id)

    return (
        <>
            <tr>
                <th className="font-normal">{data?.id}</th>
                <th className="font-normal">{billsProduct?.product_name}</th>
                <td className="mt-5 flex items-center justify-center pb-5">
                    <img
                        src="https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.amazonaws.com%2Fcms%2Fproducts%2FK2F9UVJ084K02%2F4de6307af8244398aef8af615b3ff526_thumbnail.jpg&w=128&q=75"
                        className="w-20 "
                    />
                </td>
                <th className="font-normal">{data?.created_at}</th>
                <th className="font-normal">{formatNumber(data?.total_amount)} đ</th>
                <th className="font-normal">
                    <Tag color="success">{data?.status}</Tag>
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
    )
}

export default ProductInAllOrderInListOrder
