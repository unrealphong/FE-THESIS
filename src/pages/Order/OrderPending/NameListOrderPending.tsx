import {
    addHistoryBills,
    getBillsDetail,
    updateCancel,
    updateConfirm,
} from "@/api/services/Bill"
import formatNumber from "@/utilities/FormatTotal"
import { Skeleton, Tag } from "antd"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

const NameListOrderPending = ({ data, onCheck }: any) => {
    const [billdetail, setBillDetail] = useState<any>()
    const [check, setCheck] = useState<any>()
    const [loading, setloading] = useState<any>(true)
    const fetchBillDetail = async () => {
        try {
            const data1: any = await getBillsDetail(data?.id)
            setBillDetail(data1)
        } catch (error) {
            console.error("Error fetching bill details:", error)
        } finally {
            setloading(false)
        }
    }
    useEffect(() => {
        fetchBillDetail()
    }, [])
    // const billsProduct = billdetail?.find((item: any) => item?.bill_id == data?.id)
    const [color, setcolor] = useState<any>()
    const [status, setstatus] = useState<any>(false)
    useEffect(() => {
        if (data?.status == "Pending") {
            setcolor("warning")
            setstatus("Chờ xác nhận")
        }
    }, [data])
    const HandleCancel = async (id: any) => {
        const check = confirm("Bạn có chắc chắn hủy đơn hàng?")
        if (check == true) {
            const data = {
                bill_id: billdetail?.id,
                user_id: billdetail?.user_id,
                description: "Khách hàng xác nhận hủy đơn hàng",
            }
            await updateCancel(id).then(async () => {
                await addHistoryBills(data).then(() => {
                    toast.success("Bạn đã hủy đơn hàng")
                    setcolor("error")
                    setstatus("Hủy hàng")
                    onCheck(status)
                })
            })
        }
    }
    const total: any = Number(data?.total_amount)
    return (
        <>
            {
                loading ? (
                    <>
                        <div className="mt-5 flex h-24 items-center justify-center">
                            <Skeleton active />
                        </div>
                    </>
                ) :
                    <div key={data?.id} className="border border-black mb-5">
                        <div className=" flex p-2">
                            <img src={
                                billdetail?.bill_details[0]
                                    ? billdetail?.bill_details[0]?.image
                                    : ""
                            } alt="" className="w-1/5 mr-5" />
                            <div className=" d-flex flex-column">
                                <span className="text-black"> {billdetail?.bill_details[0]
                                    ? billdetail?.bill_details[0]?.product_name
                                    : ""} <p> <Tag color={color}>{status}</Tag></p></span>
                                <br />
                                <span className="text-xl text-black font-normal">{billdetail?.bill_details?.length} sản phẩm</span>
                                <br />
                                <span className="text-xl text-black font-normal">Ngày đặt hàng: {data?.created_at}</span>
                                <br />
                                <span className="text-xl text-red-600 font-normal">Thành tiền: {formatNumber(total + 30000)} đ</span>
                            </div>
                            <div className="mt-4 lg:mt-0 lg:ml-auto lg:mr-0 lg:mb-0 lg:mt-auto">

                                <Link to={`/orders/${data?.id}`}>
                                    <button className="rounded border border-gray-200 p-1 pl-4 pr-4 text-sm text-black bg-red-500 text-white font-normal">
                                        Xem chi tiết
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default NameListOrderPending
