import { getAllBillDetail, updateCancel } from "@/api/services/Bill"
import { useEffect, useState } from "react"
import formatNumber from "@/utilities/FormatTotal"
import { Tag } from "antd"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

const NameProductInListOrderAdmin = ({ data, key1 }: any) => {
    const [billdetail, setBillDetail] = useState<any>()
    const [check, setcheck] = useState<any>(false)
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
        if (data?.status == "Pending") {
            setcolor("warning")
            setstatus("Chờ xác nhận")
            setcheck(true)
        } else if (data?.status == "Confirm") {
            setcolor("processing")
            setstatus("Chờ giao hàng")
        } else if (data?.status == "Paid") {
            setcolor("brown")
            setstatus("Chờ xác nhận")
            setcheck(true)
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
    }, [data, key1])
    const HandleCancel = async (id: any) => {
        let input: any = ""
        while (input.trim() === "") {
            input = window.prompt("Lý do hủy đơn hàng:")
            if (input === null) {
                return
            }
            if (input.trim() !== "") {
                console.log("Reason entered:", input)
                await updateCancel(id).then(() => {
                    toast.success("Banbạn đã hủy đơn hàng")
                    setcolor("error")
                    setstatus("Hủy hàng")
                    setcheck(false)
                })
                return
            } else {
                alert("Vui lòng nhập lý do hủy đơn hàng.")
            }
        }
    }
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
                    {check ? (
                        <>
                            <button
                                className="mb-1 w-24 rounded bg-red-500 p-1 text-white"
                                onClick={() => HandleCancel(data?.id)}
                            >
                                Hủy
                            </button>
                            <button className="mb-1 w-24 rounded bg-blue-500 p-1 text-white">
                                Xác nhận
                            </button>
                            <Link to={`/quan-ly-orders/${data?.id}`}>
                                <button className="w-24 rounded border border-gray-300 bg-white p-1 text-black ">
                                    Chi tiết
                                </button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to={`/quan-ly-orders/${data?.id}`}>
                                <button className="w-24 rounded border border-gray-300 bg-white p-1 text-black ">
                                    Chi tiết
                                </button>
                            </Link>
                        </>
                    )}
                </td>
            </tr>
        </>
    )
}

export default NameProductInListOrderAdmin
