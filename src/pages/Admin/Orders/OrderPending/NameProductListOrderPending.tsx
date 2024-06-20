import { useEffect, useState } from "react"
import formatNumber from "@/utilities/FormatTotal"
import { Skeleton, Tag } from "antd"
import { Link } from "react-router-dom"
import { getAllBillDetail, updateCancel, updateConfirm } from "@/api/services/Bill"
import { toast } from "react-toastify"

const NameProductListOrderPending = ({ data, onCheck }: any) => {
    const [billdetail, setBillDetail] = useState<any>()
    const [check, setCheck] = useState<any>()
    const [loading, setloading] = useState<any>(true)
    const fetchBillDetail = async () => {
        try {
            const data: any = await getAllBillDetail()
            setBillDetail(data)
        } catch (error) {
            console.error("Error fetching bill details:", error)
        } finally {
            setloading(false)
        }
    }
    useEffect(() => {
        fetchBillDetail()
    }, [])
    const billsProduct = billdetail?.find((item: any) => item?.bill_id == data?.id)
    const [color, setcolor] = useState<any>()
    const [status, setstatus] = useState<any>(false)
    useEffect(() => {
        if (data?.status == "Pending") {
            setcolor("warning")
            setstatus("Chờ xác nhận")
        }
    }, [data])
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
                    onCheck(status)
                })
                return
            } else {
                alert("Vui lòng nhập lý do hủy đơn hàng.")
            }
        }
    }
    const HandleConfirm = async (id: any) => {
        await updateConfirm(id).then(() => {
            toast.success("Bạn đã xác nhận đơn hàng")
            setcolor("processing")
            setstatus("Chờ giao hàng")
            onCheck(status)
        })
    }
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
                    <tr className="items-center justify-center p-2" key={data?.id}>
                        <td className="p-2 text-center font-normal">{data?.id}</td>
                        <td className="p-2 text-center font-normal">
                            {billsProduct?.product_name}
                        </td>
                        <td className="w-1/9 flex items-center justify-center p-2">
                            <img
                                className="h-26 w-20"
                                src={billsProduct?.image}
                                alt=""
                            />
                        </td>
                        <td
                            className="p-2 text-center font-normal"
                            style={{ width: "20%" }}
                        >
                            <span className="font-bold">Đ/c</span>:{" "}
                            {data?.Recipient_address}
                            <br />
                            <span className="font-bold">Sđt</span>:{" "}
                            {data?.Recipient_phone}
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
                            <button
                                className="mb-1 w-24 rounded bg-red-500 p-1 text-white"
                                onClick={() => HandleCancel(data?.id)}
                            >
                                Hủy
                            </button>
                            <button
                                className="mb-1 w-24 rounded bg-blue-500 p-1 text-white"
                                onClick={() => HandleConfirm(data?.id)}
                            >
                                Xác nhận
                            </button>
                            <Link to={`/quan-ly-orders/${data?.id}`}>
                                <button className="w-24 rounded border border-gray-300 bg-white p-1 text-black ">
                                    Chi tiết
                                </button>
                            </Link>
                        </td>
                    </tr>
                </>
            )}
        </>
    )
}

export default NameProductListOrderPending
