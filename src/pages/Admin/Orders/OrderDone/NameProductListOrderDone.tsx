import { getAllBillDetail } from "@/api/services/Bill"
import formatNumber from "@/utilities/FormatTotal"
import { Tag } from "antd"
import  { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const NameProductListOrderDone = ({ data }: any) => {
    const [billdetail, setBillDetail] = useState<any>()
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
    const [color, setcolor] = useState<any>()
    const [status, setstatus] = useState<any>()
    useEffect(() => {
        if (data?.status == "Done") {
            setcolor("green")
            setstatus("Hoàn thành")
        }
    }, [data])
    return (
        <>
            <tr className="items-center justify-center p-2" key={data?.id}>
                <td className="p-2 text-center font-normal">{data?.id}</td>
                <td className="p-2 text-center font-normal">
                    {billsProduct?.product_name}
                </td>
                <td className="w-1/9 flex items-center justify-center p-2">
                    <img className="h-26 w-20" src={billsProduct?.image} alt="" />
                </td>
                <td className="p-2 text-center font-normal" style={{ width: "20%" }}>
                    <span className="font-bold">Đ/c</span>: {data?.Recipient_address}
                    <br />
                    <span className="font-bold">Sđt</span>: {data?.Recipient_phone}
                </td>
                <td
                    className="p-2 text-center font-normal "
                    style={{ width: "10%" }}
                >
                    {formatNumber(data?.total_amount)} đ
                </td>
                <td className="p-2 text-center font-normal">
                    {data?.created_at.substring(0, 19)}
                </td>
                <td className="p-2 text-center font-normal">COD</td>
                <td className="p-2 text-center font-normal">
                    <Tag color={color}>{status}</Tag>
                </td>
                <td className="p-2 font-normal" style={{ width: "10%" }}>
                    <Link to={`/quan-ly-orders/${data?.id}`}>
                        <button className="w-24 rounded border border-gray-300 bg-white p-1 text-black ">
                            Chi tiết
                        </button>
                    </Link>
                </td>
            </tr>
        </>
    )
}

export default NameProductListOrderDone
