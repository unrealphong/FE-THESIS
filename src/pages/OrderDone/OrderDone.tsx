import { getBillDetail } from "@/api/services/Bill"
import { Button, Result } from "antd"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const OrderDone = () => {
    const { id }: any = useParams()
    const [title, settitle] = useState("Bạn Đã Đặt Hàng Thành Công!")
    const [color, setcolor] = useState<any>()
    const [status, setstatus] = useState<any>()
    const [bill, setBill] = useState<any>()
    const fetchOrder = async () => {
        const data: any = await getBillDetail(id)
        setBill(data)
    }
    useEffect(() => {
        fetchOrder()
    }, [])
    console.log(bill)

    useEffect(() => {
        if (bill?.status == "pending") {
            setcolor("warning")
            setstatus("Đã đặt hàng")
        } else if (bill?.status == "confirm") {
            setcolor("processing")
            setstatus("Đã xác nhận")
        } else if (bill?.status == "paidShiping") {
            setcolor("red")
            setstatus("Không nhận hàng")
        } else if (bill?.status == "shiping") {
            setcolor("purple")
            setstatus("Đang giao hàng")
        } else if (bill?.status == "cancel") {
            setcolor("error")
            setstatus("Hủy hàng")
        }
    }, [bill])
    return (
        <>
            <div className=" mb-10 ml-40 mr-40 mt-10 bg-gray-100">
                <div className="row d-flex cart align-items-center justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="row g-0">
                                <Result
                                    status={color}
                                    //   status={status}
                                    title={status}
                                    extra={[
                                        <Link to="/">
                                            <Button type="primary" key="console">
                                                Trang chủ
                                            </Button>
                                        </Link>,
                                        <Link to={`/orders/${id}`}>
                                            <Button key="buy">
                                                Xem chi tiết đơn hàng
                                            </Button>
                                        </Link>,
                                    ]}
                                />
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderDone
